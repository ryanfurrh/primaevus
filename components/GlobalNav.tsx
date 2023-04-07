"use client";

import { NavIndex, type Item } from "@/app/Nav-Index";
import Link from "next/link";
import Image from "next/image";
import { useSelectedLayoutSegment } from "next/navigation";
import clsx from "clsx";
import ArtifactDatabase from "@/public/icons/ArtifactDatabase";

export function GlobalNav() {
  return (
    <div className="flex flex-col justify-self-stretch h-screen bg-stone-300">
      <div>
        <nav className="flex flex-col ">
          {NavIndex.map((section) => {
            return (
              <div>
                {" "}
                {section.items.map((item) => (
                  <GlobalNavItem item={item} />
                ))}
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

function GlobalNavItem({ item }: { item: Item }) {
  const segment = useSelectedLayoutSegment();
  const isActive = item.slug === segment;

  return (
    <Link
      href={`/${item.slug}`}
      className={clsx(
        "w-full flex flex-row gap-2 font-semibold text-stone-700 items-center px-4 py-4 hover:bg-stone-400 hover:text-stone-100",
        {
          "bg-stone-500 hover:bg-stone-500 !text-stone-50": isActive,
        }
      )}
    >
      {/* <ArtifactDatabase color="#ffffff" /> */}
      <img
        src={`/icons/${item.icon}.svg`}
        alt=""
        className="h-4 w-4 opacity-75 text-blue-500"
      />
      {item.name}
    </Link>
  );
}
