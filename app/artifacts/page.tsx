import { PageHeader } from "@/components/PageHeader";
import { ArtifactDatabaseIcon } from "@/public/icons";
import Image from "next/image";

export const metadata = {
  title: "Artifact Database",
  description: "",
};

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center w-full px-4">
      <div className="">
        <PageHeader
          name={metadata.title}
          description={metadata.description}
          icon={<ArtifactDatabaseIcon className="w-6 h-6" />}
        />
      </div>
      <div className="flex justify-center flex-1 md:px-12">
        <div className="flex flex-col place-content-center">
          <div className="flex items-center justify-center w-full h-auto gap-9 md:gap-16">
            <Image
              src="/gifs/construction-1.gif"
              alt={""}
              width={48}
              height={48}
            />
            <Image
              src="/gifs/construction-2.gif"
              alt={""}
              width={100}
              height={50}
            />
            <Image
              src="/gifs/construction-1.gif"
              alt={""}
              width={48}
              height={48}
            />
          </div>
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
      </div>
    </div>
  );
}
