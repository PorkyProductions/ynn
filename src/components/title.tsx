import { NAME } from "@/typescript/constants";

export default function Title() {
  return (
    <span className="block">
      <span className="font-black text-xl text-white tracking-tight">{NAME}</span>
      <span className="block text-xs text-gray-500 mt-0.5">
        by <span className="text-gray-400">(de)Motivator</span>
      </span>
    </span>
  );
}
