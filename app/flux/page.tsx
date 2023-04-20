import { PageHeader } from "@/components/PageHeader";
import Image from "next/image";

export const metadata = {
  title: "Flux",
  description: "",
};

export default function Page() {
  return (
    <div className="">
      <div className="">
        <PageHeader name={metadata.title} description={metadata.description} />
      </div>
      <div className="md:px-12 flex flex-col items-center">
        <div className="w-2/3 items-center">
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
            src="/images/flux-illustration-1.svg"
            alt={""}
            width={175}
            height={250}
            className="mx-auto mt-12 border-2 border-stone-300 border-t-[10px] p-2 "
          />
        </div>
      </div>
    </div>
  );
}
