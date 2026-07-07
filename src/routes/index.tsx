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
    // Degradê de forma livre: camadas cônicas que misturam com o cursor.
    // Cores usadas (sinalizadas para substituição futura):
    // 1. Pêssego quente — oklch(0.78 0.19 25)
    // 2. Rosa choque — oklch(0.62 0.22 340)
    // 3. Roxo profundo — oklch(0.4 0.18 280)
    // 4. Azul meia-noite — oklch(0.2 0.08 260)
    return `
      conic-gradient(from ${x * 3.6}deg at ${x}% ${y}%,
        oklch(0.78 0.19 25) 0deg,
        oklch(0.62 0.22 340) 60deg,
        oklch(0.4 0.18 280) 180deg,
        oklch(0.2 0.08 260) 300deg,
        oklch(0.78 0.19 25) 360deg
      ),
      conic-gradient(from ${180 - y * 1.8}deg at ${100 - x}% ${100 - y}%,
        oklch(0.2 0.08 260) 0deg,
        oklch(0.4 0.18 280) 90deg,
        oklch(0.62 0.22 340) 210deg,
        oklch(0.78 0.19 25) 330deg,
        oklch(0.2 0.08 260) 360deg
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
      className="relative -mt-16 min-h-screen flex flex-col items-center justify-center overflow-hidden cursor-crosshair"
    >
      {/* Logo placeholder — substituir por PNG */}
      <FadeIn delay={0.2}>
        <div className="w-64 h-64 md:w-80 md:h-80 flex items-center justify-center rounded-3xl border-2 border-dashed border-white/40 bg-white/5 backdrop-blur-sm text-white/80 text-center text-sm px-6">
          [ Espaço para logo PNG ]
          <br />
          <span className="text-xs opacity-70">(fornecer futuramente)</span>
        </div>
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
          to="/trabalhos"
          className="px-6 py-3 rounded-full bg-white text-primary font-medium hover:bg-white/90 transition-colors"
        >
          Ver trabalhos
        </Link>
        <Link
          to="/contato"
          className="px-6 py-3 rounded-full border border-white/60 text-white hover:bg-white/10 transition-colors"
        >
          Entrar em contato
        </Link>
      </FadeIn>
    </motion.section>
  );
}
