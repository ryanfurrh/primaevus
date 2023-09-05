"use client";

import { useArtifact } from "./ArtifactContext";
import { ArtifactIndex } from "./ArtifactIndex";
import { ArtifactSelector } from "./ArtifactSelector";

export default function WindowHeader() {
  const { selectedArtifact } = useArtifact();
  const selectedArtifactData = ArtifactIndex.find(
    (artifact) => artifact.name === selectedArtifact
  );
  return (
    <div className="flex items-center justify-between flex-auto w-full h-10 gap-2 pr-2 border md:pr-4 bg-pale-100/20 border-pale-100">
      <div className="px-3 md:px-4 py-3 border-r border-pale-100 justify-start items-start gap-2.5 flex w-auto">
        <div className="text-sm font-bold leading-3 text-pale-100">
          {selectedArtifact}
        </div>
      </div>
      <div className="flex flex-col items-start justify-start flex-auto gap-1">
        <div className="self-stretch h-px bg-zinc-400" />
        <div className="self-stretch h-px bg-zinc-400" />
        <div className="self-stretch h-px bg-zinc-400" />
      </div>
      <div className="flex items-center justify-start w-auto">
        <ArtifactSelector />
      </div>
    </div>
  );
}
