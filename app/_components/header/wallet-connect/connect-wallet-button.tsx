import { useWalletModal } from "@solana/wallet-adapter-react-ui";

export const ConnectWalletButton = () => {
  const { setVisible } = useWalletModal();
  return (
    <div
      className="h-8.5 rounded-lg border border-primary-accent gap-3 px-3 py-1 flex w-fit items-center min-w-39.5 cursor-pointer justify-center"
      onClick={() => setVisible(true)}
    >
      <span className="font-bold text-xl font-neuebit text-primary-brand">
        Connect Wallet
      </span>
    </div>
  );
};
