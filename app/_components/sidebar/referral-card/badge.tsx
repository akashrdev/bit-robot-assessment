import GoldLogo from "@/public/gold-logo.svg";
export const EarnPointsBadge = () => {
  return (
    <div className="bg-gold-badge rounded-lg py-2 pl-3 pr-4 gap-2 flex items-center">
      <GoldLogo className="size-4" />
      <span className="text-gold-primary-brand font-bold font-neuebit leading-none">
        EARN PTS
      </span>
    </div>
  );
};
