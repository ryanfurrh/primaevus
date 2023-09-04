import { ArtifactProvider } from "@/app/artifacts/ArtifactDatabase/ArtifactContext";
import { ArtifactSelector } from "@/app/artifacts/ArtifactDatabase/ArtifactSelector";
import { ViewPortal } from "@/app/artifacts/ArtifactDatabase/ViewPortal";
import { PageHeader } from "@/components/PageHeader";
import { ArtifactDatabaseIcon } from "@/public/icons";
import Image from "next/image";
import { ArtifactData } from "./ArtifactDatabase/ArtifactData";
import TensionMonitor from "./ArtifactDatabase/TensionMonitor";

export const metadata = {
  title: "Artifact Database",
  description: "",
};

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="">
        <PageHeader
          name={metadata.title}
          description={metadata.description}
          icon={<ArtifactDatabaseIcon className="w-6 h-6" />}
        />
      </div>

      <ArtifactProvider>
        <div className="flex flex-col max-w-screen-sm p-2 lg:max-w-screen-xl lg:flex-row lg:w-full place-content-center">
          <div className="flex w-full lg:w-2/4">
            <ViewPortal />
          </div>

          <div className="flex flex-col w-full lg:w-[300px] dark:border-pale-100/30 border-1">
            <ArtifactSelector />
            <ArtifactData />
            <div className="relative flex flex-col h-full">
              <div className="absolute z-10 flex w-full px-4 py-1 text-sm font-extrabold uppercase border-white border-1 text-pale-100 dark:bg-ink-800">
                <h1>Tension Monitor</h1>
              </div>
              <div className="w-auto h-full">
                <TensionMonitor />
              </div>
            </div>
          </div>
        </div>
      </ArtifactProvider>
      <div className="flex mt-12 border-1 border-sand-300 border-t-[10px] h-auto py-4 justify-center">
        <Image
          src="/gifs/cube.gif"
          alt={""}
          width={150}
          height={150}
          className="image-pixelated dark:invert"
        />
      </div>
    </div>
  );
}
