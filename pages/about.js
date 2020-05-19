import { NextSeo } from 'next-seo';

import Head from 'next/head';

import Navbar from '../components/navbar';
import Header from '../components/header';

const Index = () => (
  <>
    <Head>
      <title>vixalien</title>
    </Head>
    <NextSeo title="about vixalien" />
    <Header title="about vixalien" />

    <Navbar />

    <p>
      My names are <b>Shema Angelo</b>. Call me vixalien.
    </p>

    <p>Here's a list of tech I deal with, currently: (non-exhaustive!)</p>

    <ul>
      <li>ReactJS [within NextJS]</li>
      <li>Design - Typography, [Gray] Colors and Responsiveness.</li>
      <li>Ruby on Rails</li>
    </ul>

    <p>
      I'm supposed to make my website, like any other developer outside, new
      content coming in!
    </p>

    <h3>Contact Me</h3>

    <ul>
      <li>
        Mail: <a href="">geoangercola@gmail.com</a> [Don't forget me to tell me
        how I can improve.]
      </li>
      <li>
        Web: <a href="//vixalien.now.sh">click</a>
      </li>
      <li>
        Github: <a href="//github.com.vixalien">SOME projects</a>
      </li>
    </ul>
  </>
);

export default Index;
