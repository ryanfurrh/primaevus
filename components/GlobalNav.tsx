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

function NavHeader({ isSidebarCollapsed }) {
  const segment = useSelectedLayoutSegment();
  const isActive = null === segment;

  return (
    <div
      className={
        isSidebarCollapsed
          ? "w-auto py-2 h-fit px-2 border-b-1 border-pale-100 bg-sand-100 dark:bg-ink-900 opacity-85"
          : "w-full px-3 py-2 text-center md:border-b-1 border-pale-100 md:px-5 md:py-4 bg-sand-100 dark:bg-ink-900 opacity-85"
      }
    >
      <Link
        href="/"
        className="flex content-center w-auto md:flex-col place-items-start"
      >
        <div className=""></div>
        <div
          className={
            isSidebarCollapsed
              ? "flex justify-center px-1 py-1 md:p-3 border-1 rounded-lg hover:mt-1 border-stone-400 dark:border-pale-100/20 bg-sand-200 dark:bg-ink-900 hover:-translate-y-1.5 hover:border-b-[6px] transition-all"
              : "flex md:flex-col justify-center gap-2 px-1 py-2 md:p-4 border-1 rounded-lg hover:mt-1 border-stone-400 dark:border-pale-100/20 bg-sand-200 dark:bg-ink-900 hover:-translate-y-1.5 hover:border-b-[6px] transition-all"
          }
        >
          <div
            className={
              isActive
                ? "flex flex-col text-stone-500 dark:text-neptune-400 gap-2 justify-center flex-auto h-full transition-all"
                : "flex flex-col text-stone-500 dark:text-neptune-700 hover:dark:text-neptune-400 gap-2 justify-center flex-auto w-full h-full transition-all"
            }
          >
            {isSidebarCollapsed ? (
              <PrimaeLogoMinimal className="w-8 h-8" />
            ) : (
              <PrimaeLogo
                className={
                  "self-center w-[98px] h-8 opacity-60 text-inherit md:w-[98px] md:h-11"
                }
              />
            )}
            <h1
              className={
                isSidebarCollapsed
                  ? "hidden"
                  : "text-lg font-extrabold leading-[1.125rem] md:text-[24px] dark:text-inherit font-archivo font-stretch md:flex hidden"
              }
            >
              Primæ
            </h1>
          </div>
        </div>
      </Link>
    </div>
  );
}
