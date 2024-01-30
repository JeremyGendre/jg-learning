import { useCallback, useState } from "react";
import { useContinentContext } from "../contexts/ContinentContext";
import QuizzContinentCard from "../components/QuizzContinentCard";

export default function QuizzPage(){
  const { continents } = useContinentContext();
  const [selectedContinents, setSelectedContinents] = useState<string[]>([]);
  const handleCheckboxChange = useCallback((continentName: string) => {
    if(!selectedContinents.includes(continentName)){
      setSelectedContinents(old => [...old, continentName]);
    } else {
      setSelectedContinents(old => old.filter((c) => c !== continentName));
    }
  }, [selectedContinents])
  return (
    <div className="w-full flex flex-col">
      Sélectionnez les continents sur lesquels vous souhaitez être interrogé :
      <div className="flex mt-4">
        <div className="flex flex-col gap-2">
          {continents.map(continent => (
            <QuizzContinentCard 
              key={continent.name}
              continent={continent}
              active={selectedContinents.includes(continent.name)}
              onClick={() => handleCheckboxChange(continent.name)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}