import Link from 'next/link'
import React from 'react'
import {motion} from "framer-motion"

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-16 h-16 bg-dark flex justify-center items-center rounded-full border-2 border-solid border-transparent dark:border-light"
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
          className="w-11"
          src="https://res.cloudinary.com/dsrdpgpzy/image/upload/v1698358254/Portfolio/svgs/power-off_jmq6ev.svg"
          alt="Botón con acceso directo a la página HOME"
        />
      </MotionLink>
    </div>
  );
}

export default Logo