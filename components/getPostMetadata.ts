import { PostMetadata } from "./PostMetadata";
import fs from "fs";
import Link from "next/link";
import matter from "gray-matter";

const getPostMetadata = (): PostMetadata[] => {
    const folder = "posts/";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));
  
    const posts = markdownPosts.map((fileName) => {
      const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
      const matterResult = matter(fileContents);
      return {
        title: matterResult.data.title,
        date: matterResult.data.date,
        subtitle: matterResult.data.subtitle,
        entry: matterResult.data.entry,
        slug: fileName.replace(".md", ""),
      };
    });
  
    return posts;
  };

  export default getPostMetadata;