import { Link } from "react-router-dom";
import Reign from "../../interfaces/reign.interface";
import BirthdayCakeIcon from "../icons/BirthdayCakeIcon";
import CrossIcon from "../icons/CrossIcon";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import classNames from "classnames";
import ArrowDownIcon from "../icons/ArrowDownIcon";

export default function ReignPageLink({ reign, to, className }: { reign: Reign; to: string, className?: string }) {
  return (
    <Link
      to={reign.summary ? to : "#"} 
      className={classNames(
        'transition duration-150 border rounded-lg overflow-hidden',
        'flex justify-between items-center md:flex-col gap-1 md:p-2 md:min-w-40',
        className,
        { 
          'cursor-default': !reign.summary,
          'bg-orange-50 hover:bg-orange-100 border-orange-400 hover:border-orange-500': reign.type === "period",
          'bg-blue-50 hover:bg-blue-100 border-blue-400 hover:border-blue-500': reign.type === "emperor",
        }
      )}
    >
      <div className="flex flex-col md:flex-row md:w-full md:justify-between items-center gap-2 font-bold border-r border-r-gray-400 md:border md:border-gray-300 md:rounded-full p-1.5 md:px-2 md:py-1 self-center bg-gray-50">
        <div className="text-base text-gray-700">
          { reign.reignStart }
        </div>
        <ArrowRightIcon className="text-gray-300 hidden md:block" />
        <ArrowDownIcon className="text-gray-300 md:hidden" />
        <div className="text-base text-gray-700">
          { reign.reignEnd }
        </div>
      </div>
      <div className="flex-1 p-1">
        <div className="font-bold text-xl text-center">
          { reign.name }
        </div>
        {(reign.birthDate || reign.deathDate) && (
          <div className="flex justify-center items-center gap-4 text-xs text-gray-600">
            {reign.birthDate && (
              <div className="flex items-center gap-1 justify-between">
                <BirthdayCakeIcon /> { reign.birthDate }
              </div>
            )}
            {reign.deathDate && (
              <div className="flex items-center gap-1 justify-between">
                <CrossIcon /> { reign.deathDate }
              </div>
            )}
          </div>
        )}
      </div>
    </Link>
  );
}