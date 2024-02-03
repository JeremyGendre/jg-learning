import Continent from "../interfaces/continent.interface";
import CheckIcon from "./icons/CheckIcon";

export default function QuizzContinentCard({continent, active, onClick}: { continent: Continent, active: boolean, onClick: () => void}) {
  return (
    <div 
      className="group relative flex items-center gap-2 overflow-hidden rounded-md py-10 pl-6 pr-20 cursor-pointer border border-gray-200"
      onClick={onClick}
    >
      <img 
        src={`images/${continent.image}`} 
        alt={`${continent.name.toLowerCase()}-illustration`} 
        className={`absolute top-0 left-0 transition duration-300 group-hover:scale-110 grayscale ${active ? '!grayscale-0' : ''}`}
      />
      <div className="absolute flex items-center justify-center top-0 left-0 h-full bg-gradient-to-r from-gray-100 from-30% pr-20 z-10 w-full"/>
      <div className={`pr-20 z-10 font-bold text-left text-gray-600 transition duration-200 relative group-hover:translate-x-2 ${active ? '!translate-x-3' : ''}`}>
        { active ? (
          <CheckIcon className="absolute w-3 h-3 rounded-full right-full -translate-x-2 top-1/2 -translate-y-1/2 text-green-400" />
        ) : null }
        {continent.name}
      </div>
    </div>
  )
}