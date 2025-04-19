import ReignPageLayout from "../../../pages/roman-empire/ReignPageLayout";
import Accordion from "../../Accordion"
import ListEnum from "../../ListEnum";

export default function Summary() {
  return (
    <ReignPageLayout reign="Octave (Auguste)">
      <p>
      Né Gaius Octavius, petit-neveu et fils adoptif de Jules César, il devient le premier empereur romain sous le nom d’Auguste. Son règne marque la fin de la République et l’instauration du Principat, une monarchie déguisée sous des formes républicaines.
      </p>
      <Accordion title="Accession au pouvoir">
        <ListEnum>
          <li>Héritier de César : En 44 av. J.-C., à la mort de Jules César, Octave est nommé dans son testament comme son fils adoptif et principal héritier.</li>
          <li>Lutte pour le pouvoir :</li>
          <li>Il forme le Second Triumvirat avec Marc Antoine et Lépide pour éliminer les assassins de César.</li>
          <li>Après la victoire contre Brutus et Cassius (Philippes, 42 av. J.-C.), il entre en rivalité avec Antoine.</li>
          <li>Victoire définitive à Actium (31 av. J.-C.) : Il vainc Antoine et Cléopâtre, mettant fin à la guerre civile. Antoine se suicide en 30, Octave reste seul maître de Rome.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Politique intérieure" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Restauration républicaine... en apparence">
          <li>En 27 av. J.-C., il restitue ses pouvoirs au Sénat, qui lui confère les titres d’Auguste et de princeps. Il garde en réalité un pouvoir absolu.</li>
          <li>Il accumule les titres : tribun à vie (tribunicia potestas), imperator, grand pontife, etc., lui assurant une autorité sur tous les domaines.</li>
        </ListEnum>
        <ListEnum>
          <li>Création du Principat : Il fonde un régime monarchique déguisé, qui garde les apparences de la République mais concentre les pouvoirs entre ses mains.</li>
          <li>Pacification politique : Il met fin à des décennies de guerre civile et restaure la stabilité institutionnelle.</li>
          <li>S'assurer le soutien de l'armée, qu'il réorganise: 300 000 soldats (environ 25 légions)</li>
          <li>Création de la garde prétorienne (protège l'empereur)</li>
          <li>Il embellit Rome, fait restaurer ou construire de nombreux temples, monuments, forums.</li>
        </ListEnum>
        <ListEnum title="Réformes morales et sociales">
          <li>Lois sur le mariage, la natalité et l’adultère pour promouvoir les valeurs traditionnelles romaines (mos maiorum).</li>
          <li>Il favorise les familles nombreuses et punit le célibat.</li>
        </ListEnum>
        <ListEnum title="Réorganisation administrative">
          <li>Création d’une fonction publique efficace, composée d’esclaves et affranchis impériaux.</li>
          <li>Réforme du recensement, des impôts, des finances publiques.</li>
          <li>Mise en place de services urbains (police, pompiers, voirie).</li>
        </ListEnum>
        <ListEnum title="Propagande impériale">
          <li>Auguste soigne son image à travers la monnaie, la littérature (avec le soutien d’auteurs comme Virgile, Horace, Tite-Live), les monuments, et un récit officiel de ses actions (Res Gestae).</li>
          <li>Il affirme avoir sauvé la République tout en transformant le pouvoir romain.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Politique extérieure" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Stabilisation des frontières">
          <li>Il renonce aux conquêtes ambitieuses et cherche plutôt à sécuriser les frontières (Rhénanie, Danube, Syrie).</li>
          <li>Création d’un "limes" (ligne de défense) dans les régions sensibles.</li>
        </ListEnum>
        <ListEnum title="Conquêtes mesurées">
          <li>Intégration de l’Égypte (30 av. J.-C.) après la victoire contre Cléopâtre.</li>
          <li>Campagnes en Espagne, Alpes, Illyrie.</li>
          <li>Tentative de conquête de la Germanie stoppée net par la défaite de Varus dans la forêt de Teutobourg (9 ap. J.-C.), où trois légions sont anéanties.</li>
        </ListEnum>
        <ListEnum>
          <li>Il délègue à ses beaux-fils (Drusus, puis Tibère), tout en conservant le prestige militaire du commandement suprême (imperium).</li>
          <li>Il conclut des traités avec les Parthes et obtient par négociation le retour des enseignes perdues par Crassus, exploit à forte valeur symbolique.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Succession">
        <ListEnum>
          <li>Auguste n’a pas de fils biologique. Il adopte successivement Caius et Lucius César (morts jeunes), puis Tibère, son beau-fils, par défaut.</li>
          <li>Julia, sa fille, est mariée à ses héritiers successifs, mais finit exilée pour conduite immorale.</li>
          <li>Tibère est finalement désigné comme successeur officiel et co-règne partiellement les dernières années du règne.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Mort et divinisation">
        <ListEnum>
          <li>Mort naturelle en 14 ap. J.-C. à Nola, à l’âge de 75 ans.</li>
          <li>Il est divinisé par le Sénat (apothéose), devenant officiellement "Divus Augustus".</li>
          <li>Son testament confie le pouvoir à Tibère, assurant une transition dynastique et la continuité du Principat.</li>
        </ListEnum>
      </Accordion>
      <Accordion title="Bilan du règne" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Points positifs :" type="success">
          <li>Fin durable des guerres civiles, restauration de la paix (Pax Romana).</li>
          <li>Réorganisation de l'armée, stabilisation des frontières</li>
          <li>Administration centralisée, efficace et pérenne.</li>
          <li>Développement de Rome, des institutions, des routes, du commerce, etc.</li>
          <li>Stabilité monétaire, sociale et religieuse.</li>
          <li>Construction d’un mythe impérial fort, fondement de la légitimité des successeurs.</li>
        </ListEnum>
        <ListEnum title="Points discutables :" type="warning">
          <li>Concentration progressive du pouvoir, disparition de la République réelle.</li>
          <li>Censure, propagande, surveillance politique.</li>
        </ListEnum>
      </Accordion>
      <p>Auguste est le fondateur de l’Empire romain, non pas par un coup d’État brutal, mais par une habile reconstruction des institutions autour de sa personne. Fin politicien, maître de la communication et de la diplomatie, il a établi un modèle de pouvoir durable qui servira de référence aux empereurs pendant des siècles. Son règne, long et stable, incarne l’âge d’or de Rome.</p>
    </ReignPageLayout>
  );
}