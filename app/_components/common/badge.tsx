import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type BadgeVariant = "primary" | "gold";

interface BadgeProps {
  label: string;
  icon?: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

export const Badge = ({
  label,
  icon,
  variant = "primary",
  className
}: BadgeProps) => {
  const variants: Record<BadgeVariant, string> = {
    primary: "bg-primary-accent text-primary-brand h-6.75 ",
    gold: "bg-gold-badge text-gold-primary-brand h-8"
  };

  return (
    <div
      className={twMerge(
        "px-3 py-2 rounded-lg shadow-badge flex items-center gap-2 w-fit cursor-default",
        variants[variant],
        className
      )}
    >
      {icon && <span className="grid place-items-center">{icon}</span>}
      <span className="font-bold font-neuebit text-[16px] leading-none uppercase">
        {label}
      </span>
    </div>
  );
};
