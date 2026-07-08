import { createFileRoute } from "@tanstack/react-router";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { FadeIn } from "../components/motion-primitives";
import logoAsset from "@/assets/logo-mari.png.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });

  const background = useTransform<number, string>([sx, sy], ([x, y]) => {
    // Degradê de forma livre — cores extraídas da Paleta 1 (Manual de Marca Mari Ventura):
    // 1. Roxo — #8B6FE8
    // 2. Azul-violeta — #6B8FE8
    // 3. Azul-ciano — #6FC5E0
    // 4. Verde-água — #7FD9C4
    // 5. Verde-limão — #C8E88A
    return `
      conic-gradient(from ${x * 3.6}deg at ${x}% ${y}%,
        #8B6FE8 0deg,
        #6B8FE8 80deg,
        #6FC5E0 160deg,
        #7FD9C4 240deg,
        #C8E88A 320deg,
        #8B6FE8 360deg
      ),
      conic-gradient(from ${180 - y * 1.8}deg at ${100 - x}% ${100 - y}%,
        #C8E88A 0deg,
        #7FD9C4 90deg,
        #6FC5E0 180deg,
        #6B8FE8 260deg,
        #8B6FE8 340deg,
        #C8E88A 360deg
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
