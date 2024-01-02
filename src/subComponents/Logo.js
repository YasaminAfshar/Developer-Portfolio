import React from 'react'
import Link from 'next/link'
import {motion} from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-12 1md:w-16 h-12 1md:h-16 bg-dark flex justify-center items-center rounded-full border-2 border-solid border-transparent dark:border-light"
        whileHover={{
          scale: 1.2,
          rotate: 180,
          backgroundColor: [
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
          transition: { backgroundColor: { duration: 1, repeat: Infinity } },
        }}
        whileTap={{
          scale: 0.8,
          rotate: -90,
          borderRadius: "100%",
        }}
      >
        <img
          className="w-8 1md:w-11"
          src="/images/svgs/power-off.svg"
          alt="Button with direct access to Home Page"
        />
      </MotionLink>
    </div>
  );
}

export default Logo