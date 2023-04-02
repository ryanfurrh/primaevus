import Link from "next/link";

export function MainHeader() {
  return (
    <header>
      <div className="text-center bg-stone-200 p-2">
        <Link
          href="/"
          className="flex flex-row gap-2 justify-start items-center "
        >
          <div className="w-3 h-3 rounded-full bg-stone-400"></div>
          <h1 className="text-base font-bold uppercase text-stone-400">
            Prīmaevus
          </h1>
        </Link>
      </div>
    </header>
  );
}
