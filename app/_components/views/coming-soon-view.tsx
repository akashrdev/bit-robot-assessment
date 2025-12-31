import { urls } from "@/app/const/urls";
import Link from "next/link";

export const ComingSoonView = () => {
  return (
    <div className="w-full flex-col flex justify-center items-center">
      <span className="text-2xl font-neuebit text-primary-brand">
        Feature coming soon. Follow us on{" "}
        <Link className="underline" href={urls.x} target="_blank">
          X/Twitter
        </Link>{" "}
        for the latest updates.
      </span>
    </div>
  );
};
