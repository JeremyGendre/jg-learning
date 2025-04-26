import ReignPageLayout from "../../../pages/roman-empire/ReignPageLayout";
import Accordion from "../../Accordion"
import ListEnum from "../../ListEnum";

export default function Summary() {
  return (
    <ReignPageLayout reign="Anarchie militaire">
      <p>
        L’Anarchie militaire (ou Crise du IIIᵉ siècle) commence avec l’assassinat d’Alexandre Sévère en 235 ap. J.-C. 
        Elle dure jusqu'à l'avènement de Valérien en 253. Cette période est marquée par une instabilité politique extrême, 
        des usurpations fréquentes, des guerres civiles, des invasions barbares, et une crise économique profonde. 
        L'autorité impériale s'effondre progressivement face à la puissance des armées.
      </p>

      <Accordion title="Contexte général" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum>
          <li>Affaiblissement du pouvoir central : les armées provinciales élisent et déposent les empereurs à volonté.</li>
          <li>Multiplication des usurpateurs (« empereurs soldats »), souvent soutenus uniquement par leurs troupes locales.</li>
          <li>Crises économiques : dévaluation monétaire massive, appauvrissement des provinces, multiplication des impôts.</li>
          <li>Pressions extérieures : invasions germaniques (Alamans, Francs), attaques sassanides à l'Est, raids de pirates.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Succession des empereurs" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Empereurs notables de la période">
          <li><strong>Maximin le Thrace (235-238)</strong> : militaire brutal, impopulaire auprès du Sénat, assassiné par ses propres troupes.</li>
          <li><strong>Gordien Ier et Gordien II (238)</strong> : proclamés empereurs en Afrique, morts lors de la révolte contre Maximin.</li>
          <li><strong>Balbin et Pupien (238)</strong> : élus par le Sénat ; gouvernent ensemble mais sont lynchés par la garde prétorienne.</li>
          <li><strong>Gordien III (238-244)</strong> : jeune empereur populaire, assassiné lors d'une campagne contre les Sassanides.</li>
          <li><strong>Philippe l'Arabe (244-249)</strong> : paix avec les Perses, fête les 1000 ans de Rome (248), renversé par Dèce.</li>
          <li><strong>Dèce (249-251)</strong> : mène la persécution des chrétiens ; meurt à la bataille d’Abrittus contre les Goths.</li>
          <li><strong>Gallus (251-253)</strong> : incapable de faire face aux invasions et aux épidémies ; assassiné par ses troupes.</li>
          <li><strong>Æmilien (253)</strong> : usurpateur rapidement éliminé par Valérien.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Menaces extérieures" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Frontiers menacées">
          <li>Invasions massives des Goths, Francs, Alamans au nord.</li>
          <li>Pressions croissantes de l'Empire sassanide en Orient.</li>
          <li>Multiplication des raids sur les villes côtières, y compris en Méditerranée.</li>
        </ListEnum>
        <ListEnum title="Défaites majeures">
          <li>Défaite de Dèce à Abrittus (251), première fois qu’un empereur romain meurt sur le champ de bataille contre des barbares.</li>
          <li>Perte de certaines parties des provinces danubiennes.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Crise économique et sociale" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Dévaluation monétaire">
          <li>Forte inflation due à l'émission massive de monnaies de mauvaise qualité.</li>
          <li>Chute de la confiance dans le denier, apparition d'économies locales parallèles.</li>
        </ListEnum>
        <ListEnum title="Épidémies">
          <li>Épidémies (probablement de peste ou de variole) ravagent l'Empire, affaiblissant les populations et les armées.</li>
        </ListEnum>
        <ListEnum title="Révoltes et troubles sociaux">
          <li>Multiplication des révoltes locales dues à l'oppression fiscale et à l'insécurité généralisée.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Bilan de la période" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Conséquences dramatiques" type="failure">
          <li>Perte de l'autorité impériale réelle.</li>
          <li>Fragilisation des frontières et des défenses romaines.</li>
          <li>Économie en ruine, administration paralysée.</li>
          <li>Appauvrissement général et insécurité chronique.</li>
        </ListEnum>
        <ListEnum title="Préparations pour la suite" type="success">
          <li>Valérien et Gallien, en 253, tentent de restaurer l'autorité impériale et de réorganiser l'armée.</li>
          <li>Naissance de stratégies de défense plus souples (comme la fortification de villes frontalières).</li>
        </ListEnum>
      </Accordion>

      <p>
        L'Anarchie militaire plonge l'Empire dans une crise sans précédent, mais prépare aussi les transformations structurelles profondes 
        qui marqueront la fin du IIIᵉ siècle, notamment avec la mise en place d'un Empire plus militarisé et centralisé sous les empereurs futurs.
      </p>
    </ReignPageLayout>
  );
}