import { twMerge } from "tailwind-merge";

type CarouselCtaVariant = "primary" | "secondary";

interface CarouselCtaButtonProps {
  label: string;
  onClick: () => void;
  variant: CarouselCtaVariant;
  className?: string;
}

export const CarouselCtaButton = ({
  label,
  onClick,
  variant,
  className
}: CarouselCtaButtonProps) => {
  const variants: Record<CarouselCtaVariant, string> = {
    primary: "bg-primary-brand text-white hover:bg-primary-brand-inactive",
    secondary:
      "border border-primary-brand text-primary-brand hover:bg-primary-accent"
  };

  return (
    <button
      onClick={onClick}
      className={twMerge(
        "rounded-lg text-sm font-bold h-8.5 px-2 cursor-pointer font-neuebit min-w-20",
        variants[variant],
        className
      )}
    >
      {label}
    </button>
  );
};
