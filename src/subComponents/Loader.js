import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html as="div" fullscreen className="flex justify-center pt-[150px]">
      <p className="font-serif font-bold text-3xl tracking-[.2em] text-slate-950">
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
