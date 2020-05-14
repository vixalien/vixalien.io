import dynamic from 'next/dynamic'
import useSWR from 'swr'
import fetch from 'node-fetch'
import Head from 'next/head'

import Navbar from 'components/navbar'
import Heading from 'components/heading'
import Video from 'components/video'
import Code from 'components/code'
import Header from 'components/header'

let fetcher = (path) => {
	return fetch(path).then(e => e.json()).then(e => e.data);
}

// let Index = () => {
// 	// import('./text.mdx').then(e => { data = e; console.log('done ',data,'this ', this)}).catch(err => error = err);
// 	// let Din = dynamic(() => import('./text.mdx'));
// 	let { Meta, err } = useSWR('/hello', (p) => { console.log("evaled inner fn ", p); return { err: "hello" } });
// 	// console.log("din ", Din, "meta ", Meta);

// 	return <Din components={{ h1: () => (<div>Hello</div>) }}/>
// }

let Index = () => {
	const { error, data } = useSWR('/api/blog/show?id=text', fetcher)
	let Text = dynamic(() => import('blog/text.mdx'));

	if (error) return <div>failed to load</div>
	if (!data) return <div>loading...</div>
	console.log("data ", data);
	return (
		<>
			<Head>
				<title>{data.title}</title>
			</Head>
			<Header title={data.title} description={data.summary} text={data.publishedAt} />

			<Navbar />

			<Text code="a"/>
		</>
		)
}

export default Index