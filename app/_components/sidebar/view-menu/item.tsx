import { DASH_VIEWS } from ".";
import { twMerge } from "tailwind-merge";
import { ViewMenuActiveIndicator } from "./active-indicator";

export interface ViewMenuItemData {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  view: DASH_VIEWS;
}

export interface ViewMenuItemProps {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  isActive: boolean;
  onSelect: () => void;
}

export const ViewMenuItem = ({
  label,
  icon,
  isActive,
  onSelect
}: ViewMenuItemProps) => {
  const Icon = icon;
  return (
    <div className="flex justify-between py-3 px-1 cursor-pointer group items-center  border-b border-b-primary-accent ">
      <div className={twMerge("gap-3 flex  items-center")} onClick={onSelect}>
        <span className="size-5 grid place-items-center">
          <Icon
            className={twMerge(
              isActive
                ? "text-primary-brand"
                : "text-gray2-text group-hover:text-primary-brand-inactive"
            )}
          />
        </span>
        <span
          className={twMerge(
            "text-gray2-text group-hover:text-primary-brand-inactive text-xl font-bold font-neuebit leading-5",
            isActive && "text-primary-brand"
          )}
        >
          {label}
        </span>
      </div>
      {isActive && <ViewMenuActiveIndicator />}
    </div>
  );
};
