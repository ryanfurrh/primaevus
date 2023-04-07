import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { NavIndex, type Item } from "@/app/Nav-Index";

export function PageHeader(props: { name: string; description: string }) {
  return (
    <header>
      <div className="text-left bg-stone-400 p-4 mb-6 w-screen pl-64">
        <h1 className="text-xl font-bold text-stone-500">{props.name}</h1>
        <p className="text-stone-500/70">{props.description}</p>
      </div>
    </header>
  );
}
