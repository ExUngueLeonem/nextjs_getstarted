import React from 'react';
import Head from 'next/head';

import Layout, { siteTitle } from 'components/common/Layout';

import utilStyles from 'styles/utilStyles.module.scss';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello!, my name is Iliya, a am frontend developer in Flagman team. For now i am learning Next.js</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        <p>
          <Link href="/posts/first-post">first post</Link>
        </p>
      </section>
    </Layout>
  )
}
