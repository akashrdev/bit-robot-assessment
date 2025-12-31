import { twMerge } from "tailwind-merge";
import LeftArrowIcon from "@/public/left-arrow.svg";
import RightArrowIcon from "@/public/right-arrow.svg";

export enum CAROUSEL_DIRECTION {
  LEFT = "left",
  RIGHT = "right"
}

interface CarouselArrowButtonProps {
  direction: CAROUSEL_DIRECTION;
  onClick: () => void;
  className?: string;
}

export const CarouselArrowButton = ({
  direction,
  onClick,
  className
}: CarouselArrowButtonProps) => {
  return (
    <button
      aria-label={`Scroll ${direction}`}
      onClick={onClick}
      className={twMerge(
        "size-6 grid place-items-center cursor-pointer text-primary-brand",
        className
      )}
    >
      {direction === CAROUSEL_DIRECTION.LEFT ? (
        <LeftArrowIcon />
      ) : (
        <RightArrowIcon />
      )}
    </button>
  );
};
