import { createFileRoute } from "@tanstack/react-router";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { FadeIn } from "../components/motion-primitives";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });

  const background = useTransform<number, string>([sx, sy], ([x, y]) => {
    // Degradê orgânico do roxo (#3B0373) pro lilás (#A571D9), paleta oficial
    return `
      conic-gradient(from ${x * 3.6}deg at ${x}% ${y}%,
        #180037 0deg,
        #3b0373 80deg,
        #a671d9 160deg,
        #3b0373 240deg,
        #6c3da4 320deg,
        #180037 360deg
      ),
      conic-gradient(from ${180 - y * 1.8}deg at ${100 - x}% ${100 - y}%,
        #3b0373 0deg,
        #180037 90deg,
        #a671d9 180deg,
        #3b0373 270deg,
        #6c3da4 360deg
      )
    `;
  });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - rect.left) / rect.width) * 100);
    my.set(((e.clientY - rect.top) / rect.height) * 100);
  };

  return (
    <motion.section
      onMouseMove={handleMove}
      style={{ background, backgroundBlendMode: "overlay" }}
      className="relative -mt-16 pt-24 min-h-screen flex flex-col items-center overflow-hidden cursor-crosshair"
    >
      <div className="flex-1 flex flex-col items-center justify-center">
        {/* Símbolo principal + wordmark empilhado */}
        <FadeIn delay={0.2}>
          <img
            src="/images/hero-symbol.png"
            alt="Mari Ventura"
            className="w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-2xl"
          />
        </FadeIn>
        <FadeIn delay={0.35}>
          <img
            src="/images/wordmark-white.png"
            alt="Mari Ventura"
            className="mt-6 w-56 md:w-72 h-auto object-contain drop-shadow-xl"
          />
        </FadeIn>

        <FadeIn delay={0.5} className="mt-10 text-center px-6">
          <h1 className="text-white text-4xl md:text-6xl font-display font-semibold max-w-3xl">
            Design gráfico com propósito e sensibilidade
          </h1>
          <p className="mt-4 text-white/80 max-w-xl mx-auto">
            Mova o cursor para explorar. Um convite visual para o meu trabalho.
          </p>
        </FadeIn>

        <FadeIn delay={0.8} className="mt-10 flex gap-4">
          <Link
            to="/projetos"
            className="px-6 py-3 rounded-full font-medium bg-sky text-sky-foreground transition-colors hover:bg-sky/90"
          >
            Ver projetos
          </Link>
          <Link
            to="/contato"
            className="px-6 py-3 rounded-full border border-sky text-sky font-medium transition-colors hover:bg-white/10"
          >
            Entrar em contato
          </Link>
        </FadeIn>
      </div>

      {/* Espaço de respiro entre botões e faixa de rodapé */}
      <div className="h-32 md:h-40" />

      {/* Faixa preta com blur — copyright */}
      <footer className="w-full bg-black/60 backdrop-blur-md text-white/80 text-sm py-4 px-6 text-center">
        © {new Date().getFullYear()} Mari Ventura. Todos os direitos reservados.
      </footer>
    </motion.section>
  );
}
