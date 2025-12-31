"use client";
import { useWallet } from "@solana/wallet-adapter-react";
import { ConnectWalletButton } from "./connect-wallet-button";
import { WalletConnectMenu } from "./wallet-connect-menu";

export const WalletConnect = () => {
  const { connected } = useWallet();
  return !connected ? <ConnectWalletButton /> : <WalletConnectMenu />;
};
