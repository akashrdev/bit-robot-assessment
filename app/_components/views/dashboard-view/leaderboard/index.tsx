import { Badge } from "@/app/_components/common/badge";
import { LeaderboardTable } from "./table";

export const Leaderboard = () => {
  return (
    <div className="flex flex-col gap-4">
      <Badge label="LEADERBOARD" />
      <LeaderboardTable />
    </div>
  );
};
