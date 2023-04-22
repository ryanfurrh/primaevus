import { PageHeader } from "@/components/PageHeader";
import Image from "next/image";

export const metadata = {
  title: "Artifact Database",
  description: "",
};

export default function Page() {
  return (
    <div className="">
      <div className="">
        <PageHeader name={metadata.title} description={metadata.description} />
      </div>
      <div className="md:px-12 flex flex-1 justify-center">
        <div className="flex flex-col">
          <div className="flex h-auto gap-9 md:gap-16">
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
          <div className="max-w-lg mt-12 border-2 border-stone-300 border-t-[10px]">
            <Image
              src="/gifs/cube.gif"
              alt={""}
              width={225}
              height={225}
              className="image-pixelated w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
