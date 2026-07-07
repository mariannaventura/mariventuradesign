import { createFileRoute } from "@tanstack/react-router";
import { FadeIn, Stagger, StaggerItem } from "../components/motion-primitives";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Portfólio" },
      { name: "description", content: "Entre em contato para orçamentos e colaborações em design gráfico." },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <FadeIn>
        <h1 className="text-4xl md:text-5xl font-display font-semibold">Vamos conversar</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Estou aberta a novos projetos, colaborações e uma boa conversa sobre design.
        </p>
      </FadeIn>

      <Stagger className="mt-10 grid gap-4">
        <StaggerItem>
          <a
            href="mailto:mariannaventura08@hotmail.com"
            className="block p-6 rounded-2xl border border-border bg-card hover:border-accent hover:shadow-md transition-all"
          >
            <p className="text-sm text-muted-foreground">Email</p>
            <p className="mt-1 font-display text-xl">mariannaventura08@hotmail.com</p>
          </a>
        </StaggerItem>
        <StaggerItem>
          <a
            href="https://www.linkedin.com/in/mariannaventura/"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 rounded-2xl border border-border bg-card hover:border-accent hover:shadow-md transition-all"
          >
            <p className="text-sm text-muted-foreground">LinkedIn</p>
            <p className="mt-1 font-display text-xl">/in/mariannaventura</p>
          </a>
        </StaggerItem>
      </Stagger>
    </section>
  );
}
