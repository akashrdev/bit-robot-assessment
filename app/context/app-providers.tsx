"use client";

import { ReactNode } from "react";
import { UserContextProvider } from "./user-context";
import { TooltipProvider } from "@radix-ui/react-tooltip";

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <TooltipProvider>
      <UserContextProvider>{children}</UserContextProvider>
    </TooltipProvider>
  );
};
