import { Link } from "react-router-dom";
import ArrowRightIcon from "./icons/ArrowRightIcon";

export default function HomeLink({ label, to, icon }: { label: string, to: string, icon?: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="px-20 py-16 font-semibold text-xl group relative overflow-hidden bg-blue-200 text-blue-800 rounded-md flex flex-col items-center justify-center gap-2 hover:bg-blue-300 transition duration-150"
    >
      {icon}
      <div className="relative">
        {label}
        <ArrowRightIcon className="absolute top-1/2 -translate-y-1/2 left-full transition duration-150 opacity-0 group-hover:translate-x-2 group-hover:opacity-100" />
      </div>
    </Link>
  );
}