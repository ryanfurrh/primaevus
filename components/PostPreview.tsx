import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <div className="border-2 border-stone-200 p-4">
      <Link href={`/posts/${props.slug}`}>
        <h3 className="text-xs font-semibold leading-none uppercase text-stone-400">
          {props.subtitle}
        </h3>
        <h2 className="text-xl font-bold text-stone-600 hover:underline">
          {props.title}
        </h2>
      </Link>
      <div className="flex flex-row gap-4 text-sm text-stone-400">
        <p>Entry #{props.entry}</p>
        <p>{props.date}</p>
      </div>
    </div>
  );
};

export default PostPreview;
