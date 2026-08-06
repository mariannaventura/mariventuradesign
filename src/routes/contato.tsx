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
    // pt-32 alinha o topo com as demais páginas: py-20 deixava o título 48px mais
    // alto aqui do que em Projetos, Serviços e Sobre.
    <section className="max-w-3xl mx-auto px-6 pt-32 pb-20">
      <FadeIn>
        <h1 className="text-4xl md:text-5xl font-display font-semibold">Vamos conversar</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Estou aberta a novos projetos, colaborações e uma boa conversa sobre design.
        </p>
      </FadeIn>

      {/* Os dois canais eram visualmente idênticos, então nada dizia por onde
          começar. A cor passa a carregar essa hierarquia: o e-mail, que é o
          caminho direto, ocupa a cor de CTA do sistema; o LinkedIn continua como
          superfície neutra. Um item preenchido e um contornado também tiram os
          cartões da condição de gêmeos. */}
      <Stagger className="mt-10 grid gap-4">
        <StaggerItem>
          <a
            href="mailto:mariannaventura08@hotmail.com"
            className="block rounded-2xl bg-sky p-6 text-sky-foreground transition-all hover:shadow-md"
          >
            {/* Secundário derivado do próprio texto da superfície, não cinza:
                cinza sobre o azul-claro perde contraste e sujeita a cor. */}
            <p className="text-sm text-sky-foreground/75">Email</p>
            {/* O <wbr /> dá a única oportunidade de quebra, no @. Sem ele o endereço
                não cabe em 375px; com break-all ele quebrava em "hotmai / l.com". */}
            <p className="mt-1 font-display text-xl">
              mariannaventura08@<wbr />hotmail.com
            </p>
          </a>
        </StaggerItem>
        <StaggerItem>
          <a
            href="https://www.linkedin.com/in/mariannaventura/"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent hover:shadow-md"
          >
            <p className="text-sm text-muted-foreground">LinkedIn</p>
            <p className="mt-1 font-display text-xl">/in/mariannaventura</p>
          </a>
        </StaggerItem>
      </Stagger>
    </section>
  );
}
