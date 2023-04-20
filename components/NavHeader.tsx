import Link from "next/link";

export function NavHeader() {
  return (
    <header>
      <div className="text-center bg-stone-200 p-5">
        <Link
          href="/"
          className="flex flex-row justify-self-stretch justify-start items-center "
        >
          <div className="rounded-full bg-stone-400"></div>
          <h1 className="text-xl font-bold uppercase text-stone-400">
            Prīmaevus
          </h1>
        </Link>
      </div>
    </header>
  );
}
