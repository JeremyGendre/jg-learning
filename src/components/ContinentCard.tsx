import { Link } from "react-router-dom";

interface ContinentCardProps extends React.HTMLAttributes<HTMLDivElement> {
  continentName: string;
};

function ContinentCard({ continentName, className }: ContinentCardProps) {
  return (
    <Link 
      to={`/continent/${continentName}/capitals`} 
      className={`p-6 bg-blue-200 text-blue-800 rounded-md text-center hover:bg-blue-300 transition duration-150 ${className}`}
    >
      {continentName}
    </Link>
  );
}

export default ContinentCard;
