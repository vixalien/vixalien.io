import { useState, useEffect } from 'react';

import { NextSeo, BlogJsonLd } from 'next-seo';

import Head from 'next/head';
import Link from 'next/link';

import Vixalien from '../components/vixalien';

import Navbar from '../components/navbar';
import Heading from '../components/heading';
import Header from '../components/header';
import Blog from '../components/blog';
import Search from '../components/search';

import blogPosts from 'lib/posts';

const Index = ({ blogs }) => {
  let [filtered, setBlogs] = useState(blogs);
  let [ref, setRef] = useState();

  let searchpars = (key, value) => {
    console.log('setting ', key, ' to ', value);
    try {
      let searchObj = new URLSearchParams(location.search);
      if (!value) {
        searchObj.delete(key);
      }
      if (key && value) {
        searchObj.set(key, value);
      }
      let str = searchObj.toString();
      history.replaceState(
        { searched_for: value },
        null,
        new URL(str.length > 0 ? '?' + str : location.pathname, location)
      );
    } catch (err) {
      console.log('Error occured while setting search pars: ', err);
      // Do nothing
    }
  };

  let filter = ({ target: bar }) => {
    if (!bar.value) {
      setBlogs(blogs);
      searchpars('q');
      return;
    }
    searchpars('q', bar.value);
    let value = new RegExp(
      '(' +
        bar.value
          .toLowerCase()
          .trim()
          .replace(/(\s)+/gim, '$1') +
        ')',
      'ig'
    );
    setBlogs(
      blogs
        .filter((el) => {
          return JSON.stringify(el).match(value);
        })
        .map((el) => {
          let title = el.title.replace(value, '<b>$1</b>');
          let summary = el.summary.replace(value, '<b>$1</b>');
          return { ...el, title, summary };
        })
    );
    console.log('blogs', blogs);
  };

  return (
    <>
      <NextSeo
        title="articles - vixalien"
        description="read articles written by vixalien."
        openGraph={{
          title: 'articles - vixalien',
          description: 'read articles written by vixalien.'
        }}
      />
      <BlogJsonLd
        url="https://vixalien.now.sh/blog"
        title="articles by vixalien"
        authorName="vixalien"
        description="read articles written by vixalien."
      />
      <main>
        <Header title="articles" description="read articles written by me" />
        <Navbar />
        <Search onChange={filter} />
        {filtered.length > 0 ? (
          filtered.map((post) => <Blog blog={post} key={post.title} />)
        ) : (
          <div>Nothing found</div>
        )}
      </main>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { blogs: blogPosts } // will be passed to the page component as props
  };
}

export default Index;
