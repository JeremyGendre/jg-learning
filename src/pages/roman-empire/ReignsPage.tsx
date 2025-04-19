import ReignPageLink from "../../components/roman-empire/ReignPageLink";
import { AnneeDesQuatreEmpereursSummary, CaligulaSummary, ClaudeSummary, DomitienSummary, NeronSummary, OctaveSummary, TibèreSummary, TitusSummary, VespasienSummary } from "../../components/roman-empire/summaries";
import Reign from "../../interfaces/reign.interface";

export const reigns: Reign[] = [
  {
    name: "Octave (Auguste)",
    type: "emperor",
    birthDate: "-63",
    deathDate: "14",
    reignStart: "-27",
    reignEnd: "14",
    summary: <OctaveSummary />
  },
  {
    name: "Tibère",
    type: "emperor",
    birthDate: "-42",
    deathDate: "37",
    reignStart: "14",
    reignEnd: "37",
    summary: <TibèreSummary/>
  },
  {
    name: "Caligula",
    birthDate: "12",
    type: "emperor",
    deathDate: "41",
    reignStart: "37",
    reignEnd: "41",
    summary: <CaligulaSummary/>
  },
  {
    name: "Claude",
    type: "emperor",
    birthDate: "-10",
    deathDate: "54",
    reignStart: "41",
    reignEnd: "54",
    summary: <ClaudeSummary/>
  },
  {
    name: "Néron",
    type: "emperor",
    birthDate: "37",
    deathDate: "68",
    reignStart: "54",
    reignEnd: "68",
    summary: <NeronSummary/>
  },
  {
    name: "Année des 4 empereurs",
    type: "period",
    reignStart: "68",
    reignEnd: "69",
    summary: <AnneeDesQuatreEmpereursSummary />
  },
  {
    name: "Vespasien",
    type: "emperor",
    birthDate: "9",
    deathDate: "79",
    reignStart: "69",
    reignEnd: "79",
    summary: <VespasienSummary />
  },
  {
    name: "Titus",
    type: "emperor",
    birthDate: "39",
    deathDate: "81",
    reignStart: "79",
    reignEnd: "81",
    summary: <TitusSummary />
  },
  {
    name: "Domitien",
    type: "emperor",
    birthDate: "51",
    deathDate: "96",
    reignStart: "81",
    reignEnd: "96",
    summary: <DomitienSummary/>
  },
  {
    name: "Nerva",
    type: "emperor",
    birthDate: "30",
    deathDate: "98",
    reignStart: "96",
    reignEnd: "98",
    summary: (
      <div>
        <p>
          ...
        </p>
      </div>
    )
  },
  {
    name: "Trajan",
    type: "emperor",
    birthDate: "53",
    deathDate: "117",
    reignStart: "98",
    reignEnd: "117",
    summary: (
      <div>
        <p>
          ...
        </p>
      </div>
    )
  },
  {
    name: "Hadrien",
    type: "emperor",
    birthDate: "76",
    deathDate: "138",
    reignStart: "117",
    reignEnd: "138",
    summary: (
      <div>
        <p>
          ...
        </p>
      </div>
    )
  },
  {
    name: "Antonin le Pieux",
    type: "emperor",
    birthDate: "86",
    deathDate: "161",
    reignStart: "138",
    reignEnd: "161",
    summary: (
      <div>
        <p>
          ...
        </p>
      </div>
    )
  },
  {
    name: "Marc Aurèle",
    type: "emperor",
    birthDate: "121",
    deathDate: "180",
    reignStart: "161",
    reignEnd: "180",
    summary: (
      <div>
        <p>
          ...
        </p>
      </div>
    )
  },
  {
    name: "Commode",
    type: "emperor",
    birthDate: "161",
    deathDate: "192",
    reignStart: "180",
    reignEnd: "192",
    summary: (
      <div>
        <p>
          ...
        </p>
      </div>
    )
  },
  {
    name: "2ème année des 4 empereurs",
    type: "period",
    reignStart: "192",
    reignEnd: "193",
    summary: (
      <div>
        <p>
          ...
        </p>
      </div>
    )
  },
  {
    name: "Septime Sévère",
    type: "emperor",
    birthDate: "145",
    deathDate: "211",
    reignStart: "193",
    reignEnd: "211",
    summary: (
      <div>
        <p>
          ...
        </p>
      </div>
    )
  },
  {
    name: "Caracalla",
    type: "emperor",
    birthDate: "188",
    deathDate: "217",
    reignStart: "198",
    reignEnd: "217",
    summary: (
      <div>
        <p>
          ...
        </p>
      </div>
    )
  },
  {
    name: "Macrin (+ Diaduménien)",
    type: "emperor",
    birthDate: "165",
    deathDate: "218",
    reignStart: "217",
    reignEnd: "218",
    summary: (
      <div>
        <p>
          ...
        </p>
      </div>
    )
  },
  {
    name: "Héliogabale",
    type: "emperor",
    birthDate: "203",
    deathDate: "222",
    reignStart: "218",
    reignEnd: "222",
    summary: (
      <div>
        <p>
          ...
        </p>
      </div>
    )
  },
  {
    name: "Alexandre Sévère",
    type: "emperor",
    birthDate: "208",
    deathDate: "235",
    reignStart: "222",
    reignEnd: "235",
    summary: (
      <div>
        <p>
          ...
        </p>
      </div>
    )
  },
  {
    name: "Anarchie militaire",
    type: "period",
    reignStart: "235",
    reignEnd: "253",
    summary: (
      <div>
        <p>
          ...
        </p>
      </div>
    )
  },
  {
    name: "Trente tyrans",
    type: "period",
    reignStart: "253",
    reignEnd: "268",
    summary: (
      <div>
        <p>
          ...
        </p>
      </div>
    )
  },
  {
    name: "Empereurs Illyriens",
    type: "period",
    reignStart: "268",
    reignEnd: "285",
    summary: (
      <div>
        <p>
          ...
        </p>
      </div>
    )
  },
  {
    name: "Tétrarchies et dynastie des Constantiniens",
    type: "period",
    reignStart: "284",
    reignEnd: "364",
    summary: (
      <div>
        <p>
          ...
        </p>
      </div>
    )
  },
  {
    name: "Constantin 1er le Grand",
    type: "emperor",
    birthDate: "272",
    deathDate: "337",
    reignStart: "306",
    reignEnd: "337",
    summary: (
      <div>
        <p>
          ...
        </p>
      </div>
    )
  },
  {
    name: "Dynastie des Valentiniens",
    type: "period",
    reignStart: "364",
    reignEnd: "392",
    summary: (
      <div>
        <p>
          ...
        </p>
      </div>
    )
  },
  {
    name: "Dynastie des Théodosiens",
    type: "period",
    reignStart: "379",
    reignEnd: "457",
    summary: (
      <div>
        <p>
          ...
        </p>
      </div>
    )
  },
  {
    name: "Derniers empereurs d'Occident",
    type: "period",
    reignStart: "455",
    reignEnd: "476",
    summary: (
      <div>
        <p>
          ...
        </p>
      </div>
    )
  },
];

export default function ReignsPage() {
  return (
    <div className="flex flex-col md:flex-row w-full justify-center items-stretch md:items-center h-full gap-3 flex-wrap">
      {reigns.map((reign, index) => (
        <ReignPageLink
          key={`emperor-${index}`}
          reign={reign}
          to={`/roman-empire/reigns/${reign.name}`}
        />
      ))}
    </div>
  );
}