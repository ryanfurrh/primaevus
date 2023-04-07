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
    <div className="max-w-screen">
      <div>
        <PageHeader name={metadata.title} description={metadata.description} />
      </div>

      <div className="ml-52 grid grid-cols-1 md:grid-cols-2 gap-4 px-12">
        {postPreviews}
      </div>
    </div>
  );
};

export default DevLog;
