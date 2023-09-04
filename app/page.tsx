"use client";

import { PageHeader } from "@/components/PageHeader";
import { CloseIcon, PrimaeLogo, PrimaeLogoMinimal } from "@/public/icons";
import Image from "next/image";
import { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Environment, Grid, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// export const metadata = {
//   title: "Primævus",
//   description: "",
// };

export default function HomePage() {
  const Model = () => {
    const gltf = useLoader(GLTFLoader, "/models/computer1/computer1.gltf");
    return (
      <>
        <primitive
          object={gltf.scene}
          position={[0, -0.5, 0]}
          rotation={[0, 0, 0]}
          scale={1.1}
        />
      </>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center w-full px-4">
      <div className="">
        <PageHeader
          name="Primæ"
          description=""
          icon={<PrimaeLogoMinimal className="w-7 h-7" />}
        />
      </div>
      <div className="flex flex-col items-center w-full max-w-lg">
        <h1 className="mb-4 text-center font-jet">hello world.</h1>

        <div className="relative flex w-full h-auto">
          <Image
            src="/gifs/dot-grid-movement.gif"
            alt={""}
            width={500}
            height={500}
            className="absolute flex -z-10 w-full right-[0]"
          />
        </div>

        <div className="flex w-full mb-12 h-[300px] md:h-[500px] hover:cursor-grab active:cursor-grabbing">
          <Canvas
            shadows
            dpr={[1, 2]}
            camera={{ position: [0, 2, 3], fov: 10 }}
            className="flex self-center h-auto w-12 overflow-clip place-items-center border-1 border-sand-300 border-t-[10px]"
          >
            <ambientLight intensity={0.5} />
            <spotLight
              intensity={0.8}
              angle={0.1}
              penumbra={1}
              position={[-10, 15, 4]}
              castShadow
            />
            <Suspense fallback={null}>
              <Model />
            </Suspense>
            <OrbitControls
              autoRotate
              enableZoom={false}
              enablePan={false}
              target={[-0.23, 0.2, 0.075]}
            />
          </Canvas>
        </div>
      </div>
    </div>
  );
}
