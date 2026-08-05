import { useEffect, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

// Same curve and travel as FadeIn/Stagger elsewhere, so the menu reads as part of
// the site's motion language rather than a one-off. Shorter than the 0.6s page
// entrances — chrome should answer a tap immediately.
const EASE = [0.22, 1, 0.36, 1] as const;

export function Nav() {
  const links = [
    { to: "/", label: "Início" },
    { to: "/projetos", label: "Projetos" },
    { to: "/servicos", label: "Serviços" },
    { to: "/sobre", label: "Sobre" },
    { to: "/contato", label: "Contato" },
  ] as const;

  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();

  // Fecha o menu automaticamente ao trocar de rota.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Enquanto o menu cobre a tela, a página atrás não deve rolar.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  // O menu em tela cheia só existe no mobile. Se a janela crescer para desktop com
  // ele aberto, fecha — senão a barra fica sem fundo e com a marca na cor errada.
  useEffect(() => {
    if (!open) return;
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      if (mq.matches) setOpen(false);
    };
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [open]);

  // Esc fecha e devolve o foco ao botão que abriu.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // Rotas com fundo escuro (degrade) usam texto branco + hover azul claro.
  // Demais rotas usam texto preto + hover roxo primário.
  const darkBgRoutes = ["/"];
  const isDarkBg = darkBgRoutes.includes(pathname);

  const baseText = isDarkBg ? "text-white" : "text-black";
  const hoverText = isDarkBg ? "hover:text-sky" : "hover:text-primary";
  const activeColor = isDarkBg ? "text-sky" : "text-primary";

  // Efeito de vidro para melhorar leitura quando a barra sobrepõe conteúdo.
  const glass = isDarkBg
    ? "backdrop-blur-md bg-black/20 border-b border-white/10"
    : "backdrop-blur-md bg-white/40 border-b border-black/10";

  // Mesmo vidro, escopado em md+. Fica aplicado mesmo com o menu aberto, para que
  // a barra do desktop nunca dependa do listener de breakpoint ter rodado.
  const glassMd = isDarkBg
    ? "md:backdrop-blur-md md:bg-black/20 md:border-b md:border-white/10"
    : "md:backdrop-blur-md md:bg-white/40 md:border-b md:border-black/10";

  // A barra fechada adapta a cor porque é translúcida e fica POR CIMA do conteúdo:
  // preto sobre o hero roxo sumiria. O menu aberto não tem esse problema — ele é
  // opaco e substitui a página, então não há fundo a que se adaptar. Adaptar faria
  // o único elemento presente em todas as páginas mudar de identidade conforme a
  // rota (inclusive trocando a marca de branca para roxa). Por isso ele tem uma cor
  // fixa, e a marca e o botão acompanham o menu enquanto ele está aberto.
  const brandLogo = isDarkBg || open ? "/images/wordmark-white.png" : "/images/wordmark-purple.png";
  const barColor = isDarkBg || open ? "bg-white" : "bg-black";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex flex-col print:hidden",
        // `max-md:` garante que o modo tela cheia nunca vaze para o desktop, mesmo
        // se a janela for redimensionada com o menu aberto.
        open ? cn("max-md:bottom-0 max-md:bg-[#180037]", glassMd) : glass,
      )}
    >
      <nav className="max-w-6xl mx-auto flex w-full shrink-0 items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="flex items-center shrink-0 rounded-sm transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          aria-label="Mari Ventura — Início"
        >
          <img
            src={brandLogo}
            alt="Mari Ventura"
            className="h-9 md:h-10 w-auto shrink-0 object-contain"
          />
        </Link>

        {/* Links completos — visíveis a partir de md */}
        <ul className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="transition-colors"
                // A cor base fica em inactiveProps, não no className: se as duas
                // classes de cor coexistissem, quem venceria seria a ordem do CSS
                // compilado, não a intenção (text-white sobrepunha text-sky).
                inactiveProps={{ className: cn(baseText, hoverText) }}
                activeProps={{ className: cn(activeColor, "font-medium") }}
                activeOptions={{ exact: true }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburguer / X — mesmo botão, mesma posição, só transforma */}
        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="menu-mobile"
          className="md:hidden relative h-11 w-11 -mr-2 shrink-0 flex items-center justify-center cursor-pointer rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          <motion.span
            className={cn("absolute h-0.5 w-6 rounded-full", barColor)}
            animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
            transition={{ duration: reduceMotion ? 0 : 0.25, ease: EASE }}
          />
          <motion.span
            className={cn("absolute h-0.5 w-6 rounded-full", barColor)}
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: reduceMotion ? 0 : 0.15 }}
          />
          <motion.span
            className={cn("absolute h-0.5 w-6 rounded-full", barColor)}
            animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
            transition={{ duration: reduceMotion ? 0 : 0.25, ease: EASE }}
          />
        </button>
      </nav>

      {/* Menu em tela cheia — os itens ocupam todo o espaço abaixo da marca.
          Sem AnimatePresence de propósito: a saída precisa ser instantânea. Como o
          fundo e a marca voltam à cor da rota no mesmo instante em que `open` vira
          false, qualquer item ainda desaparecendo apareceria como texto branco sobre
          fundo claro. Entrada animada, saída seca — que também é o que dá sensação
          de resposta imediata ao toque. */}
      {open && (
        <div
          id="menu-mobile"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
          className="md:hidden flex flex-1 items-center justify-center overflow-y-auto px-6 pb-24"
        >
          <motion.ul
            className="flex w-full flex-col items-center gap-1"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: reduceMotion ? 0 : 0.06, delayChildren: 0.05 },
              },
            }}
          >
            {links.map((l) => (
              <motion.li
                key={l.to}
                className="w-full"
                variants={{
                  hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: reduceMotion ? 0 : 0.5, ease: EASE },
                  },
                }}
              >
                {/* Hover e selecionado precisam ser distinguíveis, então mudam
                    canais diferentes: selecionado muda a COR do texto (lilás),
                    hover/toque muda a SUPERFÍCIE (fundo). Se os dois mexessem na
                    cor, um item selecionado sob o cursor viraria a mesma coisa que
                    um item qualquer sob o cursor. */}
                <Link
                  to={l.to}
                  className="block rounded-lg py-3 text-center font-display text-4xl font-semibold tracking-[-0.02em] transition-colors hover:bg-white/10 active:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  inactiveProps={{ className: "text-white" }}
                  activeProps={{ className: "text-lilac" }}
                  activeOptions={{ exact: true }}
                >
                  {l.label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      )}
    </header>
  );
}
