import Link from "next/link";
import LinkOutIcon from "@/public/link-out.svg";

export interface ResourceMenuItem {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  link: string;
}

export const ResourceMenuItem = ({ label, icon, link }: ResourceMenuItem) => {
  const Icon = icon;
  return (
    <Link
      className="border-b border-b-primary-accent flex justify-between group py-3 px-1 items-center"
      href={link}
      target="_blank"
    >
      <div className="flex gap-3 items-center">
        <span className="size-5 grid place-items-center">
          <Icon className="group-hover:text-primary-brand-inactive text-gray2-text" />
        </span>
        <span className="font-bold text-xl text-gray2-text group-hover:text-primary-brand-inactive font-neuebit leading-5">
          {label}
        </span>
      </div>
      <div className="relative size-5">
        <LinkOutIcon
          className="
     absolute
     text-gray2-text
     group-hover:text-primary-brand
      right-1/2 top-1/2
      translate-x-1/2 -translate-y-1/2
      transition-[top,right,transform] duration-150 ease-out
      group-hover:right-0 group-hover:top-0
      group-hover:translate-x-0 group-hover:translate-y-0
    "
        />
      </div>
    </Link>
  );
};
