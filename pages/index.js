import { NextSeo } from 'next-seo';

import Head from 'next/head'

import Navbar from '../components/navbar'
import Heading from '../components/heading'
import Header from '../components/header'

const Index = () => (
  <>
    <Head>
      <title>vixalien</title>
    </Head>
    <NextSeo
      openGraph={{
        type: 'profile',
        profile: {
          firstName: 'Angelo',
          lastName: 'Shema',
          username: 'vixalien',
          gender: 'male',
        }
      }}
    />
    <Header title="vixalien" description="my web-site says:" text="Welcome" />

    <Navbar />

    <p>
      My names are <b>Shema Angelo</b>. Call me vixalien.
    </p>

    <p>  I love to code. I always try to work with something new, so if you know
    any topic, it's normal that I already worked in that subject. (I've worked
    with anything from JAVA and PHP to Mozilla's B2GOS and the linux kernel and
    Assembly code). </p>

    <p>Here's a list of tech I deal with, currently: (non-exhaustive!)</p>

    <ul>
      <li>ReactJS [within NextJS]</li>
      <li>Design - Typography, [Gray] Colors and Responsiveness.</li>
      <li>Ruby on Rails</li>
    </ul>

    <p>  Even though I learnt many things, the subjects I dig into always get
    superposed, but an often SIMPLER, MORE POWERFUL and EASIER alternative.
    That's why I always try to dig into a modern solution for projects, In fact,
    projects I do usually are made with different frameworks, which I considered
    was the best at the time. </p>

</> )

export default Index
