"use client";

import { useArtifact } from "./ArtifactContext";
import { ArtifactIndex } from "./ArtifactIndex";

export function ArtifactData() {
  const { selectedArtifact } = useArtifact();
  const selectedArtifactData = ArtifactIndex.find(
    (artifact) => artifact.name === selectedArtifact
  );
  return (
    <div
      className={`${
        selectedArtifact === "Welcome"
          ? "hidden"
          : "flex flex-col gap-4 px-4 py-8"
      } `}
    >
      <h1 className="font-black text-neptune-400/70 text-[28px] leading-none uppercase font-archivo  pb-2">
        {selectedArtifactData?.name}
      </h1>
      <div className="flex flex-col gap-2">
        <h3 className="px-1 py-1 text-xs font-semibold tracking-wider bg-neptune-800/50 text-neptune-400">
          Disclosure Date:
        </h3>
        <p className="text-xs">{selectedArtifactData?.date}</p>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="px-1 py-1 text-xs font-semibold tracking-wider bg-neptune-800/50 text-neptune-400">
          Usage:
        </h3>
        <div className="flex flex-shrink overflow-hidden overflow-y-scroll max-h-36 text-ellipsis">
          <p className="flex-grow text-xs">{selectedArtifactData?.use}</p>
        </div>
      </div>
    </div>
  );
}
