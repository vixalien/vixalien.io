const title = 'vixalien - designer developer.';
const description =
  'front-end (JS & REACT & DESIGN), middle-end (UX & Flow), back-end (NODEJS & NEXTJS & RAILS).';

const SEO = {
  title,
  description,
  canonical: 'https://vixalien.now.sh',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://vixalien.now.sh',
    title,
    description,
    site_name: 'vixalien.io',
    images: [
      {
        // need fix
        url: 'https://vixalien.now.sh/favicon/apple-touch-icon.png',
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  },
  twitter: {
    handle: '@shemaangelo',
    site: '@shemaangelo',
    cardType: 'summary_large_image'
  }
};


export default SEO;
