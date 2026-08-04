import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";

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

  // Fecha o menu automaticamente ao trocar de rota.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

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

  // Painel do menu mobile usa um vidro mais opaco, já que fica sobre conteúdo variado.
  const mobilePanelGlass = isDarkBg
    ? "bg-black/70 border-white/10"
    : "bg-white/90 border-black/10";

  const brandLogo = isDarkBg ? "/images/wordmark-white.png" : "/images/wordmark-purple.png";
  const barColor = isDarkBg ? "bg-white" : "bg-black";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 print:hidden ${glass}`}>
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="flex items-center shrink-0 transition-opacity hover:opacity-80"
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
                className={`${baseText} ${hoverText} transition-colors`}
                activeProps={{ className: `${activeColor} font-medium` }}
                activeOptions={{ exact: true }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Botão hamburguer — visível só abaixo de md */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className="md:hidden relative h-9 w-9 shrink-0 flex items-center justify-center cursor-pointer"
        >
          <motion.span
            className={`absolute h-0.5 w-6 rounded-full ${barColor}`}
            animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.span
            className={`absolute h-0.5 w-6 rounded-full ${barColor}`}
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.15 }}
          />
          <motion.span
            className={`absolute h-0.5 w-6 rounded-full ${barColor}`}
            animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          />
        </button>
      </nav>

      {/* Painel do menu mobile */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={`md:hidden overflow-hidden border-t backdrop-blur-md ${mobilePanelGlass}`}
          >
            {links.map((l) => (
              <li key={l.to} className="border-b border-current/5 last:border-none">
                <Link
                  to={l.to}
                  className={`${baseText} ${hoverText} block px-6 py-4 text-base transition-colors`}
                  activeProps={{ className: `${activeColor} font-medium` }}
                  activeOptions={{ exact: true }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
