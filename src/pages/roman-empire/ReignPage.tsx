import { useParams } from "react-router-dom";
import { reigns } from "./ReignsPage";
import ArrowRightIcon from "../../components/icons/ArrowRightIcon";
import BirthdayCakeIcon from "../../components/icons/BirthdayCakeIcon";
import CrossIcon from "../../components/icons/CrossIcon";

export default function ReignPage() {
  const { name } = useParams();

  const reign = reigns.find((reign) => reign.name === name);
  if (!reign) {
    return <div>Reign not found</div>;
  }

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row md:items-center md:gap-4 md:justify-center">
        <div>
          <div className="text-2xl font-bold text-center">
            { name }
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
        <div className="self-center mt-4 md:mt-0 flex items-center gap-4 bg-gray-100 border border-gray-300 rounded-full px-2 py-1">
          { reign.reignStart } <ArrowRightIcon /> { reign.reignEnd }
        </div>
      </div>
      <div className="mt-8">
        { reign.summary }
      </div>
    </div>
  );
}