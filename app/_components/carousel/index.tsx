"use client";

import useEmblaCarousel from "embla-carousel-react";

import DiscordIcon from "@/public/socials/discord.svg";
import { useRouter } from "next/navigation";
import { urls } from "@/app/const/urls";
import { CarouselItem } from "./item";
import { CarouselIndicators } from "./indicators";
import { useEffect, useState } from "react";
import { CAROUSEL_DIRECTION, CarouselArrowButton } from "./arrow-button";
import { Badge } from "../common/badge";
import GoldLogo from "@/public/gold-logo.svg";

export const DiscoveryCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    if (!emblaApi) return;

    const updateSelected = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", updateSelected);
    emblaApi.on("reInit", updateSelected);

    const raf = requestAnimationFrame(updateSelected);

    return () => {
      cancelAnimationFrame(raf);
      emblaApi.off("select", updateSelected);
      emblaApi.off("reInit", updateSelected);
    };
  }, [emblaApi]);

  const DISCOVERY_CAROUSEL_ITEMS: CarouselItem[] = [
    {
      icon: <DiscordIcon className="text-primary-brand" />,
      background: {
        src: "/carousel/default-carousel-bg.png",
        width: 880,
        height: 655,
        top: -143,
        left: 0,
        opacity: 0.1
      },
      heading: "DISCORD",
      subheading: "Stay involved, don't miss an update. Join the community.",
      primaryCta: {
        label: "GET INVOLVED",
        onClick: () => router.push(urls.discord)
      },
      secondaryCta: {
        label: "LEARN MORE",
        onClick: () => router.push(urls.about)
      },
      badge: (
        <Badge
          label="EARN 20 PTS"
          icon={<GoldLogo className="size-4" />}
          variant="gold"
          className="pl-3 pr-4"
        />
      )
    }
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 items-center">
        <CarouselArrowButton
          onClick={() => emblaApi?.scrollPrev()}
          direction={CAROUSEL_DIRECTION.LEFT}
        />

        <div ref={emblaRef} className="overflow-hidden w-220">
          <div className="flex">
            {DISCOVERY_CAROUSEL_ITEMS.map((carouselItem) => {
              return (
                <div
                  key={carouselItem.heading}
                  className="flex-[0_0_100%] min-w-0"
                >
                  <CarouselItem
                    key={carouselItem.heading}
                    icon={carouselItem.icon}
                    background={carouselItem.background}
                    heading={carouselItem.heading}
                    subheading={carouselItem.subheading}
                    primaryCta={carouselItem.primaryCta}
                    secondaryCta={carouselItem.secondaryCta}
                    badge={carouselItem.badge}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <CarouselArrowButton
          onClick={() => emblaApi?.scrollNext()}
          direction={CAROUSEL_DIRECTION.RIGHT}
        />
      </div>
      <CarouselIndicators
        count={DISCOVERY_CAROUSEL_ITEMS.length}
        activeIndex={selectedIndex}
        onSelect={(i) => emblaApi?.scrollTo(i)}
      />
    </div>
  );
};
