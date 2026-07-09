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
    // Degradê livre — paleta anexada:
    // Roxo #590066 · Verde #346600 · Marrom #663500
    return `
      conic-gradient(from ${x * 3.6}deg at ${x}% ${y}%,
        #590066 0deg,
        #590066 90deg,
        #346600 170deg,
        #663500 250deg,
        #590066 340deg,
        #590066 360deg
      ),
      conic-gradient(from ${180 - y * 1.8}deg at ${100 - x}% ${100 - y}%,
        #663500 0deg,
        #346600 90deg,
        #590066 180deg,
        #590066 360deg
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
      className="relative -mt-16 pt-24 min-h-screen flex flex-col items-center justify-center overflow-hidden cursor-crosshair"
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
          className="px-6 py-3 rounded-full font-medium transition-colors"
          style={{ backgroundColor: "#73C7E6", color: "#0a0a0a" }}
        >
          Ver trabalhos
        </Link>
        <Link
          to="/contato"
          className="px-6 py-3 rounded-full border font-medium transition-colors hover:bg-white/10"
          style={{ borderColor: "#73C7E6", color: "#73C7E6" }}
        >
          Entrar em contato
        </Link>
      </FadeIn>
    </motion.section>
  );
}
