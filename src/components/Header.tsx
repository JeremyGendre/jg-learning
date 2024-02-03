import { Link, useLocation } from "react-router-dom";
import HeaderLink from "./HeaderLink";
import LearnIcon from "./icons/LearnIcon";
import ListCheckIcon from "./icons/ListCheckIcon";

export default function Header() {
  const { pathname } = useLocation();
  return (
    <header className="sticky top-0 z-50">
      <div className="w-full bg-gray-200 shadow-lg text-center text-sm px-3 py-2 flex flex-wrap gap-2 xs:gap-4 sm:gap-6 md:gap-8">
        <Link to="/" className="flex gap-2 items-center font-bold text-xl text-sky-700">
          <img src="/images/earth-icon.png" alt="Logo" className="w-8 h-8" />
          <div className="hidden sm:block">
            Capital Cities
          </div>
        </Link>
        <div className="flex flex-wrap gap-2 flex-1 justify-end sm:justify-normal">
          <HeaderLink to="/learn" label="Learn" icon={<LearnIcon className="text-base" />} active={pathname.includes('/learn')}/>
          <HeaderLink to="/quizz" label="Quizz" icon={<ListCheckIcon className="text-base" />} active={pathname.includes('/quizz')}/>
        </div>
      </div>
    </header>
  );
}