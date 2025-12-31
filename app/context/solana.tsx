"use client";
import {
  ConnectionProvider,
  WalletProvider
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { ReactNode, useMemo } from "react";
import { RPC_URL } from "../settings/rpc";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";

export const SolanaProviders = ({ children }: { children: ReactNode }) => {
  const network = WalletAdapterNetwork.Mainnet;
  const wallets = useMemo(() => [], [network]);

  return (
    <ConnectionProvider endpoint={RPC_URL}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};
