import ReignPageLayout from "../../../pages/roman-empire/ReignPageLayout";
import Accordion from "../../Accordion"
import ListEnum from "../../ListEnum";

export default function Summary() {
  return (
    <ReignPageLayout reign="Nerva">
      <p>
      Marcus Cocceius Nerva, sénateur respecté et proche des empereurs précédents, est proclamé empereur par le Sénat après l’assassinat de Domitien. À 66 ans, il devient empereur dans une période délicate et pose les bases de la succession adoptive, fondement de la dynastie des Antonins.
      </p>

      <Accordion title="Politique intérieure" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Restauration de l’autorité du Sénat">
          <li>Rompt avec l’absolutisme de Domitien : retour à un gouvernement plus collégial.</li>
          <li>Fait abolir les lois répressives de Domitien et libère de nombreux prisonniers politiques.</li>
          <li>Il garantit la sécurité des sénateurs et cherche à réconcilier les élites.</li>
        </ListEnum>
        <ListEnum title="Réforme judiciaire">
          <li>Supprime les procès pour maiestas (atteinte à la dignité impériale).</li>
          <li>Établit une procédure judiciaire plus juste.</li>
        </ListEnum>
        <ListEnum title="Mesures sociales">
          <li>Lutte contre la pauvreté : distribution de terres aux pauvres, aides aux enfants pauvres (alimenta).</li>
          <li>Rétablit une forme de justice sociale et apaise le climat politique à Rome.</li>
        </ListEnum>
        <ListEnum title="Affaibli face à l’armée">
          <li>Nerva, sans expérience militaire, est mal vu par les soldats fidèles à Domitien.</li>
          <li>Subit en 97 une mutinerie de la garde prétorienne, qui exige vengeance pour la mort de Domitien.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Politique extérieure" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Politique extérieure prudente">
          <li>Pas de nouvelles guerres ou campagnes militaires : il privilégie la paix et la stabilité.</li>
          <li>Maintien de l’ordre dans les provinces, sans grandes réformes.</li>
        </ListEnum>
        <ListEnum title="Gestion des frontières">
          <li>Confie la sécurité à ses généraux, notamment Trajan, qu’il adopte en 97.</li>
          <li>Les provinces sont globalement calmes durant son court règne.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Travaux et économie" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Modération budgétaire">
          <li>Restaure la stabilité économique après les dépenses somptuaires de Domitien.</li>
          <li>Réorganise certaines taxes et limite les dépenses de l’État.</li>
        </ListEnum>
        <ListEnum title="Bienfaisance publique">
          <li>Distribution de terres aux vétérans et aux plus pauvres.</li>
          <li>Soutien aux cités et aux classes moyennes, notamment par des prêts à faible taux d’intérêt.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Vie personnelle et entourage" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Sans héritier naturel">
          <p>Célibataire et sans enfants, Nerva n’a pas de succession directe.</p>
        </ListEnum>
        <ListEnum title="Soutien des élites sénatoriales">
          <li>Gouverne avec des conseillers issus du Sénat.</li>
          <li>Cultive une image d’homme simple, modeste et vertueux.</li>
        </ListEnum>
        <ListEnum title="Choix décisif de Trajan">
          <p>En 97, pour apaiser l’armée, il adopte Trajan, un général populaire, garantissant la paix intérieure et une succession stable.</p>
        </ListEnum>
      </Accordion>

      <Accordion title="Mort et succession">
        <ListEnum>
          <li>Mort naturelle en janvier 98 ap. J.-C., à l’âge de 67 ans, probablement d’une attaque.</li>
          <li>Règne court : seulement 16 mois.</li>
          <li>Succession pacifique et respectée : Trajan lui succède sans conflit.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Bilan du règne" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Points positifs :" type="success">
          <li>Rétablit le dialogue entre l’empereur et le Sénat.</li>
          <li>Amnistie, mesures sociales, politique apaisée.</li>
          <li>Stabilise une situation politique tendue après Domitien.</li>
          <li>L’adoption de Trajan est son geste politique majeur, considéré comme un tournant dans l’histoire impériale.</li>
        </ListEnum>
        <ListEnum title="Points négatifs :" type="failure">
          <li>Faible autorité face à l’armée.</li>
          <li>Règne trop bref pour lancer des réformes de fond.</li>
          <li>Dépendance vis-à-vis des pressions prétoriennes.</li>
        </ListEnum>
      </Accordion>
      <p>
      Nerva est considéré comme le "réparateur de la liberté" (restitutori libertatis) par les auteurs antiques. Il ouvre la période des "bons empereurs", selon la tradition de l’historien Edward Gibbon. Son choix de succession adoptive (Trajan) est salué comme un acte politique fondateur.
      </p>
    </ReignPageLayout>
  );
}