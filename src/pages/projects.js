import React from 'react'
import Head from "next/head";
import Layout from '@/components/Layout';
// import { } from "next/font/google";

/* -------------------------- CODE FOR FONTS GOOGLE ------------------------- */

/* const economica = Economica({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-economica",
}); */



const projects = () => {
  return (
    <>
      <Head>
        <title>My Portfolio - My Projects</title>
        <meta
          name="description"
          content="Right now, you are on the PROJECTS PAGE where you will be able to visualize all the projects that I have been doing to date."
        />
      </Head>

      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16 pb-20 overflow-hidden">

        </Layout>
      </main>
    </>
  );
}

export default projects