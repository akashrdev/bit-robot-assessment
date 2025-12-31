import Image from "next/image";
import { ReactElement, ReactNode } from "react";
import { CarouselCtaButton } from "./cta-button";

interface Bg {
  src: string;
  width: number;
  height: number;
  top?: number;
  left?: number;
  opacity?: number;
}

interface CarouselCta {
  label: string;
  onClick: () => void;
}

export interface CarouselItem {
  icon: ReactElement;
  heading: string;
  subheading: string;
  background: Bg;
  badge?: ReactNode;
  primaryCta?: CarouselCta;
  secondaryCta?: CarouselCta;
}

export const CarouselItem = ({
  icon,
  heading,
  subheading,
  background,
  badge,
  primaryCta,
  secondaryCta
}: CarouselItem) => {
  return (
    <div className="w-220 h-61.5 border border-primary-accent rounded-2xl p-4 overflow-hidden relative">
      <div
        className="absolute z-0 pointer-events-none select-none"
        style={{
          width: background.width,
          height: background.height,
          top: background.top ?? 0,
          left: background.left ?? 0,
          opacity: background.opacity ?? 0.1
        }}
      >
        <Image src={background.src} alt="" fill className="object-cover" />
      </div>

      <div
        className="absolute inset-0 pointer-events-none z-1"
        style={{
          background:
            "linear-gradient(to bottom, rgb(254 254 254 / 0) 0%, rgb(254 254 254 / 1) 91%)"
        }}
      />

      {badge && <div className="absolute top-4 right-4 z-10">{badge}</div>}

      <div className="relative z-10 w-110 gap-3 flex flex-col justify-end h-full font-aeonik">
        <span className="grid place-items-center size-8">{icon}</span>
        <span className="font-medium text-primary-brand">{heading}</span>
        <span className="font-medium text-gray2-text text-xs">
          {subheading}
        </span>
        <div className="flex gap-2">
          {primaryCta && (
            <CarouselCtaButton
              variant="primary"
              label={primaryCta.label}
              onClick={primaryCta.onClick}
            />
          )}
          {secondaryCta && (
            <CarouselCtaButton
              variant="secondary"
              label={secondaryCta.label}
              onClick={secondaryCta.onClick}
            />
          )}
        </div>
      </div>
    </div>
  );
};
