import { useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const Line = ({ click, animationDelay }) => {
  const controls = useAnimation();

  const playAnimation = async () => {
    if (click) {
      await controls.start({
        scaleY: [1, 2, 1],
        transition: {
          duration: 2,
          repeat: Infinity,
          delay: animationDelay,
          timingFunction: "ease",
        },
      });
    } else {
      controls.stop();
    }
  };

  playAnimation();

  return (
    <motion.div
      className="bg-gold h-7 w-1.5 mx-1 "
      animate={controls}
    ></motion.div>
  );
};

const SoundBar = () => {
  const ref = useRef(null);
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);

    if (!click) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  };

  return (
    <div className="flex z-10 mx-8 cursor-pointer" onClick={handleClick}>
      <Line click={click} animationDelay={0.1} />
      <Line click={click} animationDelay={0.3} />
      <Line click={click} animationDelay={0.5} />
      <Line click={click} animationDelay={0.7} />
      <Line click={click} animationDelay={0.9} />

      <audio
        src="https://res.cloudinary.com/dsrdpgpzy/video/upload/v1698444435/Portfolio/svgs/music1_tahxdt.mp3"
        ref={ref}
        loop
      />
    </div>
  );
};

export default SoundBar;
