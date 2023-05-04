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
    <div className="flex justify-center flex-auto px-4 pt-4 pb-0 mb-6 text-center md:px-12 ">
      <div className="flex flex-col gap-1 py-2 border-2 place-items-center bg-stone-500/90 border-sand-700 text-sand-50 ">
        {props.icon}
        <h1 className="px-12 text-2xl font-bold tracking-wider leading-[1.5rem] uppercase font-stretch text-sand-50 md:px-16 font-archivo">
          {props.name}
        </h1>
      </div>

      <p className="text-sand-500/70">{props.description}</p>
    </div>
  );
}
