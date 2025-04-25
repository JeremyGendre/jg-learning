import ReignPageLayout from "../../../pages/roman-empire/ReignPageLayout";
import Accordion from "../../Accordion"
import ListEnum from "../../ListEnum";

export default function Summary() {
  return (
    <ReignPageLayout reign="Antonin le Pieux">
      <p>
        Titus Aurelius Fulvus Boionius Arrius Antoninus, dit Antonin le Pieux, succède à Hadrien en 138 ap. J.-C. Son surnom de "Pieux" lui vient de sa loyauté envers son père adoptif, qu’il fait diviniser malgré l’opposition du Sénat. Son règne est marqué par une paix durable, une excellente gestion financière et un respect profond des institutions.
      </p>

      <Accordion title="Politique intérieure" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Gouvernement modéré et stable">
          <li>Privilégie la continuité et la modération dans tous les domaines.</li>
          <li>Rétablit l’harmonie avec le Sénat, qu’il consulte régulièrement.</li>
          <li>Renforce le rôle du Conseil impérial pour une administration efficace.</li>
        </ListEnum>
        <ListEnum title="Réformes juridiques">
          <li>Améliore l’accès à la justice pour les provinces et les classes défavorisées.</li>
          <li>Renforce les protections juridiques des esclaves et des mineurs.</li>
          <li>Encourage une jurisprudence plus humaine, influencée par le stoïcisme.</li>
        </ListEnum>
        <ListEnum title="Politique religieuse et morale">
          <li>Renforce les cultes traditionnels romains.</li>
          <li>Favorise une politique de tolérance religieuse, notamment envers les chrétiens (aucune persécution d’ampleur connue).</li>
          <li>Incarne l’idéal du princeps vertueux, pieux et bienveillant.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Politique extérieure" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Paix généralisée">
          <li>Aucune guerre majeure durant son règne, rareté remarquable dans l’histoire romaine.</li>
          <li>Pratique une diplomatie habile, fondée sur la dissuasion et les alliances locales.</li>
        </ListEnum>
        <ListEnum title="Défense des frontières">
          <li>Renforce les limes rhénan et danubien par des constructions défensives.</li>
          <li>Réprime quelques troubles en Bretagne et en Dacie sans campagnes massives.</li>
          <li>Maintien de la sécurité dans l’Empire sans expansion militaire.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Travaux et économie" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Politique économique saine">
          <li>Équilibre budgétaire respecté : dépenses maîtrisées, impôts stables.</li>
          <li>Fonds de secours pour les villes frappées par des catastrophes naturelles.</li>
          <li>Développement modéré de nouvelles infrastructures.</li>
        </ListEnum>
        <ListEnum title="Soutien aux cités">
          <li>Aides financières aux cités en difficulté.</li>
          <li>Encourage le mécénat local et l’implication des élites provinciales dans l’administration.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Vie personnelle et entourage" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Empereur de Rome, mais sédentaire">
          <li>Contrairement à Hadrien, il ne quitte jamais l’Italie durant tout son règne.</li>
          <li>Gouverne depuis Rome ou sa villa à Lanuvium.</li>
        </ListEnum>
        <ListEnum title="Vie de famille">
          <li>Époux de Faustine l’Ancienne, divinisée après sa mort en 141.</li>
          <li>Très proche de ses filles et d’un entourage restreint, fidèle et discret.</li>
        </ListEnum>
        <ListEnum title="Succession bien préparée">
          <li>Adopte Marc Aurèle en 138, qu’il forme personnellement à la fonction impériale.</li>
          <li>Prépare également Lucius Verus pour gouverner conjointement avec lui.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Mort et succession">
        <ListEnum>
          <li>Mort naturelle en 161 ap. J.-C., à l’âge de 74 ans, à Lorium près de Rome.</li>
          <li>Funérailles impériales et divinisation immédiate par le Sénat.</li>
          <li>Succession paisible par Marc Aurèle et Lucius Verus, conformément à ses vœux.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Bilan du règne" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Points positifs" type="success">
          <li>Règne paisible, symbole de la stabilité de l’Empire au IIe siècle.</li>
          <li>Gestion sage, respect du Sénat, protection des plus faibles.</li>
          <li>Préservation de l’héritage d’Hadrien tout en renforçant les institutions romaines.</li>
          <li>Considéré comme un modèle de vertu, tant sur le plan personnel que politique.</li>
        </ListEnum>
        <ListEnum title="Points négatifs" type="failure">
          <li>Manque d’initiatives marquantes ou de réformes profondes.</li>
          <li>Absence de campagnes militaires : certains le jugent trop passif.</li>
          <li>Sa sédentarité limite sa connaissance directe des provinces.</li>
        </ListEnum>
      </Accordion>

      <p>
        Antonin le Pieux incarne l’apogée d’un Empire pacifié, prospère et bien gouverné. Sa fidélité à Hadrien, sa prudence et sa piété lui valent une place d’honneur dans la tradition impériale. Son règne marque le sommet de la période des "bons empereurs", admirée depuis l’Antiquité jusqu’aux historiens modernes.
      </p>
    </ReignPageLayout>
  );
}