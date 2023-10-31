import { Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "./Loader";

const Computers = ({ isMobile }) => {
  const { scene } = useGLTF("/desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.9} groundColor="black" />
      <spotLight
        position={[-20,50,10]}
        angle={1}
        penumbra={0}
        intensity={5}
        castShadow
        shadow-mapSize={500}
      />
      <pointLight intensity={3} />
      <primitive
        object={scene}
        scale={isMobile ? 0.7 : 0.5}
        position={isMobile ? [0, -3, -2.2] : [0, 1, 0]}
        rotation={[-0.01, -0.2, -0.3]}
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
      camera={{ position: [27, 5, 5], fov: 20 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2.5}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </CanvasWithOrbitControls>
  );
};

export default ComputersCanvas;
