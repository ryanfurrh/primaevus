import PostPreview from "@/components/PostPreview";
import getPostMetadata from "@/components/getPostMetadata";
import Link from "next/link";

const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return <div>{postPreviews}</div>;
};

export default HomePage;
