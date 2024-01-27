import { ButtonLink } from "../components/Button";

export default function NoPage(){
  return (
    <div className="w-full flex items-center justify-center text-5xl font-bold flex-col gap-4">
      <div>
        No page found
      </div>
      <ButtonLink to="/" label="Retourner à l'accueil" className="font-normal text-base"/>
    </div>
  );
}