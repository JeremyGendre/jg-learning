import ReignPageLayout from "../../../pages/roman-empire/ReignPageLayout";
import Accordion from "../../Accordion";
import ListEnum from "../../ListEnum";

export default function Summary() {
  return (
    <ReignPageLayout reign="Derniers empereurs d'Occident">
      <p>
        La période 455–476 marque l’agonie finale de l’Empire romain d’Occident. Après l’assassinat de Valentinien III, les empereurs se succèdent rapidement,
        souvent manipulés par des généraux ou imposés par des puissances barbares. Le pouvoir impérial devient symbolique, tandis que de véritables souverains
        germaniques prennent progressivement le contrôle du territoire.
      </p>

      <Accordion title="Contexte général" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum>
          <li>Affaiblissement extrême du pouvoir impérial face aux chefs militaires et aux royaumes barbares.</li>
          <li>Succession rapide d’empereurs éphémères, souvent sans réelle autorité.</li>
          <li>Domination progressive des Vandales en Afrique et des Wisigoths, Burgondes et Suèves en Gaule et en Hispanie.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Empereurs principaux" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Pétrone Maxime (455)">
          <li>Prend le pouvoir après l’assassinat de Valentinien III.</li>
          <li>Règne très bref (quelques mois) ; assassiné lors du sac de Rome par les Vandales.</li>
        </ListEnum>
        <ListEnum title="Avitus (455–456)">
          <li>Général soutenu par les Wisigoths.</li>
          <li>Chassé par l’armée romaine après une défaite militaire.</li>
        </ListEnum>
        <ListEnum title="Majorien (457–461)">
          <li>Dernier empereur énergique : tente de restaurer l’autorité romaine.</li>
          <li>Conduit une expédition contre les Vandales, échoue, puis est assassiné sur ordre du général Ricimer.</li>
        </ListEnum>
        <ListEnum title="Libius Sévère (461–465)">
          <li>Simple marionnette du général Ricimer.</li>
          <li>Peu reconnu hors d'Italie.</li>
        </ListEnum>
        <ListEnum title="Anthémius (467–472)">
          <li>Nomination soutenue par l’Empire d’Orient.</li>
          <li>Meurt assassiné après un conflit avec Ricimer.</li>
        </ListEnum>
        <ListEnum title="Olybrius (472)">
          <li>Empereur imposé par Ricimer peu avant la mort de ce dernier.</li>
          <li>Règne insignifiant.</li>
        </ListEnum>
        <ListEnum title="Glycerius (473–474)">
          <li>Proclamé empereur en Italie mais rejeté par Constantinople.</li>
          <li>Contraint d'abdiquer après l'arrivée de Julius Nepos.</li>
        </ListEnum>
        <ListEnum title="Julius Nepos (474–475)">
          <li>Reconnu officiellement par l’Empire d’Orient.</li>
          <li>Renversé par son général Oreste ; se réfugie en Dalmatie, où il conserve le titre impérial.</li>
        </ListEnum>
        <ListEnum title="Romulus Augustule (475–476)">
          <li>Fils d’Oreste, dernier empereur de facto d’Occident.</li>
          <li>Déposé en 476 par Odoacre, chef barbare, marquant la fin officielle de l’Empire romain d'Occident.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Événements marquants" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Saccage de Rome (455)">
          <li>Les Vandales d'Hilaire pillent Rome, aggravant le déclin de l'autorité impériale.</li>
        </ListEnum>
        <ListEnum title="Domination militaire des barbares">
          <li>Les généraux germaniques (comme Ricimer) contrôlent l’accès au trône impérial.</li>
          <li>L’armée romaine devient majoritairement composée de mercenaires barbares.</li>
        </ListEnum>
        <ListEnum title="Fin de l'Empire romain d'Occident (476)">
          <li>Odoacre dépose Romulus Augustule et renvoie les insignes impériaux à Constantinople.</li>
          <li>Rome ne sera plus jamais la capitale d’un empire unifié ; seul l’Empire d’Orient (byzantin) subsiste.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Bilan de la période" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Points positifs :" type="success">
          <li>Efforts énergiques de Majorien pour restaurer l'Empire.</li>
          <li>Maintien temporaire d'une administration civile romaine dans certaines régions.</li>
        </ListEnum>
        <ListEnum title="Points négatifs :" type="failure">
          <li>Instabilité politique chronique et successions brutales.</li>
          <li>Perte irréversible des principales provinces (Afrique, Gaule, Bretagne).</li>
          <li>Absence totale de capacité militaire autonome à Rome.</li>
          <li>Disparition de l'idée d'un Empire d'Occident fort et souverain.</li>
        </ListEnum>
      </Accordion>

      <p>
        La déposition de Romulus Augustule en 476 est traditionnellement considérée comme la fin de l'Empire romain d'Occident, bien que des vestiges romains
        subsisteront encore longtemps dans les royaumes barbares. L’Empire romain d’Orient, quant à lui, perdurera jusqu’en 1453 sous la forme de l’Empire byzantin.
      </p>
    </ReignPageLayout>

  );
}