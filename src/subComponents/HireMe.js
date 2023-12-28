//import Link from 'next/link'
import React from 'react'
import { CircularText } from './Icons'

const HireMe = () => {
  return (
    <div className="fixed left-8 bottom-4 flex items-center justify-center overflow-hidden">
      <div className="w-48 h-auto flex items-center justify-center relative">
        <CircularText className={"fill-dark animate-spin-slow dark:fill-light"} />
        <a
          href="https://wa.link/3hca3d"
          target={"_blank"}
          className="flex items-center justify-center text-xl font-semibold absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-white shadow-md border border-solid border-transparent w-24 h-24 rounded-full hover:bg-light hover:text-black hover:border-4 hover:border-black dark:bg-light dark:text-dark hover:dark:bg-black hover:dark:text-light hover:dark:border-light"
        >
          Hire Me
        </a>
      </div>
    </div>
  );
}

export default HireMe