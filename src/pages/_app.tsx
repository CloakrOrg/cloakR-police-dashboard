import Navbar from '@/components/Navbar';
import '@/styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  polygon,
  polygonMumbai
} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, publicClient } = configureChains(
  [polygonMumbai, polygon],
  [
    alchemyProvider({ apiKey: 'GWjHlCAyRQ-suLYu1DKVTUZ_BHr6-GXj' }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'cloakr',
  projectId: '5c659807e18f4d904b533c75f7442276',
  chains
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isDashboardPage = router.pathname === '/';

  return (
    <WagmiConfig config={wagmiConfig}>
    <RainbowKitProvider coolMode chains={chains}>
    <ChakraProvider>
      {!isDashboardPage && <Navbar />}
      <Component {...pageProps} />
    </ChakraProvider>
    </RainbowKitProvider>
    </WagmiConfig>
  );
};