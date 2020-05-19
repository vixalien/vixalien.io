import dynamic from 'next/dynamic';
import { NextSeo, ArticleJsonLd } from 'next-seo';
import useSWR from 'swr';
import fetch from 'isomorphic-unfetch';

import { getAllPostIds } from 'lib/posts';

let fetcher = (path) => {
  return fetch(path)
    .then((e) => e.json())
    .then((e) => e.data);
};

import Head from 'next/head';

import Navbar from 'components/navbar';
import Header from 'components/header';

export default function BlogPostPage({ id }) {
  const { error, data: meta } = useSWR(`/api/blog/show?id=${id}`, fetcher);
  let Text = dynamic(() => import(`blog/${id}.mdx`));
  // Not convinced this works, but this is theoretically how it happens
  // const MDXMetadata = dynamic(() => import(`../blog/${filename}`).then(mod => mod.metadata))
  // console.log('the content', MDXMetadata)
  if (error) return <div>failed to load</div>;
  if (!meta) return <div>loading...</div>;
  console.log('data ', meta);
  return (
    <div>
      <NextSeo
        title={meta.title + ' - vixalien'}
        description={meta.summary}
        openGraph={{
          title: meta.title + ' - vixalien',
          description: meta.summary,
          type: 'article',
          article: {
            publishedTime: new Date(meta.publishedAt).toISOString(),
            authors: ['vixalien']
          }
        }}
      />
      <ArticleJsonLd
        url={`https://vixalien.now.sh/blog/${id}`}
        title={meta.title + ' - vixalien'}
        images={['https://vixalien.now.sh/favicon/android-chrome-192x192.png']}
        datePublished={new Date(meta.publishedAt).toISOString()}
        authorName="vixalien"
        publisherName="vixalien"
        publisherLogo="https://vixalien.now.sh/favicon/android-chrome-192x192.png"
        description={meta.summary}
      />
      <Header
        title={meta.title}
        description={meta.summary}
        text={meta.publishedAt}
      />

      <Navbar />

      <Text />
    </div>
  );
}

export function getStaticPaths() {
  const paths = getAllPostIds();
  console.log('all paths ', paths);
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  console.log('id ', params.id);
  return {
    props: {
      id: params.id
    }
  };
}
