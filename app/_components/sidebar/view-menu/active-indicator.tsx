import { twMerge } from "tailwind-merge";

export const ViewMenuActiveIndicator = ({
  className
}: {
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        "size-2.5 rounded-full bg-positive shadow-positive-glow",
        className
      )}
    />
  );
};
