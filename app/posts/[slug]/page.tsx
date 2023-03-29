import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "@/components/getPostMetadata";

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

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <div>
      <div className="mb-4">
        <h3 className="text-sm font-semibold leading-none uppercase text-stone-400">
          {post.data.subtitle}
        </h3>
        <h1 className="text-2xl font-bold text-stone-600">{post.data.title}</h1>
        <div className="flex flex-row gap-4 text-sm text-stone-400">
          <p>Entry #{post.data.entry}</p>
          <p>{post.data.date}</p>
        </div>
      </div>

      <div className="border-2 border-stone-300 w-24 h-28"></div>
      <article className="prose lg:prose-xl">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
};

export default PostPage;
