"use client";
import { ArrowY } from "@/public/icons";
import { useEffect, useState } from "react";
import { ArrowSelect } from "@/public/icons";
import { ArtifactIndex } from "./ArtifactIndex";
import { useArtifact } from "./ArtifactContext";

export function ArtifactSelector() {
  const { selectedArtifact, setSelectedArtifact } = useArtifact();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="relative w-full h-auto px-2 py-2 ">
      <div
        onClick={handleOpen}
        className="flex flex-row w-full px-2 place-items-center dark:border-pale-100 border-1 hover:cursor-pointer"
      >
        <h1 className="justify-between w-full text-left">{selectedArtifact}</h1>
        <ArrowY />
      </div>
      <div className="relative w-full">
        <div
          className={`absolute z-10 flex w-full px-2 py-2 place-items-center border-pale-100 border-1 bg-ink-800 ${
            open
              ? "opacity-100 transition-all duration-200 h-auto overflow-hidden"
              : "opacity-0 transition-all duration-200 overflow-hidden"
          }`}
        >
          <div className="flex flex-col w-full gap-1 text-bone-50/80">
            {ArtifactIndex.map((artifact) => (
              <div
                key={artifact.name}
                onClick={() => {
                  setSelectedArtifact(artifact.name);
                  setOpen(false);
                }}
                className={`flex flex-row items-center w-full gap-1 dark:hover:bg-neptune-700 dark:hover:text-bone-50 cursor-pointer ${
                  selectedArtifact === artifact.name ? "bg-neptune-700" : "pl-2"
                }`}
              >
                <ArrowSelect
                  className={`${
                    selectedArtifact === artifact.name ? "block" : "hidden"
                  }`}
                />
                <span>{artifact.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
