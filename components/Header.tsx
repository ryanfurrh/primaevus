import Link from "next/link";

export function Header() {
  return (
    <header>
      <div className="text-center bg-stone-500 p-8 mb-6">
        <Link href="/">
          <h1 className="text-3xl font-bold underline text-white">Dev Log</h1>
        </Link>
        <p className="text-stone-200">welcome.</p>
      </div>
    </header>
  );
}
