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
    // Degradê de forma livre — cores escurecidas, roxo predominante:
    // 1. Roxo escuro — #5B3FB8
    // 2. Azul-violeta escuro — #3A5FB8
    // 3. Azul-ciano escuro — #3A8AA3
    // 4. Verde-água escuro — #3A9A8A
    // 5. Verde-limão escuro — #7A9A4A
    return `
      conic-gradient(from ${x * 3.6}deg at ${x}% ${y}%,
        #5B3FB8 0deg,
        #5B3FB8 80deg,
        #3A5FB8 120deg,
        #3A8AA3 160deg,
        #3A9A8A 200deg,
        #7A9A4A 260deg,
        #5B3FB8 320deg,
        #5B3FB8 360deg
      ),
      conic-gradient(from ${180 - y * 1.8}deg at ${100 - x}% ${100 - y}%,
        #7A9A4A 0deg,
        #3A9A8A 60deg,
        #3A8AA3 110deg,
        #3A5FB8 150deg,
        #5B3FB8 200deg,
        #5B3FB8 360deg
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
      {/* Logo Mari Ventura */}
      <FadeIn delay={0.2}>
        <img
          src={logoAsset.url}
          alt="Logo Mari Ventura"
          className="w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-2xl"
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
