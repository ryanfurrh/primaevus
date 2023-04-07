import { PageHeader } from "@/components/PageHeader";
import Image from "next/image";

export const metadata = {
  title: "The World",
  description: "",
};

export default function Page() {
  return (
    <div className="">
      <div className="">
        <PageHeader name={metadata.title} description={metadata.description} />
      </div>
      <div className="ml-52 px-12">
        <h1>[world under construction]</h1>
        <div className="w-1/4">
          <div className="flex flex-row w-full justify-between p-4">
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
        </div>
      </div>
    </div>
  );
}
