import { ShareLinkButton } from "./share-link-button";
import { Badge } from "../../common/badge";
import GoldLogo from "@/public/gold-logo.svg";
import { ReferralTooltip } from "./tooltip";

export const ReferralCard = () => {
  return (
    <div className="w-54 rounded-2xl p-4 gap-10 flex flex-col shadow-badge bg-gray-card ">
      <div className="flex justify-between items-center ">
        <Badge
          variant="gold"
          label="EARN PTS"
          icon={<GoldLogo className="size-4" />}
          className="pl-3 pr-4"
        />
        <ReferralTooltip />
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2 font-aeonik">
          <div className="flex gap-1.5 items-baseline">
            <span className="text-2xl text-primary-brand font-medium tracking-[-0.01em]">
              12
            </span>{" "}
            <span className="font-medium text-sm text-primary-brand tracking-[-0.04em]">
              referrals
            </span>
          </div>
          <span className="font-medium text-[10px] text-gray2-text font-aeonik">
            Refer friends to earn more
          </span>
        </div>
        <ShareLinkButton />
      </div>
    </div>
  );
};
