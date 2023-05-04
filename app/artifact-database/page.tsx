import { PageHeader } from "@/components/PageHeader";
import { ArtifactDatabaseIcon } from "@/public/icons";
import Image from "next/image";

export const metadata = {
  title: "Artifact Database",
  description: "",
};

export default function Page() {
  return (
    <div className="">
      <div className="">
        <PageHeader
          name={metadata.title}
          description={metadata.description}
          icon={<ArtifactDatabaseIcon className="w-6 h-6" />}
        />
      </div>
      <div className="flex justify-center flex-1 md:px-12">
        <div className="flex flex-col place-content-center">
          <div className="flex justify-center h-auto gap-9 md:gap-16 place-content-center">
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
          <div className=" w-[300px] mt-12 border-2 border-sand-300 border-t-[10px] place-items-center">
            <Image
              src="/gifs/cube.gif"
              alt={""}
              width={200}
              height={200}
              className="self-center h-full image-pixelated"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
