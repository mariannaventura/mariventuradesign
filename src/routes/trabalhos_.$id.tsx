import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { FadeIn, Stagger, StaggerItem } from "../components/motion-primitives";
import festivalAsset from "@/assets/festival-afrontosas.png.asset.json";

export const Route = createFileRoute("/trabalhos_/$id")({
  head: ({ params }) => ({
    meta: [
      { title: `Trabalho ${params.id} — Portfólio` },
      { name: "description", content: "Detalhamento do projeto." },
    ],
  }),
  loader: ({ params }) => {
    const trabalho = TRABALHOS.find((t) => String(t.id) === params.id);
    if (!trabalho) throw notFound();
    return { trabalho };
  },
  component: TrabalhoDetalhe,
  notFoundComponent: () => (
    <div className="max-w-3xl mx-auto px-6 py-32 text-center">
      <h1 className="text-3xl font-display font-semibold">Trabalho não encontrado</h1>
      <Link to="/trabalhos" className="mt-6 inline-block text-accent underline">
        Voltar para Trabalhos
      </Link>
    </div>
  ),
  errorComponent: () => (
    <div className="max-w-3xl mx-auto px-6 py-32 text-center">
      <h1 className="text-3xl font-display font-semibold">Algo deu errado</h1>
      <Link to="/trabalhos" className="mt-6 inline-block text-accent underline">
        Voltar para Trabalhos
      </Link>
    </div>
  ),
});

type Trabalho = {
  id: number;
  titulo: string;
  cliente: string;
  tags: string[];
};

// Mantém a mesma lista da página /trabalhos.
// Futuramente: mover para um módulo compartilhado ou banco de dados.
const TRABALHOS: Trabalho[] = [
  { id: 1, titulo: "Festival Afrontosas", cliente: "Coletivo Afrontosas", tags: ["Branding", "Identidade Visual", "Digital"] },
  { id: 2, titulo: "Cartaz Festival Solar", cliente: "Festival Solar", tags: ["Cartaz"] },
  { id: 3, titulo: "Editorial Revista Norte", cliente: "Revista Norte", tags: ["Editorial"] },
  { id: 4, titulo: "Identidade Doce Casa", cliente: "Doce Casa", tags: ["Branding"] },
  { id: 5, titulo: "Sistema UI Fluxo", cliente: "Fluxo App", tags: ["UI/UX", "Digital"] },
  { id: 6, titulo: "Cartaz Cinema Clube", cliente: "Cinema Clube", tags: ["Cartaz"] },
  { id: 8, titulo: "Redesign Marca Verde", cliente: "Verde Studio", tags: ["Branding", "Identidade Visual"] },
];

function TrabalhoDetalhe() {
  const { trabalho } = Route.useLoaderData();

  return (
    <article className="max-w-5xl mx-auto px-6 pt-32 pb-16">
      <FadeIn>
        <Link
          to="/trabalhos"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar
        </Link>
      </FadeIn>

      <FadeIn delay={0.1} className="mt-8">
        <p className="text-sm uppercase tracking-widest text-muted-foreground">
          {trabalho.cliente}
        </p>
        <h1 className="mt-2 text-4xl md:text-6xl font-display font-semibold">
          {trabalho.titulo}
        </h1>
        <div className="mt-4 flex flex-wrap gap-2">
          {trabalho.tags.map((tag: string) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.2} className="mt-10">
        {trabalho.id === 1 ? (
          <img
            src={festivalAsset.url}
            alt={`Capa — ${trabalho.titulo}`}
            className="w-full aspect-[16/9] object-cover rounded-lg shadow-lg"
          />
        ) : (
          <div className="image-placeholder aspect-[16/9]">
            [ Imagem principal (capa) — {trabalho.titulo} ]
          </div>
        )}
      </FadeIn>

      <Stagger className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <StaggerItem className="md:col-span-1">
          <h2 className="text-sm uppercase tracking-widest text-muted-foreground">Sobre</h2>
        </StaggerItem>
        <StaggerItem className="md:col-span-2">
          <p className="text-lg leading-relaxed text-foreground/80">
            [ Escreva aqui um parágrafo sobre o projeto — contexto, cliente, objetivo. ]
          </p>
        </StaggerItem>

        <StaggerItem className="md:col-span-1">
          <h2 className="text-sm uppercase tracking-widest text-muted-foreground">Desafio</h2>
        </StaggerItem>
        <StaggerItem className="md:col-span-2">
          <p className="text-lg leading-relaxed text-foreground/80">
            [ Descreva o desafio de design deste projeto. ]
          </p>
        </StaggerItem>

        <StaggerItem className="md:col-span-1">
          <h2 className="text-sm uppercase tracking-widest text-muted-foreground">Processo</h2>
        </StaggerItem>
        <StaggerItem className="md:col-span-2">
          <p className="text-lg leading-relaxed text-foreground/80">
            [ Conte sobre o processo criativo, referências e etapas. ]
          </p>
        </StaggerItem>
      </Stagger>

      <Stagger className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
        <StaggerItem>
          <div className="image-placeholder aspect-square">[ Imagem 2 ]</div>
        </StaggerItem>
        <StaggerItem>
          <div className="image-placeholder aspect-square">[ Imagem 3 ]</div>
        </StaggerItem>
        <StaggerItem className="md:col-span-2">
          <div className="image-placeholder aspect-[16/9]">[ Imagem 4 — larga ]</div>
        </StaggerItem>
        <StaggerItem>
          <div className="image-placeholder aspect-[3/4]">[ Imagem 5 ]</div>
        </StaggerItem>
        <StaggerItem>
          <div className="image-placeholder aspect-[3/4]">[ Imagem 6 ]</div>
        </StaggerItem>
      </Stagger>

      <FadeIn delay={0.2} className="mt-20 border-t border-border pt-10 text-center">
        <p className="text-muted-foreground">Gostou desse projeto?</p>
        <Link
          to="/contato"
          className="mt-3 inline-block font-display text-2xl underline underline-offset-4 hover:text-accent transition-colors"
        >
          Vamos conversar →
        </Link>
      </FadeIn>
    </article>
  );
}
