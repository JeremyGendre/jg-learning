import ContinentCard from "../components/ContinentCard";
import { useContinentContext } from "../contexts/ContinentContext";

export default function HomePage(){
  const { continents } = useContinentContext();
  return (
    <div className="flex gap-2 w-full justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {
        continents.map(continent => (
          <ContinentCard 
            key={continent.name} 
            continentName={continent.name} 
            image={continent.image} 
            className="w-full"
          />
        ))
      }
      </div>
    </div>
  );
}