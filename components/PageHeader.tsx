import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import localFont from "next/font/local";
import { WorldIcon } from "@/public/icons";

export function PageHeader(props: {
  name: string;
  description: string;
  icon: any;
}) {
  return (
    <div className="flex justify-center flex-auto px-4 pt-6 pb-0 mb-6 text-center md:px-12">
      <div className="flex flex-col gap-1 py-4 rounded border-1 place-items-center dark:bg-ink-800/20 bg-sand-400/20 dark:border-bone-50 border-sand-600 text-sand-600 dark:text-bone-50 ">
        {props.icon}
        <h1 className="px-12 text-2xl font-bold tracking-wider leading-[1.5rem] font-stretch md:px-16 font-archivo">
          {props.name}
        </h1>
      </div>

      <p className="text-sand-500/70">{props.description}</p>
    </div>
  );
}
