import HomeLink from "../components/HomeLink";

export default function HomePage(){
  return (
    <div className="flex flex-col md:flex-row w-full justify-center items-stretch md:items-center h-full gap-3 flex-wrap">
      <HomeLink label="Capitales" to="/capital-cities"/>
      <HomeLink label="Empire Romain" to="/roman-empire"/>
    </div>
  );
}