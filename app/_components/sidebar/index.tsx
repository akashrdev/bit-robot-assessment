import { Logo } from "./logo";
import { ReferralCard } from "./referral-card";
import { ResourceMenu } from "./resource-menu";
import { ViewMenu } from "./view-menu";

export const Sidebar = () => {
  return (
    <div className="flex flex-col w-66 shrink-0">
      <div className="pt-6 px-6 pb-2 shrink-0">
        <Logo />
      </div>

      <div className="h-189.5 border-r border-r-primary-accent pt-2 px-2 pb-10 flex flex-col justify-between">
        <ViewMenu />
        <div className="flex flex-col gap-4 px-4">
          <ResourceMenu />
          <ReferralCard />
        </div>
      </div>
    </div>
  );
};
