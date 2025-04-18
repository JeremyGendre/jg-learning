import { Link } from "react-router-dom";

export default function HeaderLink({ label, to, icon, active }: {label: string, to:string, icon?: React.ReactNode, active?: boolean}){
  return (
    <Link 
      to={to} 
      className={`transition duration-150 flex items-center gap-1 py-2 px-4 bg-gray-300 focus:!ring-transparent ring-1 ring-transparent ring-inset hover:ring-gray-400 rounded-md ${active ? "!bg-gray-600 !text-white" : ""}`}
    >
      {icon ?? ''}      
      {label}
    </Link>
  );
}