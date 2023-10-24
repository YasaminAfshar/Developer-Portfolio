import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio - Yasmin Afsharinejad</title>
        <meta name="description" content="I have created this beautiful portfolio so that you can access all the work and projects carried out in what I like most, which is programming"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://res.cloudinary.com/dsrdpgpzy/image/upload/v1698188265/Portfolio/favicon_bfwbab.ico"/>
      </Head>
      <main>
        Home
      </main>
    </>
  );
}
