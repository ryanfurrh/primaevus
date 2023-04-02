import Link from "next/link";

export function PageHeader(props: { name: string;  }) {
  return (
    <header>
      <div className="text-center bg-stone-400 p-8 mb-6">
        <h1 className="text-4xl font-bold text-stone-500">{props.name}</h1>
        <p className="text-stone-500/70">welcome.</p>
      </div>
    </header>
  );
}
