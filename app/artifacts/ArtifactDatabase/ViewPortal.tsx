"use client";

import { blue, cyan, green, lightGreen } from "@mui/material/colors";
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
  RandomizedLight,
  SpotLight,
  Stage,
  TorusKnot,
  useProgress,
} from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Suspense, useEffect, useMemo, useRef } from "react";
import { Color, Mesh, Object3D } from "three";
import { GLTFLoader } from "three-stdlib/loaders/GLTFLoader";
import { useArtifact } from "./ArtifactContext";
import { ArtifactIndex } from "./ArtifactIndex";
import { BloomFilter } from "next/dist/shared/lib/bloom-filter";
import {
  EffectComposer,
  Pixelation,
  Outline,
  Selection,
  Select,
} from "@react-three/postprocessing";

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
          observe
          margin={selectedArtifactData?.margin || 1.4}
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
        shadows={"percentage"}
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
        <ambientLight intensity={2} color="cyan" />
        <directionalLight color="cyan" position={[0, 20, 3]} intensity={5} />
        <pointLight position={[10, 10, 15]} intensity={1} />
        <Environment preset="night" />

        <Suspense fallback={<Loader />}>
          <Selection>
            <EffectComposer autoClear={false}>
              <Outline
                edgeStrength={21}
                visibleEdgeColor={0x66cdaa}
                hiddenEdgeColor={0x66cdaa}
                width={5000}
              />
            </EffectComposer>
            <Select enabled>
              <Model />
            </Select>
          </Selection>
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
