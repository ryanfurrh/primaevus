"use client";

import { NavIndex, type Item } from "@/app/Nav-Index";
import Link from "next/link";
import Image from "next/image";
import { useSelectedLayoutSegment } from "next/navigation";
import clsx from "clsx";
import ArtifactDatabase from "@/public/icons/ArtifactDatabase";
import { GrMenu } from "react-icons/gr";
import { useState } from "react";

export function GlobalNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex flex-row items-center justify-between md:items-start w-full md:h-screen bg-stone-300">
      <div>
        <nav className="flex flex-col ">
          {NavIndex.map((section) => {
            return (
              <div className="hidden md:flex md:flex-auto lg:inline-flex ">
                {" "}
                {section.items.map((item) => (
                  <GlobalNavItem item={item} />
                ))}
              </div>
            );
          })}
        </nav>
      </div>
      <div onClick={handleNav} className="md:hidden cursor-pointer px-5">
        <GrMenu size={25} className="" />
      </div>
      <div
        className={
          menuOpen
            ? "fixed right-[65px] top-0 w-[calc(100vw-101px)] xs:w-auto my-4 h-auto md:hidden bg-stone-100 bg-opacity-95 border-2 border-stone-400 ease-in-out duration-300 z-20"
            : "fixed right-[-100%] top-0 w-[calc(100vw-101px)] xs:w-auto my-4 h-screen-1/2 md:hidden bg-stone-100 bg-opacity-95 border-2 border-stone-400 ease-in-out duration-500 z-20"
        }
      >
        <nav className="flex flex-col" onClick={() => setMenuOpen(false)}>
          {NavIndex.map((section) => {
            return (
              <div className="w-auto">
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
          "bg-stone-400 hover:bg-stone-400 !text-stone-50": isActive,
        }
      )}
    >
      {/* <ArtifactDatabase color="#ffffff" /> */}
      <Image
        src={`/icons/${item.icon}.svg`}
        alt={""}
        width="16"
        height="16"
        className=""
        priority
      />
      {item.name}
    </Link>
  );
}
