import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — Portfólio" },
      { name: "description", content: "Serviços oferecidos em design gráfico." },
    ],
  }),
  component: ServicosPage,
});

function ServicosPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 min-h-[60vh]">
      <h1 className="text-4xl md:text-5xl font-display font-semibold">Serviços</h1>
      <p className="mt-4 text-muted-foreground">Em breve.</p>
    </section>
  );
}
