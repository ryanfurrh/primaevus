import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "@/components/getPostMetadata";
import { PageHeader } from "@/components/PageHeader";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { DeveloperLogIcon } from "@/public/icons";

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
      <div className="mb-8 md:mb-12">
        <PageHeader
          name={metadata.title}
          description={metadata.description}
          icon={<DeveloperLogIcon className="w-6 h-6" />}
        />
      </div>
      <div className="flex flex-col md:flex-row ">
        <Link href={"/dev-log"} className="px-2 md:px-6">
          <img
            src="/icons/backarrow.svg"
            className="w-5 h-5 opacity-30 hover:opacity-80"
          />
        </Link>
        <div className="h-full px-4 pt-4  md:p-0">
          <div className="mb-4">
            <h3 className="text-sm font-semibold leading-none uppercase text-sand-400">
              {post.data.subtitle}
            </h3>
            <h1 className="text-4xl font-bold leading-none md:text-2xl text-sand-600">
              <Balancer>{post.data.title}</Balancer>
            </h1>
            <div className="flex flex-row gap-4 text-sm text-sand-400">
              <p>Entry #{post.data.entry}</p>
              <p>{post.data.date}</p>
            </div>
          </div>

          <div className="h-24 border-2 border-sand-300 w-36"></div>
          <article className="flex h-full prose-sm prose text-sand-900">
            <Markdown>{post.content}</Markdown>
          </article>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
