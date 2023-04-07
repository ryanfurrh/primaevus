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
      <div className="ml-52 px-12">
        <h1>coming soon</h1>
        <Image src="/gifs/cube.gif" alt={""} width={225} height={225} />
      </div>
    </div>
  );
}
