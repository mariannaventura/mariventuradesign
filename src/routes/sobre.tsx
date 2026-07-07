import { createFileRoute } from "@tanstack/react-router";
import { FadeIn, Stagger, StaggerItem } from "../components/motion-primitives";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — Portfólio" },
      { name: "description", content: "Sobre mim: formação, experiência e habilidades em design gráfico." },
    ],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-[280px_1fr] gap-10">
        <FadeIn>
          <div className="image-placeholder aspect-[3/4] sticky top-24">
            [ Foto pessoal — fornecer futuramente ]
          </div>
        </FadeIn>

        <div>
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-display font-semibold">Sobre mim</h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Sou designer gráfica com foco em identidade visual, editorial e projetos culturais.
              Acredito que bom design nasce da escuta atenta, da pesquisa e de um cuidado quase
              artesanal com cada detalhe.
            </p>
          </FadeIn>

          <FadeIn delay={0.15} className="mt-10">
            <h2 className="font-display text-2xl font-semibold border-b border-border pb-2">
              Experiência
            </h2>
            <Stagger className="mt-4 space-y-6">
              <StaggerItem>
                <div>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-medium">Designer Gráfica Sênior</h3>
                    <span className="text-sm text-muted-foreground">2023 — presente</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Estúdio [Nome] · Freelance</p>
                  <p className="mt-2 text-sm">
                    Direção de arte para projetos de branding, editorial e campanhas culturais.
                  </p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-medium">Designer Pleno</h3>
                    <span className="text-sm text-muted-foreground">2020 — 2023</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Agência [Nome]</p>
                  <p className="mt-2 text-sm">
                    Desenvolvimento de identidades visuais e materiais gráficos para marcas nacionais.
                  </p>
                </div>
              </StaggerItem>
            </Stagger>
          </FadeIn>

          <FadeIn delay={0.25} className="mt-10">
            <h2 className="font-display text-2xl font-semibold border-b border-border pb-2">
              Formação
            </h2>
            <Stagger className="mt-4 space-y-4">
              <StaggerItem>
                <div className="flex justify-between items-baseline">
                  <div>
                    <h3 className="font-medium">Bacharelado em Design Gráfico</h3>
                    <p className="text-sm text-muted-foreground">Universidade [Nome]</p>
                  </div>
                  <span className="text-sm text-muted-foreground">2016 — 2020</span>
                </div>
              </StaggerItem>
            </Stagger>
          </FadeIn>

          <FadeIn delay={0.35} className="mt-10">
            <h2 className="font-display text-2xl font-semibold border-b border-border pb-2">
              Habilidades
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "Adobe Illustrator",
                "Photoshop",
                "InDesign",
                "Figma",
                "Branding",
                "Tipografia",
                "Ilustração",
                "Editorial",
                "Direção de arte",
              ].map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 rounded-full bg-muted text-sm text-muted-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
