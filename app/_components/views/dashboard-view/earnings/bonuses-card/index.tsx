import { BonusesCardCtaButton } from "./cta-button";

export const BonusesCard = () => {
  return (
    <div className="bg-primary-accent px-4 py-3 min-h-22.75 gap-3 flex rounded-2xl w-full items-center">
      <div className="flex flex-col gap-1">
        <span className="font-medium text-primary-brand font-aeonik leading-none">
          Bonuses Available!
        </span>
        <span className="font-medium text-primary-brand text-sm font-aeonik leading-none">
          The more you participate, the more you earn.
        </span>
      </div>
      <BonusesCardCtaButton />
    </div>
  );
};
