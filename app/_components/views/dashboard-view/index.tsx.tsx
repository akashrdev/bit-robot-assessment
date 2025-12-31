import { DiscoveryCarousel } from "../../carousel";
import { Badge } from "../../common/badge";
import { Earnings } from "./earnings";
import { Leaderboard } from "./leaderboard";

export const DashboardView = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <Badge label="DISCOVER" />
          <span className="font-medium text-2xl text-primary-brand">
            Explore the BitRobot Network
          </span>
        </div>
        <DiscoveryCarousel />
        <Earnings />
      </div>
      <Leaderboard />
    </div>
  );
};
