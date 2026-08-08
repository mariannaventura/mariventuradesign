import { useEffect, useState } from "react";
import { Pause, Play } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import type { GaleriaItem } from "@/lib/projetos";

type GalleryCarouselProps = {
  images: GaleriaItem[];
  altPrefix: string;
  intervalMs?: number;
  /** Proporção da moldura. Peças de feed são 4/5; fotos e capas, 16/9. */
  aspect?: string;
  /** `contain` mostra a peça inteira. Numa galeria de peças gráficas isso importa
   *  mais que preencher a moldura: recortar uma arte é desfazer a composição. */
  fit?: "cover" | "contain";
};

/** Aceita string simples ou objeto com descrição própria da imagem. */
function normalizar(item: GaleriaItem, altPrefix: string, i: number) {
  return typeof item === "string"
    ? { src: item, alt: `${altPrefix} — imagem ${i + 1}` }
    : { src: item.src, alt: item.alt };
}

export function GalleryCarousel({
  images,
  altPrefix,
  intervalMs = 4000,
  aspect = "16/9",
  fit = "cover",
}: GalleryCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [pausado, setPausado] = useState(false);

  const slides = images.map((item, i) => normalizar(item, altPrefix, i));
  const temVarias = slides.length > 1;

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelected(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!api || isHovering || pausado || !temVarias) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = setInterval(() => {
      api.scrollNext();
    }, intervalMs);

    return () => clearInterval(id);
  }, [api, isHovering, pausado, temVarias, intervalMs]);

  return (
    <div
      className="relative rounded-lg overflow-hidden border border-border shadow-lg"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      role="group"
      aria-roledescription="carrossel"
      aria-label={altPrefix}
    >
      <Carousel setApi={setApi} opts={{ loop: true }}>
        <CarouselContent className="ml-0">
          {slides.map((slide, i) => (
            <CarouselItem key={slide.src} className="pl-0">
              <img
                src={slide.src}
                alt={slide.alt}
                // Só a primeira entra no carregamento inicial; as outras vêm quando
                // o visitante chega perto delas.
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
                style={{ aspectRatio: aspect }}
                className={`w-full ${fit === "contain" ? "object-contain bg-muted" : "object-cover"}`}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Anuncia a troca de slide para leitores de tela, que não veem a animação. */}
      <p className="sr-only" aria-live="polite">
        {slides[selected]?.alt}
      </p>

      {temVarias && (
        <>
          {/* Avanço automático precisa de um jeito de parar que funcione no toque —
              onMouseEnter não existe em tela sensível ao toque. */}
          <button
            type="button"
            onClick={() => setPausado((v) => !v)}
            aria-label={pausado ? "Retomar passagem automática" : "Pausar passagem automática"}
            className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {pausado ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
          </button>

          <div className="absolute right-1 top-1/2 flex -translate-y-1/2 flex-col rounded-full bg-black/30 backdrop-blur-sm">
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => api?.scrollTo(i)}
                aria-label={`Ir para imagem ${i + 1} de ${slides.length}`}
                {...(i === selected ? { "aria-current": true as const } : {})}
                // Botão de 24px (mínimo recomendado para toque) com o ponto visível
                // menor dentro, para não engordar o controle.
                className="flex h-6 w-6 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-white"
              >
                <span
                  className={`block h-2 w-2 rounded-full transition-all duration-300 ${
                    i === selected ? "scale-125 bg-white" : "bg-white/50 hover:bg-white/80"
                  }`}
                />
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
