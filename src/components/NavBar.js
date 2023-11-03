import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { GithubIcon, LinkedInIcon, WhatsAppIcon } from "../subComponents/Icons";
import Logo from "../subComponents/Logo";
import { motion } from "framer-motion";
import SoundBar from "@/subComponents/SoundBar";


const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1.8px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? "w-full" : "w-0"}`}>
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium text-xl flex items-center justify-between">
      <nav>
        <CustomLink href="/" title="HOME" className="mr-4" />
        <CustomLink href="/about" title="ABOUT" className="mx-4" />
        <CustomLink href="/projects" title="PROJECTS" className="mx-4" />
        <CustomLink href="/contact" title="CONTACT" className="ml-4" />
      </nav>
      <nav className="flex items-center justify-center flex-wrap">
        <SoundBar/>
        <motion.a
          href="https://github.com/YasaminAfshar"
          target={"_blank"}
          className="w-14 mr-4"
          whileHover={{ y: -8 }}
          whileTap={{ scale: 0.8 }}
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/yasmin-afsharinejad-0826921a2/"
          target={"_blank"}
          className="w-14 mx-4"
          whileHover={{ y: -8 }}
          whileTap={{ scale: 0.8 }}
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href="https://wa.link/l5hje1"
          target={"_blank"}
          className="w-14 ml-4"
          whileHover={{ y: -8 }}
          whileTap={{ scale: 0.8 }}
        >
          <WhatsAppIcon />
        </motion.a>
      </nav>
      <div className="absolute left-[50%] top-4 translate-x-[50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
