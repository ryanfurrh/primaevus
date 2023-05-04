import { PrimaeLogo } from "@/public/icons";
import Link from "next/link";

export function NavHeader() {
  return (
    <div className="px-3 py-2 text-center border-r-2 md:border-r-0 md:px-5 md:py-4 md:border-b-2 bg-sand-100 opacity-85 border-sand-400 ">
      <Link
        href="/"
        className="flex flex-col justify-center gap-2 place-items-center"
      >
        <div className="flex md:flex-col justify-center gap-2 px-4 py-2 md:p-4 my-2 border-2 rounded-lg hover:mt-1 border-stone-400 bg-sand-200 hover:-translate-y-1 hover:border-b-[6px] transition-all">
          <div className="flex justify-center flex-auto">
            <PrimaeLogo className="self-center w-5 h-5 opacity-80 md:w-9 md:h-9 text-stone-400" />
          </div>

          <h1 className="text-lg font-extrabold tracking-widest uppercase md:text-xl text-stone-500/90 font-archivo font-stretch">
            Primæ
          </h1>
        </div>
      </Link>
    </div>
  );
}
