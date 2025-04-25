import ReignPageLayout from "../../../pages/roman-empire/ReignPageLayout";
import Accordion from "../../Accordion"
import ListEnum from "../../ListEnum";

export default function Summary() {
  return (
    <ReignPageLayout reign="Commode">
      <p>
        Lucius Aurelius Commodus règne de 180 à 192 ap. J.-C., succédant à son père Marc Aurèle. Contrairement à ce dernier, il délaisse les affaires de l’État au profit de sa personne. Son règne autoritaire et fantasque précipite la fin de la dynastie des Antonins et marque le début d'une période d'instabilité.
      </p>

      <Accordion title="Politique intérieure" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Rupture avec l’héritage antonin">
          <li>Met fin aux campagnes militaires entamées par Marc Aurèle dès le début de son règne.</li>
          <li>Abandon de l’approche collégiale du pouvoir : centralisation et culte de la personnalité.</li>
        </ListEnum>
        <ListEnum title="Culte impérial exagéré">
          <li>Se fait appeler "Hercule Romain" et se fait représenter en héros mythologique.</li>
          <li>Fait renommer Rome en "Colonia Commodiana" ; les mois sont renommés d’après ses titres.</li>
        </ListEnum>
        <ListEnum title="Terreur politique">
          <li>Multiples purges au sein du Sénat, soupçons permanents de complot.</li>
          <li>Exécutions arbitraires de sénateurs et de proches collaborateurs.</li>
        </ListEnum>
        <ListEnum title="Gouvernance instable">
          <li>Abandon progressif des responsabilités impériales à des favoris (Cléandre, Saoterus, puis Pérennis).</li>
          <li>Corruption généralisée de l'administration impériale.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Politique extérieure" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Politique de repli">
          <li>Met un terme aux guerres danubiennes dès 180, au prix de concessions territoriales.</li>
          <li>Préférait la paix à tout prix plutôt que de maintenir l’effort militaire de son père.</li>
        </ListEnum>
        <ListEnum title="Stabilité provisoire des frontières">
          <li>Peu d’expéditions militaires sous son règne.</li>
          <li>Les menaces extérieures restent contenues, notamment grâce aux généraux provinciaux compétents.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Travaux et économie" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Spectacles et dépenses somptuaires">
          <li>Investit massivement dans les jeux du cirque et les combats de gladiateurs où il participe lui-même.</li>
          <li>Se produit dans l’arène, vêtu en Hercule, pour renforcer sa propagande personnelle.</li>
        </ListEnum>
        <ListEnum title="Politique économique instable">
          <li>Crise financière aggravée par la corruption et les dépenses ostentatoires.</li>
          <li>Inflation et mécontentement croissant dans les provinces.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Vie personnelle et entourage" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Personnalité instable et mégalomane">
          <li>Obsédé par son image divine, perd peu à peu contact avec la réalité politique.</li>
          <li>Souffre probablement de troubles psychologiques graves selon les auteurs antiques.</li>
        </ListEnum>
        <ListEnum title="Influence néfaste de ses favoris">
          <li>Confiance excessive envers des affranchis et courtisans (Pérennis, Cléandre), souvent corrompus.</li>
          <li>Fait exécuter ses favoris quand leur pouvoir devient trop grand ou leur loyauté suspecte.</li>
        </ListEnum>
        <ListEnum title="Isolement progressif">
          <li>Rupture avec le Sénat et la classe dirigeante.</li>
          <li>Multiples complots de palais nourris par la peur et le mécontentement.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Mort et succession">
        <ListEnum>
          <li>Assassiné le 31 décembre 192 ap. J.-C. dans une conspiration impliquant sa concubine Marcia, le préfet Laetus et un gladiateur.</li>
          <li>Strangulé dans son bain, après une tentative d’empoisonnement ratée.</li>
          <li>Sa mort entraîne un chaos politique immédiat et inaugure l’année des cinq empereurs.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Bilan du règne" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Points positifs" type="success">
          <li>Maintien de la paix extérieure pendant la majeure partie du règne.</li>
          <li>Popularité auprès du peuple grâce aux spectacles et largesses.</li>
        </ListEnum>
        <ListEnum title="Points négatifs" type="failure">
          <li>Règne tyrannique et instable, rupture avec les idéaux des Antonins.</li>
          <li>Administration corrompue et affaiblie par la faveur des courtisans.</li>
          <li>Crise de légitimité impériale, déclin de l’autorité du Sénat.</li>
          <li>Sa mort marque le début d’une période de troubles politiques majeurs.</li>
        </ListEnum>
      </Accordion>

      <p>
        Le règne de Commode est vu par les historiens antiques comme le début de la décadence impériale. Fils d’un empereur philosophe, il incarne l’échec de la succession dynastique et provoque la fin de l’âge d’or romain. Sa figure inspire de nombreux récits tragiques et critiques sur les dérives du pouvoir absolu.
      </p>
    </ReignPageLayout>
  );
}