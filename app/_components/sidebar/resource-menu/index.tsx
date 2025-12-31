import { urls } from "@/app/const/urls";
import { ResourceMenuItem } from "./item";
import HelpIcon from "@/public/sidebar/help.svg";
import DocsIcon from "@/public/sidebar/docs.svg";
import ShopIcon from "@/public/sidebar/shop.svg";
import AboutIcon from "@/public/sidebar/about.svg";
import { Badge } from "../../common/badge";

export const ResourceMenu = () => {
  const RESOURCE_MENU_ITEMS: ResourceMenuItem[] = [
    {
      label: "HELP",
      icon: HelpIcon,
      link: urls.help
    },
    {
      label: "DOCS",
      icon: DocsIcon,
      link: urls.docs
    },
    {
      label: "SHOP",
      icon: ShopIcon,
      link: urls.shop
    },
    {
      label: "ABOUT",
      icon: AboutIcon,
      link: urls.about
    }
  ];
  return (
    <div className="flex flex-col gap-4">
      <Badge label="RESOURCES" />
      {RESOURCE_MENU_ITEMS.map((menuItem) => {
        return (
          <ResourceMenuItem
            key={menuItem.label}
            label={menuItem.label}
            icon={menuItem.icon}
            link={menuItem.link}
          />
        );
      })}
    </div>
  );
};
