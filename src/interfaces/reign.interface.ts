export default interface Reign {
  name: string;
  reignStart: string;
  reignEnd: string;
  type: "period" | "emperor";
  birthDate?: string;
  deathDate?: string;
  summary?: React.ReactNode;
}