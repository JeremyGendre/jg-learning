import ReignPageLayout from "../../../pages/roman-empire/ReignPageLayout";
import Accordion from "../../Accordion"
import ListEnum from "../../ListEnum";

export default function Summary() {
  return (
    <ReignPageLayout reign="Alexandre Sévère">
      <p>
        Né Marcus Aurelius Severus Alexander, il devient empereur en 222 ap. J.-C., à l'âge de 13 ans, après l'assassinat de son cousin Héliogabale. Sous la régence de sa mère Julia Mamaea, son règne est marqué par une volonté de réformes, un retour aux valeurs traditionnelles et une tentative de stabilisation de l'Empire dans une période de tensions croissantes.
      </p>

      <Accordion title="Politique intérieure" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Réformes administratives">
          <li>Renforce la compétence de l'administration impériale en s'entourant de juristes et de conseillers expérimentés (comme Ulpien).</li>
          <li>Lutte contre la corruption et veille à une meilleure gestion des ressources de l'État.</li>
        </ListEnum>
        <ListEnum title="Retour aux traditions romaines">
          <li>Rétablit les pratiques religieuses traditionnelles tout en faisant preuve de tolérance envers d'autres cultes, notamment les chrétiens.</li>
          <li>Encourage la morale traditionnelle, la justice, la piété et la modération.</li>
        </ListEnum>
        <ListEnum title="Pouvoir partagé">
          <li>Julia Mamaea exerce une grande influence sur les décisions impériales, parfois au détriment de l'autorité personnelle d'Alexandre.</li>
          <li>Le Sénat retrouve une place d'honneur, même si son pouvoir réel reste limité.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Politique extérieure" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Conflit avec l'Empire Sassanide">
          <li>Affronte Ardashir Ier, fondateur de l'Empire sassanide, qui menace les frontières orientales.</li>
          <li>Obtient des succès limités en Mésopotamie, mais sans victoire décisive.</li>
        </ListEnum>
        <ListEnum title="Tensions sur le limes germanique">
          <li>Pressions croissantes des peuples germaniques et autres tribus sur le Rhin et le Danube.</li>
          <li>En 235, Alexandre tente de négocier la paix avec des tribus germaniques, ce qui est mal perçu par l'armée romaine, avide de combat et de butin.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Travaux et économie" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Politique économique prudente">
          <li>Maintient une politique budgétaire stricte, favorisant la stabilité économique temporaire.</li>
          <li>Encourage la reconstruction de villes endommagées et le soutien aux populations pauvres.</li>
        </ListEnum>
        <ListEnum title="Bienfaisance publique">
          <li>Distribution d’aides aux nécessiteux.</li>
          <li>Financement d'œuvres publiques comme l'entretien des routes et des aqueducs.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Vie personnelle et entourage" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Éducation et personnalité">
          <li>Élevé dans la piété, la discipline et la culture classique.</li>
          <li>Considéré comme modeste, pieux et soucieux du bien public.</li>
        </ListEnum>
        <ListEnum title="Julia Mamaea, figure dominante">
          <li>Sa mère gouverne de facto l'Empire à ses côtés, exerçant une autorité forte mais parfois contestée.</li>
          <li>Influence parfois excessive de Mamaea sur les affaires militaires et politiques.</li>
        </ListEnum>
        <ListEnum title="Entourage réformateur">
          <li>Conseillers comme Ulpien (préfet du prétoire) et d'autres grands juristes de l'époque.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Mort et succession" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum>
          <li>En 235 ap. J.-C., lors d'une campagne contre les Germains, l'armée, mécontente de sa politique conciliante, se révolte.</li>
          <li>Alexandre Sévère et sa mère Julia Mamaea sont assassinés à Mogontiacum (Mayence) par leurs propres soldats.</li>
          <li>Maximin le Thrace est proclamé empereur par les légions.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Bilan du règne" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Points positifs :" type="success">
          <li>Tente de restaurer l’autorité morale et administrative de l’Empire.</li>
          <li>Stabilité économique temporaire et aides sociales notables.</li>
          <li>Promotion de la tolérance religieuse, notamment envers les chrétiens.</li>
        </ListEnum>
        <ListEnum title="Points négatifs :" type="failure">
          <li>Faiblesse face à l’armée et manque d’autorité personnelle.</li>
          <li>Échec militaire relatif face aux Sassanides et aux Germains.</li>
          <li>Forte dépendance envers sa mère Julia Mamaea.</li>
        </ListEnum>
      </Accordion>

      <p>
        Alexandre Sévère est souvent vu comme le dernier empereur compétent avant la crise du IIIᵉ siècle. Son assassinat marque le début d'une longue période d'instabilité politique, de guerres civiles et d'effondrement progressif de l'autorité impériale.
      </p>
    </ReignPageLayout>
  );
}