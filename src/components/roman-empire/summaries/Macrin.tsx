import ReignPageLayout from "../../../pages/roman-empire/ReignPageLayout";
import Accordion from "../../Accordion"
import ListEnum from "../../ListEnum";

export default function Summary() {
  return (
    <ReignPageLayout reign="Macrin">
      <p>
        Marcus Opellius Macrinus devient empereur après l’assassinat de Caracalla en 217 ap. J.-C. Préfet du prétoire et homme de loi, il est le premier empereur n’appartenant pas à l’ordre sénatorial. Son règne bref est marqué par une tentative de retour à une politique plus modérée, mais il ne parvient pas à s’imposer durablement.
      </p>

      <Accordion title="Politique intérieure" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Origine sociale inédite">
          <li>Issu de l’ordre équestre, il rompt avec la tradition des empereurs sénatoriaux.</li>
          <li>Ne bénéficie pas d’un soutien fort ni du Sénat, ni de l’armée.</li>
        </ListEnum>
        <ListEnum title="Mesures de modération">
          <li>Annule certaines dépenses excessives de Caracalla.</li>
          <li>Tente de réduire les soldes des militaires pour stabiliser le budget, ce qui provoque leur mécontentement.</li>
        </ListEnum>
        <ListEnum title="Politique prudente">
          <li>Restaure une certaine sobriété dans la cour impériale.</li>
          <li>Essaye de gouverner en conciliant l’armée et les institutions, sans succès durable.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Politique extérieure" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Paix avec les Parthes">
          <li>Met fin à la campagne orientale de Caracalla en concluant une paix rapide avec les Parthes.</li>
          <li>Accorde des indemnités au roi Artaban IV pour stabiliser la frontière.</li>
          <li>La paix est mal perçue par l’armée, qui la considère comme une humiliation.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Travaux et économie" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Politique d’austérité">
          <li>Réduit les dépenses impériales héritées de Caracalla.</li>
          <li>Rétablit une certaine discipline fiscale.</li>
        </ListEnum>
        <ListEnum title="Tensions militaires">
          <li>La réduction de la solde et des primes crée une rupture avec les légions, notamment en Syrie.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Vie personnelle et entourage" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Origine berbère">
          <li>Né à Césarée en Maurétanie (actuelle Algérie), il est le premier empereur d’origine nord-africaine non aristocratique.</li>
        </ListEnum>
        <ListEnum title="Gouvernement isolé">
          <li>Ne dispose pas d’un entourage influent ou fidèle.</li>
          <li>Son fils Diaduménien est nommé co-empereur, mais trop jeune pour gouverner.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Mort et succession" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum>
          <li>Renversé par une révolte militaire en faveur d’Élagabal, soutenu par la famille des Sévères.</li>
          <li>Capturé avec son fils alors qu’il tentait de fuir, ils sont exécutés en Cappadoce en juin 218.</li>
          <li>Élagabal, prêtre du dieu solaire éponyme, est proclamé empereur par les légions de Syrie.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Bilan du règne" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Points positifs :" type="success">
          <li>Tente de rétablir une gestion plus rationnelle de l’Empire.</li>
          <li>Conclut une paix rapide avec les Parthes pour éviter une guerre prolongée.</li>
          <li>Premier exemple d’un empereur issu de milieux modestes.</li>
        </ListEnum>
        <ListEnum title="Points négatifs :" type="failure">
          <li>Manque total de légitimité dynastique ou militaire.</li>
          <li>Mécontentement des troupes qui précipite sa chute.</li>
          <li>Règne trop court pour appliquer ses réformes.</li>
        </ListEnum>
      </Accordion>

      <p>
        Macrin est un empereur de transition, dont le règne marque un échec des tentatives de recentrage politique après l’autoritarisme de Caracalla. Il est rapidement balayé par le retour d’un pouvoir dynastique incarné par Élagabal.
      </p>
    </ReignPageLayout>
  );
}