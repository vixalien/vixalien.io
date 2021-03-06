import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="Content-Language" content="en" />
          <meta name="application-name" content="vixalien" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="vixalien" />
          <meta name="description" content="web site for vixalien" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta
            name="msapplication-config"
            content="/favicon/browserconfig.xml"
          />
          <meta name="msapplication-TileColor" content="#888" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#888" />

          <link rel="canonical" href="https://vixalien.now.sh"/>
          <link rel="preconnect" href="https://www.google-analytics.com/"/>

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <link
            rel="mask-icon"
            href="/favicon/safari-pinned-tab.svg"
            color="#888"
          />
          <link rel="shortcut icon" href="/favicon/favicon.ico" />
          <link
            rel="preload"
            href="/fonts/inter.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=UA-170473951-1`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-170473951-1', {
              page_path: window.location.pathname,
            });
          `
            }}
          />
        </Head>
        <body>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            try {
              var alreadyAnimated = localStorage.getItem('swr-animated');
              if (!alreadyAnimated) {
                window.addEventListener("DOMContentLoaded", () => (document.body.className = 'animate'))
                localStorage.setItem('swr-animated', '1');
              }
            } catch (e) {}
            // serviceWorker registration
            if ('serviceWorker' in navigator) {
              navigator.serviceWorker.register('/sw.js', { scope: '/' })
                .then((reg) => {
                  // registration worked
                  console.log('SW Registration succeeded. Scope is ' + reg.scope);
                }).catch((error) => {
                  // registration failed
                  console.log('SW Registration failed with ' + error);
                })
            };
            // reload when connection restored
            if (!navigator.onLine) window.ononline = () => history.go(location)
          `
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
