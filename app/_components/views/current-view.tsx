"use client";

import { useUserContext } from "@/app/context/user-context";
import { DASH_VIEWS } from "../sidebar/view-menu";
import { DashboardView } from "./dashboard-view/index.tsx";
import { useWallet } from "@solana/wallet-adapter-react";
import { ConnnectWalletView } from "./connect-wallet-view";
import { ComingSoonView } from "./coming-soon-view";

export const CurrentView = () => {
  const { view } = useUserContext();
  const { connected } = useWallet();

  if (view === DASH_VIEWS.DASHBOARD) {
    if (connected) {
      return <DashboardView />;
    } else {
      return <ConnnectWalletView />;
    }
  }

  if (view === DASH_VIEWS.CONTRIBUTE || view === DASH_VIEWS.PROFILE) {
    return <ComingSoonView />;
  }

  return null;
};
