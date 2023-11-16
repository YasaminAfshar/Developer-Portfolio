import { OrbitControls } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import React, { useEffect, useState } from "react";

const Cube = () => {
    
    const [isBrowser, setIsBrowser] = useState(false);
    
    
    useEffect(() => {
        setIsBrowser(true);
    }, []);
    
    if (!isBrowser) {
        return null; 
    }

    const texture_1 = useLoader(TextureLoader, "/images/cube/computer.jpg");
    const texture_2 = useLoader(TextureLoader, "/images/cube/dataEntry.jpg");
    const texture_3 = useLoader(TextureLoader, "/images/cube/marketing.jpg");
    const texture_4 = useLoader(
        TextureLoader,
        "/images/cube/online-marketing.jpg"
    );
    const texture_5 = useLoader(TextureLoader, "/images/cube/virtual.jpg");
    const texture_6 = useLoader(TextureLoader, "/images/cube/web.jpg");

    return (
        <div className="absolute inline-block right-8 bottom-8 w-1/5 h-1/3">
        <Canvas>
            <OrbitControls enableZoom={false} autoRotate={true}/>
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <mesh>
                <boxGeometry args={[3.4, 3.4, 3.4]} />
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
