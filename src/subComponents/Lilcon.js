import React from 'react'
import { motion, useScroll } from "framer-motion";

const Lilcon = ({reference}) => {
    const { scrollYProgress } = useScroll({
      target: reference,
      offset: ["center end", "center center"],
    });
  return (
    <figure className="absolute left-0 stroke-dark dark:stroke-light">
      <svg
        className="-rotate-90"
        width="115"
        height="115"
        viewBox="0 0 100 100"
      >
        <circle
          cx="75"
          cy="50"
          r="22"
          className="stroke-primary dark:stroke-primaryDark stroke-2 fill-none"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="22"
          className="stroke-[6px] fill-light dark:fill-dark"
          style={{ pathLength: scrollYProgress }}
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className="stroke-primary dark:stroke-primaryDark stroke-1 fill-primary dark:fill-primaryDark"
        />
      </svg>
    </figure>
  );
}

export default Lilcon