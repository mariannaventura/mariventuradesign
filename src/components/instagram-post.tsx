import { useEffect, useState } from "react";
import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import type { PostMidia } from "@/lib/projetos";

type InstagramPostProps = {
  images: PostMidia[];
  autor: string;
  legenda: string;
  /** Iniciais do avatar. Sem isto, deriva das duas primeiras letras do autor. */
  iniciais?: string;
  /** Linha menor sob o nome — boa para o período ou o tipo de conteúdo. */
  subtitulo?: string;
  /** "contain" quando as peças não têm todas a mesma proporção. */
  fit?: "cover" | "contain";
};

const LEGENDA_TRUNCATE_LENGTH = 100;

function normalizar(item: PostMidia, autor: string, i: number) {
  if (typeof item === "string") return { src: item, alt: `${autor} — post ${i + 1}`, video: false, poster: undefined };
  return { src: item.src, alt: item.alt ?? `${autor} — post ${i + 1}`, video: !!item.video, poster: item.poster };
}

export function InstagramPost({
  images,
  autor,
  legenda,
  iniciais,
  subtitulo = "Turma online",
  fit = "cover",
}: InstagramPostProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [legendaExpandida, setLegendaExpandida] = useState(false);

  const midias = images.map((item, i) => normalizar(item, autor, i));
  const avatar = iniciais ?? autor.replace(/[^A-Za-zÀ-ÿ]/g, "").slice(0, 2).toUpperCase();
  const ajuste = fit === "contain" ? "object-contain bg-muted" : "object-cover";

  useEffect(() => {
    if (!api) return;
    const onSelect = () => {
      setSelected(api.selectedScrollSnap());
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  const legendaLonga = legenda.length > LEGENDA_TRUNCATE_LENGTH;

  return (
    <div className="max-w-sm mx-auto rounded-2xl border border-border bg-card shadow-lg overflow-hidden">
      <div className="flex items-center gap-3 px-4 py-3">
        <div className="h-9 w-9 shrink-0 rounded-full bg-gradient-to-br from-accent to-sky flex items-center justify-center text-xs font-semibold text-white">
          {avatar}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium leading-tight truncate">{autor}</p>
          <p className="text-xs text-muted-foreground leading-tight">{subtitulo}</p>
        </div>
        <MoreHorizontal className="w-5 h-5 text-muted-foreground shrink-0" aria-hidden />
      </div>

      <div className="relative group/carousel">
        <Carousel setApi={setApi}>
          <CarouselContent className="ml-0">
            {midias.map((m, i) => (
              <CarouselItem key={m.src} className="pl-0">
                {m.video ? (
                  <video
                    src={m.src}
                    poster={m.poster}
                    controls
                    playsInline
                    // Só os metadados na abertura: o vídeo em si baixa quando a
                    // pessoa aperta play.
                    preload="metadata"
                    aria-label={m.alt}
                    className={`w-full aspect-[4/5] bg-black ${fit === "contain" ? "object-contain" : "object-cover"}`}
                  />
                ) : (
                  <img
                    src={m.src}
                    alt={m.alt}
                    loading={i === 0 ? "eager" : "lazy"}
                    decoding="async"
                    className={`w-full aspect-[4/5] ${ajuste}`}
                  />
                )}
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {canScrollPrev && (
          <button
            type="button"
            onClick={() => api?.scrollPrev()}
            aria-label="Imagem anterior"
            className="absolute left-2 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-opacity duration-200 hover:bg-black/60 md:opacity-0 md:group-hover/carousel:opacity-100"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
        )}
        {canScrollNext && (
          <button
            type="button"
            onClick={() => api?.scrollNext()}
            aria-label="Próxima imagem"
            className="absolute right-2 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-opacity duration-200 hover:bg-black/60 md:opacity-0 md:group-hover/carousel:opacity-100"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        )}
      </div>

      {midias.length > 1 && (
        <div className="flex justify-center gap-1 pt-2">
          {midias.map((m, i) => (
            <button
              key={m.src}
              type="button"
              onClick={() => api?.scrollTo(i)}
              aria-label={`Ir para item ${i + 1} de ${midias.length}`}
              {...(i === selected ? { "aria-current": true as const } : {})}
              className="flex h-6 w-5 items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-ring"
            >
              <span
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === selected ? "w-4 bg-accent" : "w-1.5 bg-border"
                }`}
              />
            </button>
          ))}
        </div>
      )}

      <div className="flex items-center gap-4 px-4 pt-2 text-foreground" aria-hidden>
        <Heart className="w-6 h-6" />
        <MessageCircle className="w-6 h-6" />
        <Send className="w-6 h-6" />
        <Bookmark className="w-6 h-6 ml-auto" />
      </div>

      <div className="px-4 pt-2 pb-4">
        <p
          className={`text-sm leading-relaxed whitespace-pre-line ${
            legendaLonga && !legendaExpandida ? "line-clamp-2" : ""
          }`}
        >
          <span className="font-semibold">{autor}</span> {legenda}
        </p>
        {legendaLonga && (
          <button
            type="button"
            onClick={() => setLegendaExpandida((v) => !v)}
            className="mt-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {legendaExpandida ? "ver menos" : "ver mais"}
          </button>
        )}
      </div>
    </div>
  );
}
