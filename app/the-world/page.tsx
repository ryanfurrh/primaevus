import { PageHeader } from "@/components/PageHeader";
import Image from "next/image";

export const metadata = {
  title: "World",
  description: "",
};

export default function Page() {
  return (
    <div className="">
      <div className="">
        <PageHeader name={metadata.title} description={metadata.description} />
      </div>

      <div className="md:px-12 flex flex-1 justify-center ">
        <div className="flex flex-col">
          <div className="flex h-auto justify-center gap-9 md:gap-16">
            <Image
              src="/gifs/construction-1.gif"
              alt={""}
              width={48}
              height={48}
              className="shrink-0"
            />
            <Image
              src="/gifs/construction-2.gif"
              alt={""}
              width={100}
              height={50}
              className="shrink-0"
            />
            <Image
              src="/gifs/construction-1.gif"
              alt={""}
              width={48}
              height={48}
              className="shrink-0"
            />
          </div>
          <Image
            src={"/images/scavenger.jpg"}
            alt={""}
            width={612}
            height={796}
            className="image-rendering-pixelated bg-cover border-2 border-stone-300 border-t-[10px] p-4 max-w-xs "
          />
        </div>
      </div>
    </div>
  );
}
