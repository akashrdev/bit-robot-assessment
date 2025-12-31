import AboutIcon from "@/public/sidebar/about.svg";
import * as Tooltip from "@radix-ui/react-tooltip";

export const ReferralTooltip = () => {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <AboutIcon className="text-gray1-text" />
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content
          className="bg-primary-accent text-primary-brand text-xs font-aeotik px-3 py-2 rounded-lg"
          sideOffset={5}
        >
          Points are awesome, refer a friend and get earning!
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  );
};
