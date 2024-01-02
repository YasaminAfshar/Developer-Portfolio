import React from 'react'

const Lilcon = () => {
   
  return (
    <figure className="hidden sm:inline-block absolute -left-7 sm:-left-2 1md:left-0 stroke-dark dark:stroke-light">
      <svg
        className="-rotate-90 w-[90px] 1md:w-[115px] h-[90px] 1md:h-[115px]"
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
        <circle
          cx="75"
          cy="50"
          r="22"
          className="stroke-[4px] 1md:stroke-[6px] fill-light dark:fill-dark"
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