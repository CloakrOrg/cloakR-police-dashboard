import Navbar from '@/components/Navbar';
import '@/styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isDashboardPage = router.pathname === '/';

  return (
    <ChakraProvider>
      {!isDashboardPage && <Navbar />}
      <Component {...pageProps} />
    </ChakraProvider>
  );
};