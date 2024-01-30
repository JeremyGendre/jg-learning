import { useLocation } from "react-router-dom";
import HeaderLink from "./HeaderLink";
import HomeIcon from "./icons/HomeIcon";
import LearnIcon from "./icons/LearnIcon";
import ListCheckIcon from "./icons/ListCheckIcon";

export default function Header() {
  const { pathname } = useLocation();
  return (
    <header className="sticky top-0 z-50">
      <div className="w-full bg-gray-200 shadow-lg text-center text-sm px-3 py-2 flex flex-wrap gap-1">
        <HeaderLink to="/" label="Accueil" icon={<HomeIcon className="text-base" />} active={pathname === '/'}/>
        <HeaderLink to="/learn" label="Learn" icon={<LearnIcon className="text-base" />} active={pathname.includes('/learn')}/>
        <HeaderLink to="/quizz" label="Quizz" icon={<ListCheckIcon className="text-base" />} active={pathname.includes('/quizz')}/>
      </div>
    </header>
  );
}