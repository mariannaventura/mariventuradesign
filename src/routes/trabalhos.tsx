import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn, Stagger, StaggerItem } from "../components/motion-primitives";

export const Route = createFileRoute("/trabalhos")({
  head: () => ({
    meta: [
      { title: "Trabalhos — Portfólio" },
      { name: "description", content: "Seleção de projetos de design gráfico e branding." },
    ],
  }),
  component: TrabalhosPage,
});

type Trabalho = {
  id: number;
  titulo: string;
  cliente: string;
  tags: string[];
};

const TRABALHOS: Trabalho[] = [
  { id: 1, titulo: "Festival Afrontosas", cliente: "Coletivo Afrontosas", tags: ["Branding", "Identidade Visual", "Digital"] },
  { id: 2, titulo: "Identidade Pessoal Letycia Rangel", cliente: "Letycia Rangel", tags: ["Branding", "Identidade Visual"] },
  { id: 3, titulo: "Editorial Revista Norte", cliente: "Revista Norte", tags: ["Editorial"] },
  { id: 4, titulo: "Identidade Doce Casa", cliente: "Doce Casa", tags: ["Branding"] },
  { id: 5, titulo: "Sistema UI Fluxo", cliente: "Fluxo App", tags: ["UI/UX", "Digital"] },
  { id: 6, titulo: "Cartaz Cinema Clube", cliente: "Cinema Clube", tags: ["Cartaz"] },
  { id: 8, titulo: "Redesign Marca Verde", cliente: "Verde Studio", tags: ["Branding", "Identidade Visual"] },
];

const TAGS = Array.from(new Set(TRABALHOS.flatMap((t) => t.tags))).sort();

function TrabalhosPage() {
  const [ativas, setAtivas] = useState<string[]>([]);

  const toggle = (tag: string) =>
    setAtivas((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]));

  const filtrados = useMemo(
    () =>
      ativas.length === 0
        ? TRABALHOS
        : TRABALHOS.filter((t) => ativas.every((a) => t.tags.includes(a))),
    [ativas],
  );

  return (
    <section className="max-w-6xl mx-auto px-6 pt-32 pb-20">
      <FadeIn>
        <h1 className="text-4xl md:text-5xl font-display font-semibold">Trabalhos</h1>
        <p className="mt-3 text-muted-foreground max-w-xl">
          Uma seleção de projetos. Filtre pelas etiquetas abaixo — combine várias para refinar.
        </p>
      </FadeIn>

      <FadeIn delay={0.15} className="mt-8 flex flex-wrap gap-2">
        {ativas.length > 0 && (
          <button
            onClick={() => setAtivas([])}
            className="px-4 py-2 rounded-full text-sm border border-border bg-background hover:bg-muted transition-colors"
          >
            Limpar
          </button>
        )}
        {TAGS.map((tag) => {
          const ativa = ativas.includes(tag);
          return (
            <button
              key={tag}
              onClick={() => toggle(tag)}
              className={`px-4 py-2 rounded-full text-sm border transition-all ${
                ativa
                  ? "bg-accent text-accent-foreground border-accent shadow-sm"
                  : "bg-background border-border text-foreground hover:border-accent/60"
              }`}
            >
              {tag}
            </button>
          );
        })}
      </FadeIn>

      <Stagger className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtrados.map((t) => (
            <motion.div
              key={t.id}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <StaggerItem>
                <Link
                  to="/trabalhos/$id"
                  params={{ id: String(t.id) }}
                  className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
                >
                  <article>
                    <div className="image-placeholder aspect-[4/5] overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
                      [ Imagem do trabalho — {t.titulo} ]
                    </div>
                    <div className="mt-4">
                      <h3 className="font-display text-lg font-semibold group-hover:text-accent transition-colors">
                        {t.titulo}
                      </h3>
                      <p className="text-sm text-muted-foreground">{t.cliente}</p>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {t.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </Link>
              </StaggerItem>
            </motion.div>
          ))}
        </AnimatePresence>
      </Stagger>

      {filtrados.length === 0 && (
        <p className="text-center text-muted-foreground mt-16">
          Nenhum trabalho corresponde a essa combinação de etiquetas.
        </p>
      )}
    </section>
  );
}
