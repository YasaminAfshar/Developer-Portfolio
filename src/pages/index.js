import Head from 'next/head'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio - Yasmin Afsharinejad</title>
        <meta name="description" content="I have created this beautiful portfolio so that you can access all the work and projects carried out in what I like most, which is programming"/>
      </Head>
      <main>
        Home
      </main>
    </>
  );
}
