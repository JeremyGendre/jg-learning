import HomeLink from "../components/HomeLink";

export default function HomePage(){
  return (
    <div className="flex w-full justify-center items-center h-full gap-3 flex-wrap">
      <HomeLink label="Capitales" to="/capital-cities"/>
      <HomeLink label="Empire Romain" to="/roman-empire"/>
    </div>
  );
}