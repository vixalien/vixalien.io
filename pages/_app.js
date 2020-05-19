import '../styles/global.css';
import Vixalien from '../components/vixalien';
import { DefaultSeo } from 'next-seo';
import SEO from 'next-seo.config';

// Themes
import { ThemeProvider } from 'styled-components';
import { useDarkMode, Theme } from 'lib/useDarkMode.js';
import { lightTheme, darkTheme } from '../styles/theme/themes';
import { GlobalStyles } from '../styles/theme/global';

const MyApp = ({ Component, pageProps }) => {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <Theme.Provider value={{ toggleTheme, theme }}>
        <DefaultSeo {...SEO} />
        <GlobalStyles />
        <div className="page">
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
