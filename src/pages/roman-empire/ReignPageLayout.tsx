import { useMemo } from "react";
import { ButtonLink } from "../../components/Button";
import { reigns } from "./ReignsPage";


export default function ReignPageLayout({ children, reign }: { children: React.ReactNode, reign?: string }) {
  const reignsData = useMemo(() => {
    if (!reign) return undefined;
    const currentReign = reigns.findIndex((r) => r.name === reign);
    if (!reign) return undefined;
    const nextReign = reigns[currentReign + 1];
    const previousReign = reigns[currentReign - 1];

    return {
      next: nextReign ? {
        to: `/roman-empire/reigns/${nextReign?.name}`,
        label: `${nextReign?.name} (${nextReign?.reignStart} - ${nextReign?.reignEnd})`,
      } : null,
      previous: previousReign ? {
        to: `/roman-empire/reigns/${previousReign?.name}`,
        label: `${previousReign?.name} (${previousReign?.reignStart} - ${previousReign?.reignEnd})`,
      } : null,
    }
  }, [reign]);
  return (
    <div className="flex flex-col gap-4">
      {children}
      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-center text-gray-600 font-bold text-sm">
          {reignsData?.previous && (<div>Précédent :</div>)}
          <div className="w-1"/>
          {reignsData?.next && (<div>Suivant :</div>)}
        </div>
        <div className="flex justify-between items-center">
          {reignsData?.previous && (
            <ButtonLink 
              label={reignsData.previous.label} 
              to={reignsData.previous.to} 
              size="sm" 
              className="truncate"
            />
          )}
          <div className="w-1"/>
          {reignsData?.next && (
            <ButtonLink 
              label={reignsData.next.label} 
              to={reignsData.next.to} 
              size="sm" 
              className="truncate"
            />
          )}
        </div>
      </div>
    </div>
  );
}