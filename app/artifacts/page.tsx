"use client";

import {
  ArtifactProvider,
  useArtifact,
} from "@/app/artifacts/ArtifactDatabase/ArtifactContext";
import { ArtifactSelector } from "@/app/artifacts/ArtifactDatabase/ArtifactSelector";
import { ViewPortal } from "@/app/artifacts/ArtifactDatabase/ViewPortal";
import { PageHeader } from "@/components/PageHeader";
import { ArtifactDatabaseIcon } from "@/public/icons";
import Image from "next/image";
import { ArtifactData } from "./ArtifactDatabase/ArtifactData";
import TensionMonitor from "./ArtifactDatabase/TensionMonitor";
import WindowHeader from "@/app/artifacts/ArtifactDatabase/WindowHeader";
import { ArtifactIndex } from "./ArtifactDatabase/ArtifactIndex";

export default function Page() {
  const { selectedArtifact } = useArtifact();
  const selectedArtifactData = ArtifactIndex.find(
    (artifact) => artifact.name === selectedArtifact
  );
  return (
    <div className="flex flex-col items-center justify-center w-full pb-20">
      <div className="">
        <PageHeader
          name="Artifact Database"
          description=""
          icon={<ArtifactDatabaseIcon className="w-6 h-6" />}
        />
      </div>

      <ArtifactProvider>
        <div className="relative w-full md:w-3/4 h-auto md:h-[calc(100vh-186px)] max-h-[900px] flex flex-col">
          <WindowHeader />

          <div className="relative flex flex-col-reverse w-full h-full border-t-0 md:flex-row-reverse md:grid-cols-3 border-1 scrollbar dark:border-pale-100">
            {/* <div className="flex flex-col w-full md:max-w-[250px] h-auto">
              <div className="flex w-full h-full overflow-y-scroll bg-neptune-900/80 border-pale-100 border-b-1">
                <ArtifactData />{" "}
              </div>
              <div className="relative flex flex-shrink-0 w-full h-48">
                <TensionMonitor />
              </div>
            </div> */}
            <div className="relative flex w-full h-[calc(60vh)] md:h-full border-b-1 md:border-b-0 border-pale-100 md:border-r-1">
              <ViewPortal />
            </div>
          </div>
        </div>
      </ArtifactProvider>
    </div>
  );
}
