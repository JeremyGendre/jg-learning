import HomeLink from "../../components/HomeLink";
import LearnIcon from "../../components/icons/LearnIcon";
import ListCheckIcon from "../../components/icons/ListCheckIcon";

export default function CapitalCitiesIndex() {
  return (
    <div className="flex w-full justify-center items-center h-full gap-3 flex-wrap">
      <HomeLink label="Learn" to="/capital-cities/learn" icon={<LearnIcon className="text-4xl transition duration-150" />}/>
      <HomeLink label="Quizz" to="/capital-cities/quizz" icon={<ListCheckIcon className="text-4xl transition duration-150" />}/>
    </div>
  );
}