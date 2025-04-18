import { Outlet, useLocation } from "react-router-dom";
import HeaderLink from "../../components/HeaderLink";
import LearnIcon from "../../components/icons/LearnIcon";
import ListCheckIcon from "../../components/icons/ListCheckIcon";

export default function CapitalCitiesLayout() {
  const { pathname } = useLocation();

  return (
    <div className="flex w-full justify-center items-center h-full gap-3 flex-wrap">
      <div className="flex w-full justify-between items-center gap-2 flex-wrap">
        <h1 className="text-3xl font-bold">
          Capitales du monde
        </h1>
        <div className="flex gap-2 items-center">
          <HeaderLink
            to="/capital-cities/learn" 
            label="Learn" 
            icon={<LearnIcon className="text-base" />} 
            active={pathname.includes('/capital-cities/learn')}
          />
          <HeaderLink 
            to="/capital-cities/quizz" 
            label="Quizz" 
            icon={<ListCheckIcon className="text-base" />} 
            active={pathname.includes('/capital-cities/quizz')}
          />
        </div>
      </div>
      <Outlet />
    </div>
  );
}