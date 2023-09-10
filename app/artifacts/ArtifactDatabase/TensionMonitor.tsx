"use client";

import { blue, green, lightGreen } from "@mui/material/colors";
import {
  AsciiRenderer,
  CameraControls,
  Environment,
  Grid,
  Html,
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
  Stage,
  TorusKnot,
  useProgress,
} from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Suspense, useEffect, useMemo, useRef } from "react";
import {
  LineBasicMaterial,
  LineSegments,
  Mesh,
  WireframeGeometry,
} from "three";
import { GLTFLoader } from "three-stdlib/loaders/GLTFLoader";
import { useArtifact } from "./ArtifactContext";
import { ArtifactIndex } from "./ArtifactIndex";

export default function TensionMonitor() {
  const Model = () => {
    const gltf = useLoader(GLTFLoader, "/models/wave-form-1/scene.gltf");
    return (
      <>
        <mesh scale={1} receiveShadow castShadow>
          <primitive
            object={gltf.scene}
            position={[0, -0.7, 0]}
            rotation={[0, 0, 0]}
          />
          <meshStandardMaterial wireframe color="white" />
        </mesh>
      </>
    );
  };

  return (
    <div className="absolute flex w-full h-full font-jet">
      <h3 className="absolute w-[calc(100%-32px)] px-1 py-1 text-sm font-semibold tracking-wider top-4 left-4 bg-neptune-800/50 text-neptune-400">
        Tension Monitor
      </h3>
      <Canvas
        shadows
        orthographic
        camera={{
          position: [12, 0, 12],
          zoom: 130,
          left: -2,
          right: 2,
          top: 2,
          bottom: 2,
          near: 1,
        }}
        gl={{ antialias: false }}
        dpr={0.3}
      >
        <ambientLight intensity={0.1} />
        <directionalLight color="blue" position={[0, 1, 3]} intensity={-500} />
        <pointLight position={[10, 2, 15]} intensity={1} />
        <Suspense fallback={<Loader />}>
          <Model />
        </Suspense>
        <OrbitControls
          target={[0, 0, 0]}
          enableZoom={false}
          autoRotate
          autoRotateSpeed={5}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
        <fog />
      </Canvas>
    </div>
  );
}

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded...</Html>;
}
