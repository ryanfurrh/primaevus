"use client";

import { PageHeader } from "@/components/PageHeader";
import { CloseIcon, PrimaeLogo, PrimaeLogoMinimal } from "@/public/icons";
import Image from "next/image";
import { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// export const metadata = {
//   title: "Primævus",
//   description: "",
// };

export default function HomePage() {
  const Model = () => {
    const gltf = useLoader(GLTFLoader, "/models/computer1/scene.gltf");
    return (
      <>
        <primitive object={gltf.scene} scale={0.18} />
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
        <div className="flex justify-center w-full mx-auto mb-[-48px] md:mb-[-72px]">
          <div className="z-10 flex flex-col w-full max-w-[300px] md:max-w-sm center bg-sand-200 border-sand-400">
            <div className="flex max-w-lg justify-items-end place-content-start bg-sand-400">
              <CloseIcon className=" fill-sand-700 bg-sand-200 hover:fill-sand-900 hover:bg-sand-50 hover:cursor-pointer" />
            </div>

            <div className="z-10 flex justify-center h-auto gap-4 py-4 px-4 md:py-8 border-x-[1px] border-b-[1px] md:gap-9 border-sand-400 max-w-lg">
              <Image
                src="/gifs/construction-1.gif"
                alt={""}
                width={48}
                height={48}
                className="shrink-0"
              />
              <h1 className="text-teal-600 text-sm font-semibold tracking-[.3rem] text-center">
                UNDER
                <br />
                CONSTRUCTION
              </h1>
              <Image
                src="/gifs/construction-1.gif"
                alt={""}
                width={48}
                height={48}
                className="shrink-0"
              />
            </div>
          </div>
        </div>
        <div className="relative flex w-full h-auto">
          <Image
            src="/gifs/dot-grid-movement.gif"
            alt={""}
            width={500}
            height={500}
            className="absolute flex z-[-1] w-full right-[-4]"
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
