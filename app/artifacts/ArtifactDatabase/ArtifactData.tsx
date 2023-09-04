"use client";

import { useArtifact } from "./ArtifactContext";
import { ArtifactIndex } from "./ArtifactIndex";

export function ArtifactData() {
  const { selectedArtifact } = useArtifact();
  const selectedArtifactData = ArtifactIndex.find(
    (artifact) => artifact.name === selectedArtifact
  );
  return (
    <div className="w-full px-4 py-4">
      <ul className="flex flex-col gap-4">
        <li>
          <span className="text-base font-semibold uppercase opacity-40">
            Name:
          </span>{" "}
          {selectedArtifactData?.name}
        </li>
        <li>
          <span className="text-base font-semibold uppercase opacity-40">
            Date of Disclosure:{" "}
          </span>{" "}
          {selectedArtifactData?.date}
        </li>
        <p>
          <span className="text-base font-semibold uppercase opacity-40">
            Usage:{" "}
          </span>{" "}
          {selectedArtifactData?.use}
        </p>
      </ul>
    </div>
  );
}
