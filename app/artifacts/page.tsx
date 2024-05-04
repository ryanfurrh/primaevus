"use client";
import { ArtifactProvider, useArtifact } from "./components/ArtifactContext";
import { ArtifactData } from "./components/ArtifactData";
import { ArtifactIndex } from "./components/ArtifactIndex";
import TensionMonitor from "./components/TensionMonitor";
import { ViewPortal } from "./components/ViewPortal";
import WindowHeader from "./components/WindowHeader";

export default function Page() {
  const { selectedArtifact } = useArtifact();
  const selectedArtifactData = ArtifactIndex.find(
    (artifact) => artifact.name === selectedArtifact
  );
  return (
    <div className="relative w-full md:w-3/4 h-auto md:h-[calc(100vh-186px)] max-h-[900px] flex flex-col">
      <ArtifactProvider>
        <ViewPortal />
      </ArtifactProvider>
    </div>
  );
}
