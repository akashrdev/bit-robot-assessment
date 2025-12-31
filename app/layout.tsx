import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "./_components/sidebar";
import { Header } from "./_components/header";
import { AppProviders } from "./context/app-providers";
import { ppNeueBit, aeonik } from "./fonts";
import { SolanaProviders } from "./context/solana";

export const metadata: Metadata = {
  title: "BitRobot"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ppNeueBit.variable} ${aeonik.variable}`}>
      <body className="min-h-screen">
        <SolanaProviders>
          <AppProviders>
            <div className="flex min-h-dvh">
              <Sidebar />
              <div className="flex-1">
                <div className="px-6">
                  <Header />
                  <main>{children}</main>
                </div>
              </div>
            </div>
          </AppProviders>
        </SolanaProviders>
      </body>
    </html>
  );
}
