import ReignPageLayout from "../../../pages/roman-empire/ReignPageLayout";
import Accordion from "../../Accordion"
import ListEnum from "../../ListEnum";

export default function Summary() {
  return (
    <ReignPageLayout reign="Empereurs Illyriens">
      <p>
        De 268 à 285, une série d'empereurs originaires des provinces illyriennes (actuels Balkans) prennent le pouvoir et restaurent progressivement l'autorité romaine après la crise du IIIᵉ siècle. 
        Ces chefs militaires pragmatiques, issus des rangs de l'armée, mettent en place des réformes essentielles et repoussent avec succès les menaces extérieures.
        Leur règne marque une étape cruciale vers la stabilisation de l’Empire avant l’arrivée de Dioclétien.
      </p>

      <Accordion title="Contexte général" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum>
          <li>Rome sort d'une période de graves divisions internes et d'invasions barbares massives.</li>
          <li>Besoin urgent de chefs militaires compétents pour défendre l'Empire.</li>
          <li>Ascension au pouvoir d'empereurs issus des armées du Danube.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Principaux empereurs" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Claude II le Gothique (268-270)">
          <li>Victoire majeure contre les Goths à la bataille de Naissus en 269.</li>
          <li>Premier à porter fièrement le titre de "Gothicus".</li>
          <li>Meurt de la peste peu après ses succès.</li>
        </ListEnum>
        <ListEnum title="Quintille (270)">
          <li>Frère de Claude II ; règne éphémère (quelques mois).</li>
          <li>Probablement assassiné ou poussé au suicide par l'armée.</li>
        </ListEnum>
        <ListEnum title="Aurélien (270-275)">
          <li>Reconquiert l’Empire des Gaules et le Royaume de Palmyre, réunifiant l'Empire.</li>
          <li>Construction du mur d'Aurélien pour protéger Rome.</li>
          <li>Réformes économiques : instaure une monnaie plus stable.</li>
          <li>Assassiné en 275 dans un complot de son entourage militaire.</li>
        </ListEnum>
        <ListEnum title="Tacite (275-276)">
          <li>Élu par le Sénat : règne bref et peu significatif.</li>
          <li>Meurt en campagne contre les barbares en Asie Mineure.</li>
        </ListEnum>
        <ListEnum title="Probus (276-282)">
          <li>Réduit plusieurs incursions barbares sur le Rhin et le Danube.</li>
          <li>Réorganise l’économie en faisant cultiver des terres en friche par les soldats.</li>
          <li>Assassiné par ses propres troupes.</li>
        </ListEnum>
        <ListEnum title="Carus (282-283)">
          <li>Conduit une brillante campagne contre les Perses.</li>
          <li>Meurt mystérieusement lors de son expédition en Orient (foudre ? assassinat ?).</li>
        </ListEnum>
        <ListEnum title="Carin et Numérien (283-285)">
          <li>Fils de Carus : règnent conjointement après sa mort.</li>
          <li>Numérien meurt mystérieusement en campagne (assassinat probable).</li>
          <li>Carin est tué à la bataille de la Margus contre Dioclétien.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Politique intérieure" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Renforcement de l'autorité impériale">
          <li>Concentration du pouvoir entre les mains de l'empereur-soldat.</li>
          <li>Moindre rôle du Sénat dans la nomination et la légitimité impériale.</li>
        </ListEnum>
        <ListEnum title="Réformes économiques et administratives">
          <li>Stabilisation relative de la monnaie sous Aurélien.</li>
          <li>Efforts pour améliorer la sécurité alimentaire et les infrastructures (murailles, routes, aqueducs).</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Politique extérieure" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Reconquête territoriale">
          <li>Réunification de l'Empire par la reconquête de l'Empire des Gaules et du Royaume de Palmyre.</li>
          <li>Campagnes victorieuses contre les Goths, Francs, Vandales, Alamans, Sarmates, Perses.</li>
        </ListEnum>
        <ListEnum title="Renforcement des frontières">
          <li>Renforcement du limes rhénan et danubien.</li>
          <li>Développement d’une armée plus mobile et réactive.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Bilan de la période" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Points positifs" type="success">
          <li>Stabilisation progressive de l'Empire après la crise du IIIᵉ siècle.</li>
          <li>Réunification territoriale essentielle sous Aurélien.</li>
          <li>Adaptation militaire aux nouvelles menaces barbares.</li>
        </ListEnum>
        <ListEnum title="Points négatifs" type="failure">
          <li>Violence politique continue : assassinats fréquents d'empereurs.</li>
          <li>Fragilité institutionnelle : le pouvoir dépend surtout du soutien militaire.</li>
          <li>Crise économique persistante malgré les efforts de réforme.</li>
        </ListEnum>
      </Accordion>

      <p>
        La période des Empereurs illyriens marque un tournant décisif dans l’histoire romaine : malgré les crises, ces empereurs-militaires rétablissent une base solide permettant à Dioclétien d’instaurer bientôt la Tétrarchie et de réorganiser profondément l’Empire.
      </p>
    </ReignPageLayout>
  );
}