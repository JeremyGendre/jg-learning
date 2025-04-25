import ReignPageLayout from "../../../pages/roman-empire/ReignPageLayout";
import Accordion from "../../Accordion"
import ListEnum from "../../ListEnum";

export default function Summary() {
  return (
    <ReignPageLayout reign="Caracalla">
      <p>
        Marcus Aurelius Severus Antoninus, dit Caracalla, règne de 211 à 217 ap. J.-C. après avoir assassiné son frère Geta, avec qui il partageait initialement le pouvoir. Empereur brutal et autoritaire, il reste célèbre pour l’édit de Caracalla, qui accorde la citoyenneté romaine à tous les hommes libres de l’Empire.
      </p>

      <Accordion title="Politique intérieure" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Consolidation du pouvoir personnel">
          <li>Fait assassiner son frère Geta en 212 dans les bras de leur mère Julia Domna.</li>
          <li>Ordonne une damnatio memoriae contre Geta et une purge sanglante de ses partisans (estimée à 20 000 morts).</li>
        </ListEnum>
        <ListEnum title="Édit de Caracalla (Constitutio Antoniniana)">
          <li>En 212, accorde la citoyenneté romaine à presque tous les hommes libres de l’Empire.</li>
          <li>Motivations multiples : augmenter les revenus fiscaux, renforcer l’unité de l’Empire, flatter les provinces.</li>
          <li>Rupture majeure avec la politique exclusive de la citoyenneté romaine.</li>
        </ListEnum>
        <ListEnum title="Pouvoir autocratique et culte impérial">
          <li>Se fait représenter comme un nouveau Alexandre le Grand.</li>
          <li>Exalte sa figure impériale et exige une vénération quasi divine.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Politique extérieure" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Campagnes germaniques et danubiennes">
          <li>Renforce la présence militaire sur le limes du Rhin et du Danube.</li>
          <li>Mène des expéditions contre les Alamans (vers 213) et tente de stabiliser la frontière.</li>
        </ListEnum>
        <ListEnum title="Expédition en Orient (216–217)">
          <li>Prépare une guerre contre les Parthes, dont il cherche à annexer le royaume.</li>
          <li>Fait des démonstrations militaires en Arménie et en Mésopotamie.</li>
        </ListEnum>
        <ListEnum title="Stratégie de provocation">
          <li>Demande la main de la fille du roi parthe Artaban IV pour provoquer une guerre.</li>
          <li>Occupe brièvement plusieurs villes, mais sa campagne est peu concluante.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Travaux et économie" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Thermes de Caracalla">
          <li>Fait construire à Rome de gigantesques thermes publics (bains de Caracalla), inaugurés vers 216.</li>
          <li>Chef-d’œuvre architectural, symbole de prestige impérial.</li>
        </ListEnum>
        <ListEnum title="Crise économique latente">
          <li>Augmente les soldes des légionnaires pour s'assurer leur fidélité.</li>
          <li>Fait frapper de nouvelles pièces mais poursuit la dévaluation du denier.</li>
          <li>Les dépenses militaires pèsent lourdement sur les finances de l'État.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Vie personnelle et entourage" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Caractère autoritaire et instable">
          <li>Caracalla est décrit comme colérique, paranoïaque et violent.</li>
          <li>Il suscite la terreur à la cour, même parmi ses proches.</li>
        </ListEnum>
        <ListEnum title="Relation avec Julia Domna">
          <li>Sa mère, Julia Domna, conserve une forte influence politique malgré la mort de Geta.</li>
          <li>Elle administre une partie de l’Empire pendant les absences de son fils.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Mort et succession" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum>
          <li>Assassiné en avril 217 près de Carrhae par un centurion, alors qu’il faisait ses besoins.</li>
          <li>Complot orchestré par son préfet du prétoire, Macrin, qui lui succède.</li>
          <li>Sa mort provoque la fin de la branche directe des Sévères mâles.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Bilan du règne" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Points positifs :" type="success">
          <li>L’édit de Caracalla marque une avancée juridique majeure dans l’unification de l’Empire.</li>
          <li>Ses campagnes renforcent temporairement les frontières du nord et de l’est.</li>
          <li>Thermes de Caracalla : héritage architectural et culturel impressionnant.</li>
        </ListEnum>
        <ListEnum title="Points négatifs :" type="failure">
          <li>Gouvernement marqué par la violence, les purges et une instabilité chronique.</li>
          <li>Militarisation excessive et poids économique croissant des dépenses militaires.</li>
          <li>Dévaluation monétaire et pression fiscale aggravée.</li>
        </ListEnum>
      </Accordion>

      <p>
        Caracalla est l’un des empereurs les plus controversés de l’histoire romaine : brutal et craint, il laisse néanmoins une empreinte durable grâce à l’universalisation de la citoyenneté romaine. Son assassinat ouvre une période d’instabilité politique qui affaiblit l’Empire.
      </p>
    </ReignPageLayout>
  );
}