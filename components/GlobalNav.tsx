"use client";

import { NavIndex, type Item } from "@/app/NavIndex";
import Link from "next/link";
import Image from "next/image";
import { useSelectedLayoutSegment } from "next/navigation";
import clsx from "clsx";
import { GrMenu } from "react-icons/gr";
import { useState } from "react";

export function GlobalNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex flex-row items-center justify-between w-full md:items-start md:h-screen bg-sand-200 font-ibm">
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
      <div onClick={handleNav} className="px-5 cursor-pointer md:hidden">
        <GrMenu size={25} className="" />
      </div>
      <div
        className={
          menuOpen
            ? "fixed right-[65px] top-0 w-[calc(100vw-101px)] xs:w-auto my-4 h-auto md:hidden bg-sand-100 bg-opacity-95 border-2 border-sand-400 ease-in-out duration-300 z-20"
            : "fixed right-[-100%] top-0 w-[calc(100vw-101px)] xs:w-auto my-4 h-screen-1/2 md:hidden bg-sand-100 bg-opacity-95 border-2 border-sand-400 ease-in-out duration-500 z-20"
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
        "w-full flex flex-row gap-2 font-semibold text-sand-700 items-center px-4 py-4 hover:bg-stone-500/90 hover:text-sand-100",
        {
          "bg-stone-500/90 hover:bg-stone-500/90 !text-sand-50": isActive,
        }
      )}
    >
      <div className="w-4 h-4">{item.icon}</div>

      {item.name}
    </Link>
  );
}
