import Head from 'next/head'

import Navbar from '../components/navbar'
import Heading from '../components/heading'
import Video from '../components/video'
import Code from '../components/code'
import Header from '../components/header'

const Index = () => (
    <>
      <Head>
        <title>vixalien</title>
      </Head>
      <Header title="vixalien" description="my web-site says:" text="Welcome"/>

      <Navbar />

      <p>
        Welcome to this awful site, to view anything, click any above link
        </p>
      </>
)

export default Index
