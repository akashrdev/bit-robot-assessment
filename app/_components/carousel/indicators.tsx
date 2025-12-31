import { twMerge } from "tailwind-merge";

interface CarouselIndicatorsProps {
  count: number;
  activeIndex: number;
  onSelect?: (index: number) => void;
  className?: string;
}

export const CarouselIndicators = ({
  count,
  activeIndex,
  onSelect,
  className
}: CarouselIndicatorsProps) => {
  return (
    <div
      className={twMerge("flex items-center justify-center gap-1", className)}
    >
      {Array.from({ length: count }).map((_, i) => {
        const isActive = i === activeIndex;

        return (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={onSelect ? () => onSelect(i) : undefined}
            className={twMerge(
              "h-1 w-3 rounded-[99px] cursor-pointer",
              isActive ? "bg-primary-brand " : "bg-primary-accent"
            )}
          />
        );
      })}
    </div>
  );
};
