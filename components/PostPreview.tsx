import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <div className="flex flex-row gap-2 items-center border-2 border-stone-300 bg-stone-100">
      <div className="flex flex-none border-r-2 border-stone-300 w-20 h-24"></div>
      <Link href={`/dev-log/${props.slug}`} className="pr-16">
        <h3 className="text-xs font-semibold leading-none uppercase text-stone-400">
          {props.subtitle}
        </h3>
        <h2 className="text-xl font-bold text-stone-600 hover:underline truncate text-ellipsis flex flex-wrap ">
          {props.title}
        </h2>
        <div className="flex flex-row gap-4 text-sm text-stone-400">
          <p>Entry #{props.entry}</p>
          <p>{props.date}</p>
        </div>
      </Link>
    </div>
  );
};

export default PostPreview;
