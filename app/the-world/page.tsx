import { PageHeader } from "@/components/PageHeader";

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
      </div>
    </div>
  );
}
