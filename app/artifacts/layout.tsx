"use client";

import {
  ArtifactProvider,
  useArtifact,
} from "@/app/artifacts/components/ArtifactContext";
import { ViewPortal } from "@/app/artifacts/components/ViewPortal";
import { PageHeader } from "@/app/components/PageHeader";
import { ArtifactDatabaseIcon } from "@/public/icons";
import WindowHeader from "@/app/artifacts/components/WindowHeader";
import { ArtifactIndex } from "./components/ArtifactIndex";

export default function Layout({ children }: { children: React.ReactNode }) {
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
      <div className="relative w-full md:w-3/4 h-auto md:h-[calc(100vh-186px)] max-h-[900px] flex flex-col">
        <ArtifactProvider>
          <WindowHeader />
          <div className="flex flex-col-reverse w-full h-full border-t-0 md:flex-row-reverse border-1 scrollbar dark:border-pale-100">
            <ViewPortal />
          </div>
        </ArtifactProvider>
      </div>
    </div>
  );
}
