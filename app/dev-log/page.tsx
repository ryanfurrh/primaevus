import { PageHeader } from "@/components/PageHeader";
import PostPreview from "@/components/PostPreview";
import getPostMetadata from "@/components/getPostMetadata";
import Link from "next/link";

export const metadata = {
  title: "Developer Log",
  description: "",
};

const DevLog = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div className="">
      <div>
        <PageHeader name={metadata.title} description={metadata.description} />
      </div>

      <div className="grid grid-cols-1 justify-items-center lg:justify-items-start lg:grid-cols-2 gap-4 px-4 md:px-0 md:max-w-3xl">
        {postPreviews}
      </div>
    </div>
  );
};

export default DevLog;
