import { NextSeo } from 'next-seo';

import Head from 'next/head';

import Navbar from '../components/navbar';
import Heading from '../components/heading';
import Header from '../components/header';

const Index = () => (
  <>
    <Head>
      <title>Oops you seem offline</title>
    </Head>
    <NextSeo title="Offline - vixalien" />
    <Header
      title="Oops - Looks like you're offline"
      description="This is not your problem."
      text="We will try to reload when you're connected."
    />
  </>
);

export default Index;
