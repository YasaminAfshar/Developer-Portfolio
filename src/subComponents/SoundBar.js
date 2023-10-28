import { useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const Line = ({ click }) => {
  const controls = useAnimation();

  const playAnimation = async () => {
    if (click) {
      await controls.start({
        scaleY: [1,1.5,1],
        transition: { duration: 1.5, repeat: Infinity },
      });
    } else {
      controls.stop();
    }
  };

  playAnimation();

  return (
    <motion.div
      className="bg-black h-8 w-2 mx-1"
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
    <div
      className="flex z-10 mx-8 cursor-pointer" 
      onClick={handleClick}
    >
      <Line click={click} />
      <Line click={click} />
      <Line click={click} />
      <Line click={click} />
      <Line click={click} />

      <audio
        src="https://res.cloudinary.com/dsrdpgpzy/video/upload/v1698444435/Portfolio/svgs/music1_tahxdt.mp3"
        ref={ref}
        loop
      />
    </div>
  );
};

export default SoundBar;
