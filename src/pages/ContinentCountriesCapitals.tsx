import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContinentContext } from "../contexts/ContinentContext";
import Continent from "../interfaces/continent.interface";
import Checkbox from "../components/Checkbox";
import Button from "../components/Button";

export default function ContinentCountriesCapitals() {
  const { continentName } = useParams();
  const { getContinent } = useContinentContext();
  const [continent, setContinent] = useState<Continent|undefined>(undefined);
  const [showedCapitals, setShowedCapitals] = useState<string[]>([]);
  const [showCountryNameFirst, setShowCountryNameFirst] = useState(true);

  useEffect(() => {
    setShowedCapitals([]);
    if(continentName){
      setContinent(getContinent(continentName));
    }
  }, [continentName, getContinent]);

  function addCapital(capital: string) {
    setShowedCapitals(old => [...old, capital]);
  }

  function removeCapital(capital: string) {
    setShowedCapitals(old => old.filter((c) => c !== capital));
  }

  function toggleCapital(capital: string) {
    if(showedCapitals.includes(capital)){
      removeCapital(capital);
    } else {
      addCapital(capital);
    }
  }

  function showAll(){
    setShowedCapitals(continent?.countries.map((c) => c.capital) || []);
  }

  return (
    <div className="w-full text-center mt-3">
      <div className="w-full flex justify-center gap-2 flex-wrap">
        <Checkbox label="Inverser l'affichage" id="show-country-name-frist" onChange={(val) => setShowCountryNameFirst(!val)} />
        <div className="flex flex-wrap gap-2 justify-center">
          <Button label="Tout révéler" onClick={() => showAll()} disabled={showedCapitals.length === continent?.countries?.length} />
          <Button label="Tout cacher" onClick={() => setShowedCapitals([])} disabled={showedCapitals.length === 0} />
        </div>
      </div>
      <div className="text-3xl font-bold my-4">
        {continent?.name}
      </div>
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-fit">
          {continent?.countries.map((country) => (
            <div 
              key={country.name} 
              className="relative select-none box-content text-center flex flex-col gap-1 px-4 py-4 bg-blue-200 rounded-md cursor-pointer ring ring-transparent ring-inset hover:ring-blue-400 transition duration-150"
              onClick={() => toggleCapital(country.capital)}
            >
              <div 
                className={`absolute top-0 left-0 transition duration-150 w-full h-full flex items-center justify-center ${showedCapitals.includes(country.capital) ? "opacity-0" : "opacity-100"}`}
              >
                {showCountryNameFirst ? country.name : country.capital}
              </div>
              <div 
                className={`transition duration-150 opacity-0 ${showedCapitals.includes(country.capital) ? "opacity-100" : "opacity-0"}`}
              >
                <div>{showCountryNameFirst ? country.name : country.capital}</div>
                <hr className="border-gray-800/50 my-2 w-4 mx-auto" />
                <div className="font-bold text-lg">{showCountryNameFirst ? country.capital : country.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}