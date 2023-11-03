import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import { Special_Elite } from "next/font/google";
//import {useState, useEffect} from "react";
import portfileImg from "../../public/images/svgs/header-img.svg";

/* -------------------------- CODE FOR FONTS GOOGLE ------------------------- */

const special = Special_Elite({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-special",
});

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio - Yasmin Afsharinejad</title>
        <meta
          name="description"
          content="I have created this beautiful portfolio so that you can access all the work and projects carried out in what I like most, which is programming"
        />
      </Head>
      <main className="flex text-dark w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex justify-between w-full">
            <div className="w-1/2">
              <Image
                src={portfileImg}
                alt="Image that belong to the principal page"
                className="w-full h-[90%]"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center pt-14 pl-20">
              <p
                className={`${special.variable} font-special text-3xl banner py-2 px-4 mb-10 tracking-wider font-bold rounded-md`}
              >
                Welcome to my portfolio!
              </p>
              <h1>Hi, I'm Yasmin Afsharinejad</h1>
              <h3>
                {`Full Stack Developer`}
                <span>with knowledge of Data Entry and Digital Marketing</span>
              </h3>
              <p>
                I offer a strong guarantee of reliable and high-quality
                services. My skills and expertise ensure that your projects are
                executed with precision, attention to detail, and a commitment
                to excellence. You can trust that I will consistently meet and
                exceed your expectations. Your success is my priority.
              </p>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
