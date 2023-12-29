import { OrbitControls } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import React, { useEffect, useState } from "react";

const Cube = () => {
    
    const [canvasSize, setCanvasSize] = useState({
      width: "16rem",
      height: "14rem",
    });
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
      setIsBrowser(true);

      const handleResize = () => {
        if (window.innerWidth <= 610) {
          setCanvasSize({ width: "24rem", height: "20rem" }); 
        } else {
          setCanvasSize({ width: "16rem", height: "14rem" });
        }
      };

      handleResize(); 

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
    
    if (!isBrowser) {
        return null; 
    }

    const texture_1 = useLoader(TextureLoader, "/images/cube/computer.jpg");
    const texture_2 = useLoader(TextureLoader, "/images/cube/dataEntry.jpg");
    const texture_3 = useLoader(TextureLoader, "/images/cube/marketing.jpg");
    const texture_4 = useLoader(TextureLoader,"/images/cube/online-marketing.jpg");
    const texture_5 = useLoader(TextureLoader, "/images/cube/virtual.jpg");
    const texture_6 = useLoader(TextureLoader, "/images/cube/web.jpg");

    return (
      <div className="inline-block 3xsm:absolute mt-10 3xsm:mt-0 right-0 3xsm:-right-14 5lg:right-0 bottom-0 3xsm:-bottom-24 1md:-bottom-28 w-auto h-auto">
        <Canvas style={canvasSize}>
          <OrbitControls enableZoom={false} autoRotate={true} />
          <ambientLight intensity={1} />
          <directionalLight position={[3, 2, 1]} />
          <mesh>
            <boxGeometry args={[3.2, 3.2, 3.2]} />
            <meshStandardMaterial map={texture_1} attach="material-0" />
            <meshStandardMaterial map={texture_2} attach="material-1" />
            <meshStandardMaterial map={texture_3} attach="material-2" />
            <meshStandardMaterial map={texture_4} attach="material-3" />
            <meshStandardMaterial map={texture_5} attach="material-4" />
            <meshStandardMaterial map={texture_6} attach="material-5" />
          </mesh>
        </Canvas>
      </div>
    );
};

export default Cube;
