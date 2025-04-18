import { Outlet, useLocation } from "react-router-dom";
import HeaderLink from "../../components/HeaderLink";

export default function RomanEmpireLayout() {
  const { pathname } = useLocation();
  return (
    <div className="flex w-full justify-center items-center h-full gap-3 flex-wrap">
      <div className="flex w-full justify-between items-center gap-2 flex-wrap">
        <h1 className="text-3xl font-bold">
          Empire Romain
        </h1>
        <div className="flex gap-2 items-center">
          <HeaderLink
            to="/roman-empire/cesar" 
            label="César" 
            active={pathname.includes('/roman-empire/cesar')}
          />
          <HeaderLink
            to="/roman-empire/reigns" 
            label="Règnes" 
            active={pathname.includes('/roman-empire/reigns')}
          />
          <HeaderLink 
            to="/roman-empire/key-dates" 
            label="Dates clés" 
            active={pathname.includes('/roman-empire/key-dates')}
          />
        </div>
      </div>
      <hr className="w-full my-2"/>
      <Outlet />
    </div>
  );
}