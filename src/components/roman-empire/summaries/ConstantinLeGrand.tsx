import ReignPageLayout from "../../../pages/roman-empire/ReignPageLayout";
import Accordion from "../../Accordion"
import ListEnum from "../../ListEnum";

export default function Summary() {
  return (
    <ReignPageLayout reign="Constantin 1er le Grand">
      <p>
        Constantin Ier, surnommé "le Grand", est l’un des empereurs les plus marquants de l’histoire romaine.
        Son règne inaugure l'ère du christianisme impérial et pose les fondements d’une nouvelle Rome à Constantinople.
        Son habileté politique et militaire a permis de rétablir l'unité de l'Empire après une longue période de guerres civiles.
      </p>

      <Accordion title="Politique intérieure" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Réformes administratives">
          <li>Renforce le système bureaucratique instauré par Dioclétien.</li>
          <li>Divise l’Empire en diocèses et provinces plus petites pour une meilleure gestion.</li>
          <li>Développe davantage le rôle des préfets du prétoire, devenus de véritables ministres civils.</li>
        </ListEnum>
        <ListEnum title="Réformes économiques">
          <li>Création du solidus en or (vers 312), monnaie stable qui durera plus de 1000 ans.</li>
          <li>Réforme de la fiscalité pour financer l’armée et les services publics.</li>
          <li>Renforcement des taxes foncières et personnelles, parfois lourdes pour les populations rurales.</li>
        </ListEnum>
        <ListEnum title="Christianisation de l'Empire">
          <li>Édit de Milan (313) : garantit la liberté de culte pour les chrétiens et restitue leurs biens confisqués.</li>
          <li>Favorise les chrétiens dans l’administration et leur attribue des privilèges.</li>
          <li>Fin de la persécution religieuse systématique dans l’Empire.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Politique extérieure" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Conflits internes et consolidation du pouvoir">
          <li>Victoire contre Maxence à la bataille du Pont Milvius (312), marquée par la légende de la vision chrétienne ("Par ce signe tu vaincras").</li>
          <li>Victoire contre Licinius (324) : Constantin devient l'unique maître de l'Empire romain.</li>
        </ListEnum>
        <ListEnum title="Frontières et menaces extérieures">
          <li>Renforce le limes danubien contre les Goths et les Sarmates.</li>
          <li>Intervient en Orient contre les Sassanides, avec un succès limité.</li>
          <li>Intègre des peuples barbares comme foederati dans l’armée romaine.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Travaux et économie" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Fondation de Constantinople">
          <li>En 330, fonde Constantinople (ancienne Byzance) comme "Nouvelle Rome".</li>
          <li>Ville stratégique entre l’Europe et l’Asie, renforçant le contrôle sur l’Est de l’Empire.</li>
          <li>Développement rapide de la ville avec palais, forums, églises et hippodrome.</li>
        </ListEnum>
        <ListEnum title="Construction d'infrastructures">
          <li>Programme actif de construction dans tout l'Empire : routes, fortifications, églises.</li>
          <li>Participe à l'urbanisation de nombreuses cités provinciales.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Vie personnelle et entourage" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Famille">
          <li>Fils de Constance Chlore et d'Hélène, une femme d'origine modeste.</li>
          <li>Marié à Fausta (fille de Maximien), union politique importante.</li>
          <li>Nombreux enfants, dont trois fils principaux qui se partagent l’Empire après sa mort (Constantin II, Constans, Constance II).</li>
        </ListEnum>
        <ListEnum title="Aspects religieux personnels">
          <li>Favorise fortement le christianisme sans renier complètement certaines pratiques païennes traditionnelles dans ses premières années.</li>
          <li>Est baptisé chrétien seulement sur son lit de mort (337).</li>
          <li>Participe personnellement aux débats théologiques (notamment lors du Concile de Nicée).</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Mort et succession" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum>
          <li>Meurt en 337 près de Nicomédie (actuelle Turquie) après avoir prévu de partir en campagne contre les Perses.</li>
          <li>Baptisé juste avant sa mort, conformément à sa volonté d’être purifié.</li>
          <li>Succession divisée entre ses trois fils, provoquant rapidement des guerres civiles.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Bilan du règne" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Points positifs :" type="success">
          <li>Réunification durable de l'Empire après des décennies de guerres civiles.</li>
          <li>Institutionnalisation du christianisme, qui deviendra religion majoritaire dans l'Empire.</li>
          <li>Stabilité monétaire avec la création du solidus.</li>
          <li>Création de Constantinople, future capitale byzantine.</li>
        </ListEnum>
        <ListEnum title="Points négatifs :" type="failure">
          <li>Renforcement du pouvoir personnel au détriment du Sénat.</li>
          <li>Début de divisions religieuses majeures (arianisme contre catholicisme).</li>
          <li>Succession mal préparée, entraînant de nouvelles guerres civiles entre ses héritiers.</li>
        </ListEnum>
      </Accordion>

      <p>
        Constantin Ier est considéré comme l’un des plus grands empereurs romains.
        Sa conversion au christianisme, ses réformes durables et la fondation de Constantinople marquent une rupture historique majeure,
        inaugurant l'ère de l'Antiquité tardive et préparant la transition vers l'Empire byzantin.
      </p>
    </ReignPageLayout>

  );
}