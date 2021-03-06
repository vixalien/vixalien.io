import Head from 'next/head';

import { NextSeo, ArticleJsonLd } from 'next-seo';
import useSWR from 'swr';
import fetch from 'isomorphic-unfetch';

import Navbar from 'components/navbar';
import Header from 'components/header';

import { getAllPostIds } from 'lib/posts';

let fetcher = (path) => {
  return fetch(path).then((e) => e.json());
};

function BlogPostPage({ id }) {
  const { error, data } = useSWR(`/api/blog/show?id=${id}`, fetcher);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  const { data: meta, html: htmlContent } = data;
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

      <div
        className="post"
        dangerouslySetInnerHTML={{
          __html: htmlContent
        }}
      />
    </div>
  );
}

export default BlogPostPage;

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
