import Link from 'next/link'
import React from 'react'
import Layout from './Layout'
import Image from "next/image";
import logo from '../../public/images/profile/logo.png'
import { Abel } from "next/font/google";

/* -------------------------- CODE FOR FONTS GOOGLE ------------------------- */

const abel = Abel({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-abel",
});


const Footer = () => {
  return (
    <footer
      className={`${abel.variable} font-abel w-full border-t-4 border-solid border-black font-semibold text-2xl text-black dark:text-light dark:border-light mx-auto cursor-default `}
    >
      <Layout className="flex flex-col 2lg:flex-row justify-between items-center py-8 gap-8">
        <span className="text-[1.08rem] xsm:text-2xl">
          {new Date().getFullYear()} &copy; All Rights Reserved by the Author
        </span>
        <Image
          src={logo}
          alt="Logo of Yasmin Afsharinejad"
          className="w-[14rem] mx-auto"
        />
        <div className="flex items-center text-[1.08rem] xsm:text-2xl">
          Build With <span className="text-primary px-1">&#9825;</span> By&nbsp;{" "}
          <Link
            href="https://www.linkedin.com/in/yasmin-afsharinejad-0826921a2/"
            target={"_blank"}
            className="underline underline-offset-2"
          >
            Yasmin Afsharinejad
          </Link>
        </div>
      </Layout>
    </footer>
  );
}

export default Footer