import '../styles/global.css';
import Vixalien from '../components/vixalien';
import { DefaultSeo } from 'next-seo';
import SEO from 'next-seo.config';
import dynamic from 'next/dynamic';
import Head from 'next/head';

// NProgress
import '../styles/nprogress.css';

// Themes
import { ThemeProvider } from 'styled-components';
import { useDarkMode, Theme } from 'lib/useDarkMode.js';
import { lightTheme, darkTheme } from '../styles/theme/themes';
import { GlobalStyles } from '../styles/theme/global';

const TopProgressBar = dynamic(
  () => {
    return import('../components/progress-bar');
  },
  { ssr: false }
);

const MyApp = ({ Component, pageProps }) => {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <Theme.Provider value={{ toggleTheme, theme }}>
        <DefaultSeo {...SEO} />
        <GlobalStyles />
        <div className="page">
          <TopProgressBar />
          <main>
            <Component {...pageProps} />
          </main>
        </div>
        <footer>
          <a href="/" aria-label="vixalien">
            <Vixalien width="100" />
          </a>
          <style jsx>{`
            a {
              display: flex;
              flex-direction: column;
            }
          `}</style>
        </footer>
      </Theme.Provider>
    </ThemeProvider>
  );
};

export default MyApp;
