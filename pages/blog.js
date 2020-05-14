import Head from 'next/head'
import Link from 'next/link'

import Vixalien from '../components/vixalien'

import Navbar from '../components/navbar'
import Heading from '../components/heading'
import Header from '../components/header'
import Blog from '../components/blog'

import blogPosts from 'lib/posts'

const Index = ({ blogs }) => (
  <>
    <Head>
      <title>SWR: React Hooks for Remote Data Fetching</title>
    </Head>
    <main>
      <Header title="articles" description="read articles written by me"/>
      <Navbar />
			{blogs.map(post => (
				<Blog blog={post} key={post.title} />
			))}
    </main>
 	</>
)

export async function getServerSideProps() {
	return {
		props: { blogs: blogPosts }, // will be passed to the page component as props
	}
}

export default Index