import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import { useEffect, useRef } from "react";
import { iconsArr, TechIconsCard } from "./tech-icons";
import { useThemeContext } from "@/context/theme-context";

function LogoCarousel() {
  const plugin = useRef(
    AutoScroll({ speed: 1.5, direction: "forward", startDelay: 1 })
  );
  const elementRef = useRef<HTMLDivElement>(null);
  const { theme } = useThemeContext();

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      // First try ref-based approach (recommended)
      if (elementRef.current?.contains(event.target as Node)) {
        plugin.current.stop();
        return;
      }

      plugin.current.play();
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <Carousel
      opts={{
        align: "start",
        dragFree: true,
        loop: true,
      }}
      ref={elementRef}
      plugins={[plugin.current]}
      className="w-full overflow-hidden flex sm:space-x-6 [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
    >
      <CarouselContent className="w-full flex items-center">
        {iconsArr.map((item, idx) => (
          <CarouselItem
            key={idx}
            className="max-w-fit md:basis-1/2 lg:basis-1/5 "
          >
            <div className="" key={idx}>
              <TechIconsCard i={idx} theme={theme} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default LogoCarousel;
