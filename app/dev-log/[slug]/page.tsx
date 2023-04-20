import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "@/components/getPostMetadata";
import { PageHeader } from "@/components/PageHeader";
import Link from "next/link";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

export const metadata = {
  title: "Developer Log",
  description: "",
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <div className="max-w-screen">
      <div className="mb-12">
        <PageHeader name={metadata.title} description={metadata.description} />
      </div>
      <div className="">
        <Link href={"/dev-log"} className="absolute ml-60">
          <img
            src="/icons/backarrow.svg"
            className="w-5 h-5 opacity-30 hover:opacity-80"
          />
        </Link>
        <div className="ml-60 px-10 h-full">
          <div className="mb-4">
            <h3 className="text-sm font-semibold leading-none uppercase text-stone-400">
              {post.data.subtitle}
            </h3>
            <h1 className="text-2xl font-bold text-stone-600">
              {post.data.title}
              <Balancer>{post.data.title}</Balancer>
            </h1>
            <div className="flex flex-row gap-4 text-sm text-stone-400">
              <p>Entry #{post.data.entry}</p>
              <p>{post.data.date}</p>
            </div>
          </div>

          <div className="border-2 border-stone-300 w-36 h-24"></div>
          <article className="flex prose prose-sm h-full">
            <Markdown>{post.content}</Markdown>
          </article>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
