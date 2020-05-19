import { useState } from 'react'

import Head from 'next/head'
import Link from 'next/link'

import Vixalien from '../components/vixalien'

import Navbar from '../components/navbar'
import Heading from '../components/heading'
import Header from '../components/header'
import Blog from '../components/blog'
import Search from '../components/search'

import blogPosts from 'lib/posts'

const Index = ({ blogs }) => {
  let [filtered, setBlogs] = useState(blogs);

  let filter = ({ target: bar }) => {
    if (!bar.value) return
    let value = new RegExp("(" + bar.value.toLowerCase().trim().replace(/(\s)+/igm, "$1") + ")", "ig");
    setBlogs(blogs.filter(
      el => {
        return JSON.stringify(el).match(value);
      }
      )
      .map(
        el => {
          let title = el.title
            .replace(value, "<b>$1</b>");
          let summary = el.summary
            .replace(value, "<b>$1</b>");
          return { ...el, title, summary };
        })
    );
    console.log("blogs", blogs);
  }
  return (<>
    <Head>
      <title>SWR: React Hooks for Remote Data Fetching</title>
    </Head>
    <main>
      <Header title="articles" description="read articles written by me" />
      <Navbar />
      <Search onChange={filter} />
			{filtered.map(post => (
				<Blog blog={post} key={post.title} />
			))}
    </main>
  </>)
}

export async function getStaticProps() {
	return {
		props: { blogs: blogPosts }, // will be passed to the page component as props
	}
}

export default Index