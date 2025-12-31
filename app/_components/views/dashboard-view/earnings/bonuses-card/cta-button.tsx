import { urls } from "@/app/const/urls";
import Link from "next/link";

export const BonusesCardCtaButton = () => {
  return (
    <Link
      className="bg-primary-brand rounded-lg  h-8.5 justify-center px-2 cursor-pointer flex items-center"
      href={urls.challenges}
      target="_blank"
    >
      <span className="text-white font-bold text-sm font-neuebit">
        SEE OPPORTUNITIES
      </span>
    </Link>
  );
};
