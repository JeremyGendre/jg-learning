import { Link } from "react-router-dom";
import ArrowRightIcon from "./icons/ArrowRightIcon";

export default function HomeLink({ label, to, icon }: { label: string, to: string, icon?: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="px-20 py-16 font-semibold text-xl group relative overflow-hidden rounded-md flex flex-col items-center justify-center gap-2 from-sky-500 via-blue-500 to-blue-500 bg-gradient-to-br bg-size-200 bg-pos-0 hover:bg-pos-100 text-white transition-all duration-300"
    >
      {icon}
      <div className="relative">
        {label}
        <ArrowRightIcon className="absolute top-1/2 -translate-y-1/2 left-full transition duration-150 opacity-0 group-hover:translate-x-2 group-hover:opacity-100" />
      </div>
    </Link>
  );
}