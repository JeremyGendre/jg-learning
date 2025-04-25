import ReignPageLayout from "../../../pages/roman-empire/ReignPageLayout";
import Accordion from "../../Accordion"
import ListEnum from "../../ListEnum";

export default function Summary() {
  return (
    <ReignPageLayout reign="Hadrien">
      <p>
        Publius Aelius Hadrianus, successeur de Trajan, est connu pour avoir consolidé et stabilisé l’Empire romain plutôt que de l’étendre. Intellectuel, voyageur infatigable et administrateur rigoureux, il réoriente la politique impériale vers la défense des frontières et le renforcement de l’unité impériale. Son règne marque un tournant stratégique et culturel majeur.
      </p>

      <Accordion title="Politique intérieure" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Réorganisation de l’administration">
          <li>Professionnalise la bureaucratie impériale avec des fonctionnaires compétents.</li>
          <li>Réforme la justice, rend la législation plus cohérente et accessible.</li>
          <li>Codifie certaines pratiques administratives grâce à l’édit perpétuel de l’époque de Salvius Julianus.</li>
        </ListEnum>
        <ListEnum title="Relation avec le Sénat">
          <li>Règne parfois perçu comme autoritaire vis-à-vis du Sénat.</li>
          <li>Exécute plusieurs sénateurs accusés de complot au début du règne (controverse historique).</li>
          <li>Favorise néanmoins les sénateurs de mérite, en particulier les provinciaux.</li>
        </ListEnum>
        <ListEnum title="Politique culturelle et sociale">
          <li>Soutien actif aux arts, à la philosophie et à la culture grecque (philhellénisme marqué).</li>
          <li>Fonde des bibliothèques, soutient les lettrés et développe les institutions culturelles dans tout l’Empire.</li>
          <li>Renforce le programme des *alimenta* pour les enfants pauvres.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Politique extérieure" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Abandon des conquêtes de Trajan">
          <li>Renonce aux provinces de Mésopotamie et d’Arménie, jugées trop coûteuses à défendre.</li>
          <li>Choix controversé mais stratégique, recentrant l’Empire sur ses frontières durables.</li>
        </ListEnum>
        <ListEnum title="Renforcement des frontières">
          <li>Construit le Mur d’Hadrien en Britannia pour fixer la frontière nord.</li>
          <li>Fortifie le limes danubien et rhénan avec des camps, routes et tours de guet.</li>
          <li>Renforce la présence militaire en Afrique, en Germanie et en Syrie.</li>
        </ListEnum>
        <ListEnum title="Voyages impériaux">
          <li>Parcourt presque toutes les provinces de l’Empire (Grèce, Égypte, Afrique, Orient, Germanie).</li>
          <li>Inaugure une nouvelle forme d’impérialité itinérante, au plus proche des sujets.</li>
          <li>Fondateur ou restaurateur de nombreuses cités, dont Athènes et Antioche.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Travaux et économie" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Grands travaux">
          <li>Fait édifier la Villa Hadrienne à Tibur, chef-d’œuvre architectural.</li>
          <li>Reconstruction du Panthéon à Rome, toujours conservé aujourd’hui.</li>
          <li>Développement d’infrastructures dans les provinces : aqueducs, routes, temples, gymnases.</li>
        </ListEnum>
        <ListEnum title="Stabilité économique">
          <li>Politique budgétaire prudente : moins de dépenses militaires, plus d’investissements civils.</li>
          <li>Soutien à l’agriculture locale et au commerce méditerranéen.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Vie personnelle et entourage" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Intellectuel et philosophe">
          <li>Grand amateur de littérature grecque, de philosophie stoïcienne et épicurienne.</li>
          <li>Favorise la diffusion de la culture hellénique dans tout l’Empire.</li>
        </ListEnum>
        <ListEnum title="Vie privée marquée par Antinoüs">
          <li>Relation très intime avec le jeune Antinoüs, mort noyé dans le Nil en 130 ap. J.-C.</li>
          <li>Hadrien le divinise et fonde la cité d’Antinoopolis en sa mémoire.</li>
        </ListEnum>
        <ListEnum title="Succession adoptive">
          <li>Adopte Lucius Aelius, mort prématurément.</li>
          <li>Choisit ensuite Antonin le Pieux, à condition qu’il adopte Marc Aurèle et Lucius Verus.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Mort et succession">
        <ListEnum>
          <li>Meurt en 138 ap. J.-C. à Baiae, après une longue maladie (probablement cardiaque ou rénale).</li>
          <li>Sa santé déclinante et sa paranoïa ont assombri la fin de son règne.</li>
          <li>Antonin le Pieux lui succède sans troubles, en respectant ses volontés.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Bilan du règne" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Points positifs" type="success">
          <li>Stabilisation durable de l’Empire, recentré sur des frontières défendables.</li>
          <li>Politique pacifique, tournée vers la consolidation et l’harmonie des provinces.</li>
          <li>Brillant administrateur, mécène et protecteur des arts et lettres.</li>
          <li>Figure emblématique du souverain philosophe.</li>
        </ListEnum>
        <ListEnum title="Points négatifs" type="failure">
          <li>Rupture avec les ambitions conquérantes de Trajan, critiquée par certains contemporains.</li>
          <li>Relations parfois tendues avec le Sénat.</li>
          <li>Fin de règne marquée par la suspicion, l’isolement et la répression de certains complots réels ou supposés.</li>
        </ListEnum>
      </Accordion>

      <p>
        Hadrien est souvent vu comme l’architecte de l’équilibre impérial à long terme. Il incarne l’empereur humaniste, curieux du monde, protecteur de la culture grecque, et stratège réaliste. Son règne ouvre la voie à une période de paix relative et de prospérité prolongée dans l’Empire romain.
      </p>
    </ReignPageLayout>

  );
}