import ReignPageLayout from "../../../pages/roman-empire/ReignPageLayout";
import Accordion from "../../Accordion"
import ListEnum from "../../ListEnum";

export default function Summary() {
  return (
    <ReignPageLayout reign="Vespasien">
      <p>
      Né Titus Flavius Vespasianus, d’origine modeste et provinciale (Sabine), il est un général respecté qui prend le pouvoir après avoir été proclamé empereur par ses troupes pendant la guerre civile. Son règne est marqué par la reconstruction, la consolidation de l’État et une grande sobriété personnelle.
      </p>

      <Accordion title="Politique intérieure" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Restauration de l’ordre (après l’année des quatre empereurs)">
          <li>Il remet sur pied l’administration et le système judiciaire après les excès de ses prédécesseurs.</li>
          <li>Il élimine les partisans de Vitellius (son rival) tout en se montrant mesuré envers ses adversaires.</li>
        </ListEnum>
        <ListEnum title="Réformes financières">
          <li>L’Empire est financièrement exsangue. Vespasien impose une politique fiscale stricte : création de nouveaux impôts, réorganisation de la perception.</li>
          <li>C’est lui qui introduit la célèbre taxe sur les urines (vectigal urinae) — d’où le proverbe "Pecunia non olet" ("L'argent n'a pas d'odeur").</li>
        </ListEnum>
        <ListEnum title="Redressement économique">
          <li>Il restaure le trésor impérial avec rigueur, tout en lançant de grands travaux.</li>
          <li>Il encourage la croissance des classes moyennes et l’ascension de nouvelles élites, notamment provinciales.</li>
        </ListEnum>
        <ListEnum title="Travaux publics majeurs">
          <li>Lancement de la construction du <b>Colisée</b> (amphithéâtre Flavien).</li>
          <li>Reprise de nombreux projets interrompus depuis Néron, dont la restauration du Capitole et l’urbanisme à Rome.</li>
        </ListEnum>
        <ListEnum title="Stabilité politique">
          <li>Il renforce l’autorité impériale en s’appuyant sur les chevaliers et les provinces.</li>
          <li>Il restaure le prestige du Sénat tout en gardant le pouvoir réel : un empereur pragmatique, autoritaire mais pas tyrannique.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Politique extérieure" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Répression de la révolte juive (66–73)">
          <li>Il laisse à son fils Titus le soin d’écraser la révolte en Judée.</li>
          <li>En 70, prise de Jérusalem, destruction du Second Temple, pillage du trésor du Temple pour financer les projets romains.</li>
          <li>L’événement est commémoré par l’Arc de Titus.</li>
        </ListEnum>
        <ListEnum title="Stabilisation des frontières">
          <li>Il renforce la présence militaire en Germanie et en Bretagne.</li>
          <li>Il mène une politique défensive et d’intégration des provinces.</li>
        </ListEnum>
        <ListEnum title="Développement provincial">
          <li>Il accorde la citoyenneté romaine à des élites locales méritantes.</li>
          <li>Début d’un mouvement qui va favoriser la romanisation du monde méditerranéen occidental.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Vie personnelle et entourage" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Origines modestes, style simple">
          <li>Fils d’un percepteur d’impôts, Vespasien n’a rien d’un aristocrate raffiné.</li>
          <li>Il est réputé pour sa sobriété, son humour terre-à-terre et son travail acharné.</li>
        </ListEnum>
        <ListEnum title="Transmission dynastique">
          <li>Il prépare sa succession avec soin : son fils Titus est nommé coempereur et associé au pouvoir.</li>
          <li>Son autre fils, Domitien, est également élevé dans la sphère impériale.</li>
        </ListEnum>
        <ListEnum title="Relations avec les philosophes">
          <p>Il persécute certaines écoles philosophiques, en particulier les stoïciens, qu’il juge trop critiques du pouvoir impérial.</p>
        </ListEnum>
      </Accordion>

      <Accordion title="Mort et succession">
        <ListEnum title="Mort naturelle en 79 ap. J.-C.">
          <li>Il meurt à 69 ans d’une maladie intestinale, sans crise de succession</li>
          <li>Il est le premier empereur à transmettre le pouvoir à son fils biologique (Titus) depuis Auguste (et sans conflit), consolidant la nouvelle dynastie.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Bilan du règne" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Points positifs :" type="success">
          <li>Rétablissement de la stabilité après la guerre civile.</li>
          <li>Bonne gestion financière, redressement économique.</li>
          <li>Favorise la méritocratie, les élites provinciales, et la romanisation.</li>
          <li>Grand bâtisseur (Colisée, forum de la Paix, restauration de Rome).</li>
        </ListEnum>
        <ListEnum title="Points négatifs :" type="failure">
          <li>Fiscalité lourde, parfois impopulaire.</li>
          <li>Répression de certaines libertés intellectuelles.</li>
          <li>Ne réforme pas profondément le système politique : continue le modèle autocratique.</li>
        </ListEnum>
      </Accordion>
      <p>
      Vespasien laisse l’image d’un empereur pragmatique, solide, réformateur, qui a su rétablir l’autorité de l’État sans sombrer dans la cruauté ou la démesure. Il est souvent vu comme l’anti-Néron : modeste, stable, gestionnaire, et bienveillant envers les provinces. Sa dynastie marque une nouvelle ère d’expansion modérée et de réorganisation impériale.
      </p>
    </ReignPageLayout>
  );
}