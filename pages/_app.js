import { NextUIProvider } from "@nextui-org/react";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import Navbar from "../components/Navbar";

import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";

const { chains, provider } = configureChains(
  [chain.kovan],
  [
    jsonRpcProvider({
      rpc: () => ({
        http: process.env.RPC,
      }),
    }),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <NextUIProvider>
            <Navbar />
            <Component {...pageProps} />
          </NextUIProvider>
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  );
}

export default MyApp;
