import { formatPoints } from "@/app/utils/format-points";
import GoldLogo from "@/public/gold-logo.svg";
import RightArrowIcon from "@/public/right-arrow.svg";

export interface EarningsCardData {
  heading: string;
  pointsCount: number;
  breakdownHandler: () => void;
}
export const EarningsCard = ({
  heading,
  pointsCount,
  breakdownHandler
}: EarningsCardData) => {
  const formattedPointsCount = formatPoints(pointsCount);
  return (
    <div className="w-55 h-48.5 flex flex-col justify-between px-4 pt-4 pb-6 bg-gray-card rounded-2xl">
      <div className="w-full justify-between flex ">
        <span className="font-bold text-primary-brand font-neuebit">
          {heading}
        </span>
        <GoldLogo className="size-6" />
      </div>
      <div className="flex flex-col gap-2 font-aeonik">
        <div className="flex gap-1.5 items-baseline">
          <span className="text-[32px] font-medium tracking-[-0.01em] text-primary-brand">
            {formattedPointsCount}
          </span>
          <span className="font-medium tracking-[-0.01em] text-primary-brand">
            points
          </span>
        </div>
        <div className="flex gap.5 cursor-pointer items-center group">
          <span className="font-medium text-sm tracking-[-0.04em] text-primary-brand">
            Breakdown
          </span>
          <div className="relative size-3.5 " onClick={breakdownHandler}>
            <RightArrowIcon
              className="
     scale-[0.5]
     absolute
     text-primary-brand
      /* center */
      right-1/2 top-1/2
      translate-x-1/2 -translate-y-1/2

      /* animation */
      transition-[right,transform] duration-150 ease-out

      /* hover: move to right edge */
      group-hover:right-0
      group-hover:translate-x-0
    "
            />
          </div>
        </div>
      </div>
    </div>
  );
};
