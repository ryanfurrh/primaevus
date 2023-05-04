import Link from "next/link";
import { PostMetadata } from "./PostMetadata";
import { NoImage } from "@/public/icons";

const PostPreview = (props: PostMetadata) => {
  return (
    <div className="flex flex-none items-center w-full gap-4 border-[1px] border-sand-600 bg-sand-100">
      <div className="flex flex-none w-20 h-24 border-r-[1px] border-sand-400 place-content-center text-sand-700 bg-sand-300">
        <NoImage className="self-center" />
      </div>
      <Link href={`/dev-log/${props.slug}`} className="pr-2 md:pr-2">
        <h3 className="text-xs font-semibold leading-none uppercase text-sand-500">
          {props.subtitle}
        </h3>
        <h2 className="text-lg font-bold leading-none md:text-xl text-sand-600 hover:underline">
          {props.title}
        </h2>
        <div className="flex flex-row gap-4 text-xs md:text-sm text-sand-500">
          <p>Entry #{props.entry}</p>
          <p>{props.date}</p>
        </div>
      </Link>
    </div>
  );
};

export default PostPreview;
