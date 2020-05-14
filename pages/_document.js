import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="Content-Language" content="en" />
          <meta name='application-name' content='vixalien' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='default' />
          <meta name='apple-mobile-web-app-title' content='vixalien' />
          <meta name='description' content='web site for vixalien' />
          <meta name='format-detection' content='telephone=no' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='msapplication-config' content='/favicon/browserconfig.xml' />
          <meta name='msapplication-TileColor' content='#888' />
          <meta name='msapplication-tap-highlight' content='no' />
          <meta name='theme-color' content='#888' />
          <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />

          <link rel='apple-touch-icon' sizes='180x180' href='/favicon/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/favicon/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/favicon/favicon-16x16.png' />
          <link rel='manifest' href='/favicon/manifest.json' />
          <link rel='mask-icon' href='/favicon/safari-pinned-tab.svg' color='#888' />
          <link rel='shortcut icon' href='/favicon/favicon.ico' />
          <link rel='preload' href='/fonts/inter.woff2' as="font" type="woff2"/>

          <meta name='twitter:card' content='web site for vixalien' />
          <meta name='twitter:url' content='vixalien.github.io' />
          <meta name='twitter:title' content='vixalien' />
          <meta name='twitter:description' content='web site for vixalien' />
          <meta name='twitter:image' content='/favicon/android-chrome-192x192.png' />
          <meta name='twitter:creator' content='@shemaangelo' />
          <meta property='og:type' content='website' />
          <meta property='og:title' content='vixalien' />
          <meta property='og:description' content='web site for vixalien' />
          <meta property='og:site_name' content='vixalien' />
          <meta property='og:url' content='vixalien.github.io' />
          <meta property='og:image' content='/favicon/apple-touch-icon.png' />
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
          `
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
