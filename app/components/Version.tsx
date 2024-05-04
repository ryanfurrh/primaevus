import getConfig from "next/config";

const { version } = require("/package.json");

export default function Version() {
  return (
    <div className="flex py-0.5 px-2 text-xs text-center border-1 w-fit text-neptune-500 border-neptune-700/80 opacity-60">
      <h3 className="">version: {version}</h3>
    </div>
  );
}
