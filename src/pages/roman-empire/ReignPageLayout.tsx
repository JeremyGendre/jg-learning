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
        start: nextReign?.reignStart,
        end: nextReign?.reignEnd,
        label: nextReign?.name,
      } : null,
      previous: previousReign ? {
        to: `/roman-empire/reigns/${previousReign?.name}`,
        start: previousReign?.reignStart,
        end: previousReign?.reignEnd,
        label: previousReign?.name,
      } : null,
    }
  }, [reign]);
  return (
    <div className="flex flex-col gap-4">
      {children}
      <div className="flex flex-col gap-1 sticky bottom-0 left-0 bg-gray-50 py-2">
        <div className="flex justify-between items-center text-gray-600 font-bold text-sm">
          {reignsData?.previous && (<div>Précédent ({reignsData.previous.start}, {reignsData.previous.end})</div>)}
          <div className="w-1"/>
          {reignsData?.next && (<div>Suivant ({reignsData.next.start}, {reignsData.next.end})</div>)}
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