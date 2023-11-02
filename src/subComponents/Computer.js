import { Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "./Loader";

const Computers = ({ isMobile }) => {
  const { scene } = useGLTF("/robot/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.7} groundColor="black" />
      <primitive
        object={scene}
        scale={isMobile ? 0.7 : 1.98}
        position={isMobile ? [0, -3, -2.2] : [-0.02, -0.01, 0]}
        rotation={[0, 0, 0.02]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const CanvasWithOrbitControls = dynamic(
    () =>
      import("@react-three/fiber").then((module) => {
        return module.Canvas;
      }),
    {
      ssr: false,
    }
  );

  return (
    <CanvasWithOrbitControls
      frameloop="demand"
      shadows
      dpr={[2, 3]}
      camera={{ position: [25, 5, 5], fov: 17.5 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2.3}
          minPolarAngle={Math.PI / 2.5}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </CanvasWithOrbitControls>
  );
};

export default ComputersCanvas;
