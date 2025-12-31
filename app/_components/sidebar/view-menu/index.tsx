"use client";
import { ViewMenuItem, ViewMenuItemData } from "./item";
import DashboardIcon from "@/public/sidebar/dashboard.svg";
import ContributeIcon from "@/public/sidebar/contribute.svg";
import ProfileIcon from "@/public/sidebar/profile.svg";
import { useUserContext } from "@/app/context/user-context";

export enum DASH_VIEWS {
  DASHBOARD,
  CONTRIBUTE,
  PROFILE
}

const VIEW_MENU_ITEMS: ViewMenuItemData[] = [
  {
    label: "DASHBOARD",
    icon: DashboardIcon,
    view: DASH_VIEWS.DASHBOARD
  },
  {
    label: "CONTRIBUTE",
    icon: ContributeIcon,
    view: DASH_VIEWS.CONTRIBUTE
  },
  {
    label: "PROFILE",
    icon: ProfileIcon,
    view: DASH_VIEWS.PROFILE
  }
];

export const ViewMenu = () => {
  const { view, setView } = useUserContext();
  return (
    <div className="flex px-4 flex-col">
      {VIEW_MENU_ITEMS.map((menuItem) => {
        return (
          <ViewMenuItem
            key={menuItem.label}
            label={menuItem.label}
            icon={menuItem.icon}
            isActive={view === menuItem.view}
            onSelect={() => setView(menuItem.view)}
          />
        );
      })}
    </div>
  );
};
