import dynamic from 'next/dynamic'
import useSWR from 'swr'
import fetch from 'isomorphic-unfetch'
import { getAllPostIds } from 'lib/posts'

let fetcher = (path) => {
	return fetch(path).then(e => e.json()).then(e => e.data);
}

import Head from 'next/head'

import Navbar from 'components/navbar'
import Header from 'components/header'

export default function BlogPostPage({ id }) {
	const { error, data: meta } = useSWR(`/api/blog/show?id=${id}`, fetcher)
	let Text = dynamic(() => import(`blog/${id}.mdx`));
	// Not convinced this works, but this is theoretically how it happens
	// const MDXMetadata = dynamic(() => import(`../blog/${filename}`).then(mod => mod.metadata))
	// console.log('the content', MDXMetadata)
	if (error) return <div>failed to load</div>
	if (!meta) return <div>loading...</div>
	console.log("data ", meta);
	return (
		<div>
			<Head>
				<title>{meta.title}</title>
			</Head>
			<Header title={meta.title} description={meta.summary} text={meta.publishedAt} />

			<Navbar />

			<Text/>
		</div>
	)
}

export function getStaticPaths() {
	const paths = getAllPostIds();
	console.log("all paths ", paths);
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
	console.log("id ", params.id);
	return {
		props: {
			id: params.id
		}
	}
}
