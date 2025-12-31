import Image from "next/image";

import { BonusesCard } from "./bonuses-card";
import { EarningsCard, EarningsCardData } from "./card";
import { Badge } from "@/app/_components/common/badge";

export const Earnings = () => {
  const EARNINGS_CARDS: EarningsCardData[] = [
    { heading: "LAST EPOCH", pointsCount: 234, breakdownHandler: () => {} },
    { heading: "LIFETIME", pointsCount: 1_300, breakdownHandler: () => {} }
  ];
  return (
    <div className="flex flex-col gap-6">
      <Badge label="EARNINGS" />
      <div className="flex gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 ">
            {EARNINGS_CARDS.map((earningsCard) => {
              return (
                <EarningsCard
                  key={earningsCard.heading}
                  heading={earningsCard.heading}
                  pointsCount={earningsCard.pointsCount}
                  breakdownHandler={earningsCard.breakdownHandler}
                />
              );
            })}
          </div>
          <BonusesCard />
        </div>
        <Image
          src="/placeholder/earnings-chart-placeholder.svg"
          alt="earnings-chart"
          width={488}
          height={301}
        />
      </div>
    </div>
  );
};
