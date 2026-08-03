import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";

type GalleryCarouselProps = {
  images: string[];
  altPrefix: string;
  intervalMs?: number;
};

export function GalleryCarousel({ images, altPrefix, intervalMs = 4000 }: GalleryCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

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
    if (!api || isHovering) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = setInterval(() => {
      api.scrollNext();
    }, intervalMs);

    return () => clearInterval(id);
  }, [api, isHovering, intervalMs]);

  return (
    <div
      className="relative rounded-lg overflow-hidden border border-border shadow-lg"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Carousel setApi={setApi} opts={{ loop: true }}>
        <CarouselContent className="ml-0">
          {images.map((src, i) => (
            <CarouselItem key={src} className="pl-0">
              <img
                src={src}
                alt={`${altPrefix} — slide ${i + 1}`}
                className="w-full aspect-[16/9] object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {images.length > 1 && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col gap-2 px-1.5 py-2 rounded-full bg-black/30 backdrop-blur-sm">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => api?.scrollTo(i)}
              aria-label={`Ir para slide ${i + 1}`}
              aria-current={i === selected}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                i === selected ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
