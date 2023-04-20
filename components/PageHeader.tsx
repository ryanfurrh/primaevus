import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { NavIndex, type Item } from "@/app/Nav-Index";

export function PageHeader(props: { name: string; description: string }) {
  return (
    <div className="flex flex-auto px-4 md:px-12 pt-4 pb-0 mb-6 text-center justify-center">
      <h1 className="text-2xl font-bold text-stone-50 bg-stone-500 px-12 md:px-16">
        {props.name}
      </h1>
      <p className="text-stone-500/70">{props.description}</p>
    </div>
  );
}
