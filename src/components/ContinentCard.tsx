import { Link } from "react-router-dom";

interface ContinentCardProps extends React.HTMLAttributes<HTMLDivElement> {
  continentName: string;
  image?: string;
};

function ContinentCard({ continentName, image, className }: ContinentCardProps) {
  return (
    <Link 
      to={`/continent/${continentName}/capitals`} 
      className={`p-16 font-semibold text-xl group relative overflow-hidden bg-blue-200 text-blue-800 rounded-md text-center hover:bg-blue-300 transition duration-150 ${className}`}
    >
      <img src={`images/${image}`} alt={`${continentName.toLowerCase()}-illustration`} className="absolute top-0 left-0 group-hover:scale-110 transition duration-200"/>
      <div className="opacity-0">
        {continentName}
      </div>
      <div className="absolute transition duration-200 top-0 left-0 z-10 text-white bg-black/60 group-hover:bg-black/20 w-full h-full flex items-center justify-center">
        {continentName}
      </div>
    </Link>
  );
}

export default ContinentCard;
