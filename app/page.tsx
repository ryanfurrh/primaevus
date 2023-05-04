import { PageHeader } from "@/components/PageHeader";
import Image from "next/image";

export const metadata = {
  title: "Prīmaevus",
  description: "",
};

export default function HomePage() {
  return (
    <div className="">
      <div className="">
        <PageHeader name={metadata.title} description={metadata.description} />
      </div>
      <div className="flex flex-1 overflow-clip justify-center">
        <div className="flex flex-col">
          <h1 className="font-ibm text-center mb-12">hello world.</h1>

          <div
            style={{
              backgroundImage: `url(/gifs/dot-grid-movement.gif)`,
              height: "500px",
              width: "500px",
              backgroundBlendMode: "saturation",
            }}
            className="bg-contain shrink bg-no-repeat bg-teal-600 max-w-xl flex flex-col w-full"
          >
            <div className="flex w-full h-auto justify-center mt-9 gap-4 md:gap-16">
              <Image
                src="/gifs/construction-1.gif"
                alt={""}
                width={48}
                height={48}
                className="shrink-0"
              />
              <h1 className="text-teal-300 text-sm font-semibold tracking-[.3rem] text-center">
                UNDER
                <br />
                CONSTRUCTION
              </h1>
              <Image
                src="/gifs/construction-1.gif"
                alt={""}
                width={48}
                height={48}
                className="shrink-0"
              />
            </div>
            <div className="flex h-auto justify-center mt-24">
              <div
                style={{
                  backgroundImage: `url(/gifs/computer-2.gif)`,
                  height: "180px",
                  width: "240px",
                  backgroundBlendMode: "color-dodge",
                }}
                className="bg-cover bg-no-repeat bg-cyan-900 opacity-70 md:w-full"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
