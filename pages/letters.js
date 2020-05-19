import { NextSeo } from 'next-seo';

import Head from 'next/head';

import Navbar from '../components/navbar';
import Heading from '../components/heading';
import Header from '../components/header';

const Index = () => (
  <>
    <Head>
      <title>vixalien</title>
    </Head>
    <NextSeo title="Newsletta - Coming soon" />
    <Header
      title="Newsletta"
      description="I believe this is coming soon."
      text="Wait till I get atleast 10 blog posts and 1K visitors."
    />

    <Navbar />
  </>
);

export default Index;
