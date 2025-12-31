"use client";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useWallet } from "@solana/wallet-adapter-react";
import Image from "next/image";
import { useState } from "react";
import ChevronDownIcon from "@/public/down-arrow.svg";
import { twMerge } from "tailwind-merge";

export const WalletConnectMenu = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const { disconnect } = useWallet();
  return (
    <DropdownMenu.Root
      modal={false}
      open={isMenuVisible}
      onOpenChange={(state) => setIsMenuVisible(state)}
    >
      <DropdownMenu.Trigger asChild>
        <div className="h-8.5 rounded-lg border border-primary-accent gap-3 px-3 py-1 flex items-center  w-(--radix-dropdown-menu-trigger-width) cursor-pointer font-aeonik shadow-wallet">
          <Image
            src="/avatars/default-user.png"
            height={20}
            width={20}
            alt="user-profile-image"
            className="rounded-full"
          />
          <span className="font-medium text-xs text-gray2-text">
            username123
          </span>
          <span className="grid place-items-center size-5">
            <ChevronDownIcon
              width={10}
              height={5}
              className={twMerge(
                "text-primary-brand transition-transform duration-200 ease-out",
                isMenuVisible && "rotate-180"
              )}
            />
          </span>
        </div>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="w-(--radix-dropdown-menu-trigger-width) rounded-lg bg-gray-card border border-primary-accent shadow-badge data-[state=open]:animate-in data-[state=open]:fade-in data-[state=open]:zoom-in-95 font-aeonik">
        <div className="bg-primary-card px-4 py-1 flex flex-col items-center gap-3 cursor-pointer">
          <DropdownMenu.Item onClick={disconnect}>
            <span className="font-aeonik text-xs text-primary-brand">
              Disconnect
            </span>
          </DropdownMenu.Item>
        </div>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};
