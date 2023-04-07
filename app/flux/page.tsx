import { PageHeader } from "@/components/PageHeader";

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
      <div className="ml-52 px-12">
        <h1>coming soon</h1>
      </div>
    </div>
  );
}
