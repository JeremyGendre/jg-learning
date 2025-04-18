import HomeLink from "../../components/HomeLink";
import CalendarIcon from "../../components/icons/CalendarIcon";
import CrownIcon from "../../components/icons/CrownIcon";

export default function RomanEmpireIndex() {
  return (
    <div className="flex flex-col md:flex-row w-full justify-center items-stretch md:items-center h-full gap-3 flex-wrap">
      <HomeLink label="César" to="/roman-empire/cesar" icon={<CrownIcon className="text-4xl transition duration-150"/>}/>
      <HomeLink label="Règnes" to="/roman-empire/reigns" icon={<CrownIcon className="text-4xl transition duration-150"/>} />
      <HomeLink label="Dates clés" to="/roman-empire/key-dates" icon={<CalendarIcon className="text-4xl transition duration-150"/>}/>
    </div>
  );
}