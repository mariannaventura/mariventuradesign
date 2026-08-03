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

type InstagramPostProps = {
  images: string[];
  autor: string;
  legenda: string;
};

const LEGENDA_TRUNCATE_LENGTH = 100;

export function InstagramPost({ images, autor, legenda }: InstagramPostProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [legendaExpandida, setLegendaExpandida] = useState(false);

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
          LR
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium leading-tight truncate">{autor}</p>
          <p className="text-xs text-muted-foreground leading-tight">Turma online</p>
        </div>
        <MoreHorizontal className="w-5 h-5 text-muted-foreground shrink-0" />
      </div>

      <div className="relative group/carousel">
        <Carousel setApi={setApi}>
          <CarouselContent className="ml-0">
            {images.map((src, i) => (
              <CarouselItem key={src} className="pl-0">
                <img
                  src={src}
                  alt={`${autor} — post ${i + 1}`}
                  className="w-full aspect-[4/5] object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {canScrollPrev && (
          <button
            type="button"
            onClick={() => api?.scrollPrev()}
            aria-label="Imagem anterior"
            className="absolute left-2 top-1/2 -translate-y-1/2 flex h-7 w-7 items-center justify-center rounded-full bg-black/30 text-white opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover/carousel:opacity-100 hover:bg-black/45"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
        )}
        {canScrollNext && (
          <button
            type="button"
            onClick={() => api?.scrollNext()}
            aria-label="Próxima imagem"
            className="absolute right-2 top-1/2 -translate-y-1/2 flex h-7 w-7 items-center justify-center rounded-full bg-black/30 text-white opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover/carousel:opacity-100 hover:bg-black/45"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex justify-center gap-1.5 pt-3">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => api?.scrollTo(i)}
              aria-label={`Ir para imagem ${i + 1}`}
              aria-current={i === selected}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === selected ? "w-4 bg-accent" : "w-1.5 bg-border hover:bg-muted-foreground/40"
              }`}
            />
          ))}
        </div>
      )}

      <div className="flex items-center gap-4 px-4 pt-3 text-foreground">
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
