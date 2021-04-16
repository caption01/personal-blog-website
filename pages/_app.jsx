import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [isMounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!isMounted) return null;

  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
