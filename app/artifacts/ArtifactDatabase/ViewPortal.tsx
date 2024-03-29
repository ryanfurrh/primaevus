"use client";

import { blue, green, lightGreen } from "@mui/material/colors";
import {
  AsciiRenderer,
  Bounds,
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
import { Mesh } from "three";
import { GLTFLoader } from "three-stdlib/loaders/GLTFLoader";
import { useArtifact } from "./ArtifactContext";
import { ArtifactIndex } from "./ArtifactIndex";

export function ViewPortal() {
  const { selectedArtifact } = useArtifact();
  const selectedArtifactData = ArtifactIndex.find(
    (artifact) => artifact.name === selectedArtifact
  );
  const Model = () => {
    const gltf = useLoader(GLTFLoader, `/${selectedArtifactData?.file}`);
    const meshRef = useRef<Mesh>(null);
    useFrame(() => {
      if (!meshRef.current) {
        return;
      }
    });

    return (
      <>
        <Bounds
          fit
          margin={selectedArtifactData?.margin || 1.4}
          clip
          damping={8}
        >
          <mesh
            scale={selectedArtifactData?.scale}
            ref={meshRef}
            receiveShadow
            castShadow
          >
            <primitive
              object={gltf.scene}
              position={selectedArtifactData?.position || [0, 0.4, 0]}
              rotation={selectedArtifactData?.rotation}
            />
            <meshStandardMaterial />
          </mesh>
        </Bounds>
      </>
    );
  };

  return (
    <div className="absolute flex w-full h-full font-jet">
      <Canvas
        shadows
        orthographic
        camera={{
          position: [15, 15, 20],
          zoom: 140,
          left: -2,
          right: -2,
          top: 2,
          bottom: 2,
          near: 1,
        }}
        gl={{ logarithmicDepthBuffer: true, antialias: false }}
        dpr={0.45}
      >
        <ambientLight intensity={0.5} />
        <directionalLight color="cyan" position={[0, 20, 3]} intensity={5} />
        <pointLight position={[10, 10, 15]} intensity={1} />
        <Suspense fallback={<Loader />}>
          <Model />
        </Suspense>
        <Grid
          infiniteGrid
          fadeDistance={80}
          fadeStrength={5}
          sectionColor={0x66cdaa}
          sectionThickness={1.5}
          cellColor={0x66cdaa}
        />
        <OrbitControls
          target={[0.3, 2, 0]}
          autoRotate
          autoRotateSpeed={0.4}
          enableZoom={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2.1}
          makeDefault
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
