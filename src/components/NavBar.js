import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon} from "../subComponents/Icons";
import Logo from "../subComponents/Logo";
import { motion } from "framer-motion";
import SoundBar from "@/subComponents/SoundBar";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

import whatsappIcon from "../../public/images/svgs/whatsapp-icon.svg"
import Image from "next/image";


const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={ `h-[1.8px] inline-block bg-gold absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-500 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href)
  }

  return (
    <button
      href={href}
      className={`${className} relative group text-light dark:text-black my-3`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[1.8px] inline-block bg-gold absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-500 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {

  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick= () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="relative w-full px-32 py-8 font-medium text-lg 1xxl:text-xl flex items-center justify-between dark:text-white">
      <button
        className="flex 4lg:hidden flex-col justify-center items-center p-2 "
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-1.5 w-10 rounded-sm  ${
            isOpen ? "rotate-45 translate-y-2.5" : "-translate-y-1"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-1.5 w-10 rounded-sm my-1 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-1.5 w-10 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-2.5" : "translate-y-1"
          }`}
        ></span>
      </button>
      <div className="w-full hidden 4lg:flex justify-between items-center">
        <nav>
          <CustomLink href="/" title="HOME" className="mr-4" />
          <CustomLink href="/about" title="ABOUT" className="mx-4" />
          <CustomLink href="/projects" title="PROJECTS" className="mx-4" />
          <CustomLink href="/contact" title="CONTACT" className="ml-4" />
        </nav>
        <nav className="flex items-center justify-center flex-wrap">
          <SoundBar />
          <motion.a
            href="https://github.com/YasaminAfshar"
            target={"_blank"}
            className="w-10 1xxl:w-14 mr-4"
            whileHover={{ y: -8 }}
            whileTap={{ scale: 0.8 }}
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/yasmin-afsharinejad-0826921a2/"
            target={"_blank"}
            className="w-10 1xxl:w-14 mx-4"
            whileHover={{ y: -8 }}
            whileTap={{ scale: 0.8 }}
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="https://wa.link/7apkc8"
            target={"_blank"}
            whileHover={{ y: -8 }}
            whileTap={{ scale: 0.8 }}
          >
            <Image src={whatsappIcon} className="w-10 1xxl:w-14 ml-4" />
          </motion.a>
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-6 w-12 1xxl:w-16 flex items-center justify-center rounded-full p-1 ${
              mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
            }`}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          className="min-w-[80vw] 1md:min-w-[70vw] flex 4lg:hidden flex-col justify-between items-center fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-20"
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1, duration: 2, ease: "easeInOut" }}
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink href="/" title="HOME" toggle={handleClick} />
            <CustomMobileLink
              href="/about"
              title="ABOUT"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="PROJECTS"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/contact"
              title="CONTACT"
              toggle={handleClick}
            />
          </nav>
          <nav className="flex items-center gap-6 xsm:gap-10 justify-center flex-wrap mt-14 3xsm:mt-10">
            {/* <SoundBar /> */}
            <motion.a
              href="https://github.com/YasaminAfshar"
              target={"_blank"}
              className="w-10 3xsm:w-14 bg-light rounded-full dark:bg-dark"
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.8 }}
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/yasmin-afsharinejad-0826921a2/"
              target={"_blank"}
              className="w-10 3xsm:w-14"
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.8 }}
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="https://wa.link/7apkc8"
              target={"_blank"}
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.8 }}
            >
              <Image src={whatsappIcon} className="w-10 3xsm:w-14 ml-4" />
            </motion.a>
            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`w-10 3xsm:w-16 flex items-center justify-center rounded-full p-1 ${
                mode === "light" ? "bg-black text-light" : "bg-white text-dark"
              }`}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] top-4 translate-x-[50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
