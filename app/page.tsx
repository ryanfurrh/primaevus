import { PageHeader } from "@/components/PageHeader";
import { PrimaeLogo } from "@/public/icons";
import Image from "next/image";

export const metadata = {
  title: "Primævus",
  description: "",
};

export default function HomePage() {
  return (
    <div className="">
      <div className="">
        <PageHeader
          name={metadata.title}
          description={metadata.description}
          icon={<PrimaeLogo className="w-9 h-9" />}
        />
      </div>
      <div className="flex justify-center flex-1 overflow-clip">
        <div className="flex flex-col">
          <h1 className="mb-12 text-center font-ibm">hello world.</h1>

          <div
            style={{
              backgroundImage: `url(/gifs/dot-grid-movement.gif)`,
              height: "500px",
              width: "500px",
              backgroundBlendMode: "saturation",
            }}
            className="flex flex-col w-full max-w-xl bg-teal-600 bg-no-repeat bg-contain shrink"
          >
            <div className="flex justify-center w-full h-auto gap-4 mt-9 md:gap-16">
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
            <div className="flex justify-center h-auto mt-24">
              <div
                style={{
                  backgroundImage: `url(/gifs/computer-2.gif)`,
                  height: "180px",
                  width: "240px",
                  backgroundBlendMode: "color-dodge",
                }}
                className="bg-no-repeat bg-cover bg-cyan-900 opacity-70 md:w-full"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
