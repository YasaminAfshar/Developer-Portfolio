import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";


const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

   React.useEffect(() => {
     return () => {
       decal.dispose();
     };
   }, [decal]);

  return (
    <Float speed={1.75} rotationIntensity={1.2} floatIntensity={1.5}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[1, 1, 1.5]} />
      <mesh castShadow receiveShadow scale={2.86}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#EBE7E1"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1.3}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
    const imageUrl = icon?.url || "";
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      style={{width: "9rem", height: "9rem"}}
    >
      <Suspense>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={imageUrl} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
