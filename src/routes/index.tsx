import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useMotionValue, useReducedMotion, useSpring, useTime, useTransform } from "framer-motion";
import { FadeIn } from "../components/motion-primitives";
import { PROJETOS } from "../lib/projetos";

const DESTAQUES = PROJETOS.slice(0, 3);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mari Ventura — Designer Gráfica" },
      {
        name: "description",
        content:
          "Identidade visual ousada, feita com cuidado. Branding e direção de arte para marcas e eventos, por Marianna Ventura.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const reduzirMovimento = useReducedMotion();

  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });

  // Deriva lenta e contínua. Resolve o degradê parado no celular, onde não existe
  // cursor, sem custar um único byte — e some quando a pessoa pede menos animação.
  const tempo = useTime();
  const deriva = useTransform(tempo, (t) => (reduzirMovimento ? 0 : (t / 90) % 360));

  const background = useTransform<number, string>([sx, sy, deriva], ([x, y, d]) => {
    // Degradê orgânico do roxo (#3B0373) pro lilás (#A571D9), paleta oficial
    return `
      conic-gradient(from ${x * 3.6 + d}deg at ${x}% ${y}%,
        #180037 0deg,
        #3b0373 80deg,
        #a671d9 160deg,
        #3b0373 240deg,
        #6c3da4 320deg,
        #180037 360deg
      ),
      conic-gradient(from ${180 - y * 1.8 - d * 0.6}deg at ${100 - x}% ${100 - y}%,
        #3b0373 0deg,
        #180037 72deg,
        #a671d9 144deg,
        #3b0373 216deg,
        #6c3da4 288deg,
        #3b0373 360deg
      )
    `;
  });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - rect.left) / rect.width) * 100);
    my.set(((e.clientY - rect.top) / rect.height) * 100);
  };

  return (
    <>
      <motion.section
        onMouseMove={handleMove}
        style={{ background, backgroundBlendMode: "overlay" }}
        // 100svh desconta a barra do navegador do celular: sem isso os botões caem
        // logo abaixo do que a pessoa consegue ver.
        className="relative -mt-16 flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-16"
      >
        {/* Marca na horizontal: símbolo à esquerda, assinatura ao lado — o mesmo
            arranjo da variante logo-horizontal. O símbolo é decorativo (alt vazio):
            quem lê o nome é a assinatura, e repetir faria o leitor de tela anunciar
            "Mari Ventura" duas vezes seguidas. */}
        <FadeIn delay={0.15}>
          <div className="flex items-center gap-4 sm:gap-6">
            <img
              src="/images/hero-symbol.png"
              alt=""
              className="h-20 w-20 shrink-0 object-contain drop-shadow-2xl sm:h-24 sm:w-24 md:h-28 md:w-28"
            />
            <img
              src="/images/wordmark-white.png"
              alt="Mari Ventura"
              className="h-14 w-auto object-contain drop-shadow-xl sm:h-16 md:h-20"
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.3} className="mt-10 w-full">
          {/* Ocupa a largura da tela e acompanha o tamanho dela, sem encostar nas
              margens nem passar de um comprimento de leitura confortável. */}
          <h1
            className="mx-auto max-w-[min(1080px,100%)] text-center font-display font-semibold leading-[1.08] tracking-[-0.02em] text-white"
            style={{ fontSize: "clamp(1.85rem, 5.4vw, 3.75rem)" }}
          >
            Identidade visual ousada, feita com cuidado.
          </h1>
          <p className="mx-auto mt-5 max-w-[46ch] text-center text-base text-white sm:text-lg">
            Branding e direção de arte para marcas e eventos que precisam ser vistos — do
            conceito à peça impressa.
          </p>
        </FadeIn>

        <FadeIn delay={0.5} className="mt-9 w-full">
          {/* Empilha no celular em vez de forçar uma linha de 343px que não cabe. */}
          <div className="mx-auto flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4">
            {/* Contato é o CTA primário declarado no PRODUCT.md; era ele quem estava
                com o botão vazado. */}
            <Link
              to="/contato"
              className="rounded-full bg-sky px-7 py-3 text-center font-medium text-sky-foreground transition-colors hover:bg-sky/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Entrar em contato
            </Link>
            {/* Superfície própria em vez de só contorno: assim o contraste não depende
                de qual cor do degradê está passando atrás. */}
            <Link
              to="/projetos"
              className="rounded-full border border-white/60 bg-white/15 px-7 py-3 text-center font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Ver projetos
            </Link>
          </div>
        </FadeIn>
      </motion.section>

      {/* A home mostrava zero trabalho — agora prova antes de pedir. */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="font-display text-2xl font-semibold">Projetos em destaque</h2>
          <Link
            to="/projetos"
            className="shrink-0 text-sm font-medium text-accent hover:underline underline-offset-4"
          >
            Ver os {PROJETOS.length} →
          </Link>
        </div>

        <ul className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {DESTAQUES.map((p) => (
            <li key={p.id}>
              <Link
                to="/projetos/$id"
                params={{ id: String(p.id) }}
                className="group block rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
              >
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={p.capa}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="aspect-[1754/1241] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <h3 className="mt-3 font-display text-lg font-semibold">{p.titulo}</h3>
                <p className="text-sm text-muted-foreground">{p.cliente}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* O rodapé só tinha copyright — a última coisa da página não dava como falar
          com ela. */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          {/* O ano é fixado na geração do site. Deixar dinâmico faz o navegador
              corrigi-lo sozinho na virada do ano, mesmo sem republicar; o aviso de
              divergência que isso gera é esperado, daí o suppressHydrationWarning. */}
          <p suppressHydrationWarning>
            © {new Date().getFullYear()} Mari Ventura. Todos os direitos reservados.
          </p>
          <p className="flex flex-wrap gap-x-5 gap-y-1">
            <a
              href="mailto:mariannaventura08@hotmail.com"
              className="hover:text-accent transition-colors"
            >
              mariannaventura08@hotmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/mariannaventura/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
