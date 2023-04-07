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
      <div className="ml-52 px-12 ">
        <h1 className="font-mono">hello world.</h1>
        <div
          style={{
            backgroundImage: `url(/gifs/dot-grid-movement.gif)`,
            height: "500px",
            width: "500px",
            backgroundBlendMode: "saturation",
          }}
          className=" bg-cover bg-no-repeat bg-teal-600"
        >
          <div className="flex flex-row w-full justify-between p-4">
            <Image
              src="/gifs/construction-1.gif"
              alt={""}
              width={48}
              height={48}
            />
            <h1 className="text-teal-300 font-semibold tracking-[.5rem] text-center">
              UNDER
              <br />
              CONSTRUCTION
            </h1>
            <Image
              src="/gifs/construction-1.gif"
              alt={""}
              width={48}
              height={48}
            />
          </div>
          <div className="w-full flex justify-center pt-24">
            <div
              style={{
                backgroundImage: `url(/gifs/computer-2.gif)`,
                height: "180px",
                width: "240px",
                backgroundBlendMode: "color-dodge",
              }}
              className=" bg-contain bg-no-repeat bg-cyan-900 opacity-80"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
