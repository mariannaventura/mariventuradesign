import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { FadeIn, Stagger, StaggerItem } from "../components/motion-primitives";
import { GalleryCarousel } from "../components/gallery-carousel";
import { InstagramPost } from "../components/instagram-post";
import { PROJETOS, type Projeto } from "../lib/projetos";

// Tipo de retorno explícito: dentro do objeto da rota o `head` é declarado antes do
// `loader`, então sem esta anotação o TypeScript infere `loaderData` como `never` e
// tudo que depende dele (inclusive `projeto.processo`) vira `any`.
function carregarProjeto({ params }: { params: { id: string } }): { projeto: Projeto } {
  const projeto = PROJETOS.find((t) => String(t.id) === params.id);
  if (!projeto) throw notFound();
  return { projeto };
}

export const Route = createFileRoute("/projetos_/$id")({
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.projeto.titulo ?? "Projeto"} — Mari Ventura` },
      {
        name: "description",
        // As 11 páginas de projeto compartilhavam "Detalhamento do projeto." — são
        // justamente as que mais recebem link direto.
        content:
          loaderData?.projeto.contexto?.slice(0, 155).replace(/\s+\S*$/, "") ??
          "Detalhamento do projeto.",
      },
    ],
  }),
  loader: carregarProjeto,
  component: ProjetoDetalhe,
  notFoundComponent: () => (
    <div className="max-w-3xl mx-auto px-6 py-32 text-center">
      <h1 className="text-3xl font-display font-semibold">Projeto não encontrado</h1>
      <Link to="/projetos" className="mt-6 inline-block text-accent underline">
        Voltar para Projetos
      </Link>
    </div>
  ),
  errorComponent: () => (
    <div className="max-w-3xl mx-auto px-6 py-32 text-center">
      <h1 className="text-3xl font-display font-semibold">Algo deu errado</h1>
      <Link to="/projetos" className="mt-6 inline-block text-accent underline">
        Voltar para Projetos
      </Link>
    </div>
  ),
});

function ProjetoDetalhe() {
  const { projeto } = Route.useLoaderData();

  return (
    <article className="max-w-5xl mx-auto px-6 pt-32 pb-16">
      <FadeIn>
        <Link
          to="/projetos"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar
        </Link>
      </FadeIn>

      <FadeIn delay={0.1} className="mt-8">
        <p className="text-sm uppercase tracking-widest text-muted-foreground">
          {projeto.cliente}
        </p>
        <h1 className="mt-2 text-4xl md:text-6xl font-display font-semibold">
          {projeto.titulo}
        </h1>
        <div className="mt-4 flex flex-wrap gap-2">
          {projeto.tags.map((tag: string) => (
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
        {projeto.capa ? (
          <img
            src={projeto.capa}
            // Sem capaAlt o texto repetiria o h1 logo abaixo; nesse caso é melhor
            // deixar vazio e não fazer o leitor de tela ouvir o título duas vezes.
            alt={projeto.capaAlt ?? ""}
            // É a maior imagem da página e a primeira a aparecer: carrega logo.
            decoding="async"
            className={`w-full aspect-[1754/1241] rounded-lg shadow-lg ${
              projeto.capaContain ? "object-contain bg-muted" : "object-cover"
            }`}
          />
        ) : (
          <div className="image-placeholder aspect-[1754/1241]">
            [ Imagem principal (capa) — {projeto.titulo} ]
          </div>
        )}
      </FadeIn>

      <Stagger className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
        <StaggerItem>
          <h2 className="font-display text-2xl md:text-3xl font-semibold">Contexto</h2>
          <p className="mt-3 text-lg leading-relaxed text-foreground/80">
            {projeto.contexto ?? "[ Situe o projeto — quem é o cliente, o que estava em jogo. ]"}
          </p>
        </StaggerItem>

        <StaggerItem>
          <h2 className="font-display text-2xl md:text-3xl font-semibold">Problema</h2>
          <p className="mt-3 text-lg leading-relaxed text-foreground/80">
            {projeto.problema ?? "[ Descreva o problema ou desafio de design deste projeto. ]"}
          </p>
        </StaggerItem>
      </Stagger>

      <Stagger className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
        <StaggerItem>
          <h2 className="font-display text-2xl md:text-3xl font-semibold">Descoberta</h2>
          <p className="mt-3 text-lg leading-relaxed text-foreground/80">
            {projeto.descoberta ?? "[ O que você pesquisou, observou ou descobriu antes de partir para o design? ]"}
          </p>
        </StaggerItem>

        <StaggerItem>
          <h2 className="font-display text-2xl md:text-3xl font-semibold">Papel</h2>
          <p className="mt-3 text-lg leading-relaxed text-foreground/80">
            {projeto.papel ?? "[ Qual foi exatamente o seu papel neste projeto? ]"}
          </p>
        </StaggerItem>
      </Stagger>

      {!projeto.processo && (
        <FadeIn delay={0.1} className="mt-16">
          <h2 className="font-display text-2xl md:text-3xl font-semibold">Processo</h2>
          <p className="mt-3 max-w-2xl text-lg leading-relaxed text-foreground/80">
            [ Conte sobre o processo criativo, referências e etapas. ]
          </p>
        </FadeIn>
      )}

      {projeto.processo && (
        <div className="mt-24">
          <FadeIn>
            <h2 className="font-display text-2xl md:text-3xl font-semibold">Processo</h2>
          </FadeIn>
          <div className="mt-8 space-y-20 md:space-y-28">
            {projeto.processo.map((item, i) => {
              const temMidia =
                item.figmaEmbed || item.galeria || item.post || item.placeholderHint;
              const invertido = i % 2 === 1;

              return (
                <FadeIn
                  key={item.titulo}
                  className={
                    temMidia
                      ? `flex flex-col ${invertido ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-10 md:gap-14`
                      : "max-w-2xl"
                  }
                >
                  {temMidia && (
                    <div
                      className={`w-full ${item.post ? "md:w-[38%]" : item.figmaEmbed ? "md:w-[62%]" : "md:w-[48%]"} shrink-0`}
                    >
                      {item.figmaEmbed && (
                        <div
                          className="overflow-hidden rounded-lg border border-border shadow-lg"
                          style={{ aspectRatio: item.embedAspect ?? "16 / 9" }}
                        >
                          <iframe
                            src={item.figmaEmbed}
                            title={`Visualizador — ${item.titulo}`}
                            className="w-full h-full"
                            loading="lazy"
                            allowFullScreen
                          />
                        </div>
                      )}
                      {item.galeria && (
                        <GalleryCarousel
                          images={item.galeria}
                          altPrefix={item.titulo}
                          aspect={item.galeriaAspect}
                          fit={item.galeriaFit}
                        />
                      )}
                      {item.post && (
                        <InstagramPost
                          images={item.post.images}
                          autor={item.post.autor}
                          legenda={item.post.legenda}
                        />
                      )}
                      {/* Lembrete de produção, só em desenvolvimento. Já foi ao ar como
                          texto visível para o visitante — nunca mais. */}
                      {import.meta.env.DEV &&
                        !item.figmaEmbed &&
                        !item.galeria &&
                        !item.post &&
                        item.placeholderHint && (
                          <div className="image-placeholder aspect-[4/5] p-6">
                            [ Espaço para mídia — {item.placeholderHint} ]
                          </div>
                        )}
                    </div>
                  )}
                  <div className={temMidia ? "w-full md:flex-1" : ""}>
                    <span className="text-xs font-medium text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-1 font-display text-2xl font-semibold">{item.titulo}</h3>
                    <p className="mt-3 text-lg leading-relaxed text-foreground/80">{item.texto}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      )}

      <Stagger className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
        <StaggerItem>
          <h2 className="font-display text-2xl md:text-3xl font-semibold">Solução</h2>
          <p className="mt-3 text-lg leading-relaxed text-foreground/80">
            {projeto.solucao ?? "[ O que foi entregue no fim das contas? ]"}
          </p>
        </StaggerItem>

        <StaggerItem>
          <h2 className="font-display text-2xl md:text-3xl font-semibold">Impacto</h2>
          <p className="mt-3 text-lg leading-relaxed text-foreground/80">
            {projeto.impacto ?? "[ Qual foi o efeito prático — números, mudanças, resultado percebido? ]"}
          </p>
        </StaggerItem>
      </Stagger>

      <FadeIn className="mt-24 max-w-2xl mx-auto text-center">
        <span className="text-sm uppercase tracking-widest text-muted-foreground">Reflexão</span>
        <p className="mt-4 font-display text-2xl md:text-3xl leading-snug text-balance">
          {projeto.reflexao ?? "[ O que você aprendeu ou faria diferente da próxima vez? ]"}
        </p>
      </FadeIn>

      {!projeto.processo && (
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
      )}

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
