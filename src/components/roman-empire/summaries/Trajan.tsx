import ReignPageLayout from "../../../pages/roman-empire/ReignPageLayout";
import Accordion from "../../Accordion"
import ListEnum from "../../ListEnum";

export default function Summary() {
  return (
    <ReignPageLayout reign="Trajan">
      <p>
        Marcus Ulpius Traianus, né en Bétique (Espagne actuelle), est le premier empereur romain originaire des provinces. Adopté par Nerva en 97, il devient empereur en 98 et incarne l’apogée de l’Empire romain par son expansion territoriale, son administration rigoureuse et ses grands travaux. Son règne est considéré comme un modèle de bon gouvernement.
      </p>

      <Accordion title="Politique intérieure" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Relations avec le Sénat">
          <li>Maintient la politique de collaboration amorcée par Nerva.</li>
          <li>Respecte les prérogatives sénatoriales tout en conservant un pouvoir personnel fort.</li>
          <li>Renforce l’image d’un empereur juste et modeste, consulté mais ferme.</li>
        </ListEnum>
        <ListEnum title="Administration et justice">
          <li>Renforce le rôle des gouverneurs provinciaux, choisis pour leur mérite.</li>
          <li>Met en place des inspecteurs impériaux (*curatores*) pour surveiller la gestion des cités.</li>
          <li>Veille à la lutte contre la corruption administrative.</li>
        </ListEnum>
        <ListEnum title="Politique sociale">
          <li>Développe le programme des *alimenta* pour soutenir les enfants pauvres.</li>
          <li>Distribue des aides alimentaires régulières dans les villes italiennes.</li>
          <li>Fait preuve de clémence et d’équité dans l’exercice de la justice.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Politique extérieure" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Conquêtes militaires">
          <li>Annexe la Dacie (actuelle Roumanie) après deux campagnes (101–102 et 105–106), exploit décisif.</li>
          <li>Saisit le trésor d’or dace, renforçant les finances impériales.</li>
          <li>Conquiert l’Arabie Pétrée en 106, assurant le contrôle des routes commerciales.</li>
          <li>Lance une ambitieuse campagne contre les Parthes (114–117), annexe l’Arménie, la Mésopotamie et la Babylonie temporairement.</li>
        </ListEnum>
        <ListEnum title="Stabilité des frontières">
          <li>Renforce les frontières en Germanie et en Syrie avec des infrastructures et des troupes.</li>
          <li>Construit des routes et fortifications pour assurer la stabilité des nouvelles provinces.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Travaux et économie" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Grands travaux">
          <li>Fait édifier le Forum de Trajan, la Colonne Trajane, et le marché de Trajan à Rome.</li>
          <li>Développe les routes, aqueducs, ports (comme Civitavecchia) et ponts dans tout l’Empire.</li>
        </ListEnum>
        <ListEnum title="Politique économique">
          <li>Utilise les richesses conquises (notamment en Dacie) pour financer les dépenses publiques.</li>
          <li>Réduction des impôts pour certaines provinces.</li>
          <li>Stimule le commerce et sécurise les voies maritimes et terrestres.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Vie personnelle et entourage" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Origine provinciale et image personnelle">
          <li>Issu d’une famille de notables d’Hispanie, il incarne la méritocratie impériale.</li>
          <li>Adopté par Nerva pour assurer la stabilité militaire et politique.</li>
          <li>Modeste et proche de ses soldats, il est surnommé *Optimus Princeps* ("le meilleur des princes").</li>
        </ListEnum>
        <ListEnum title="Succession">
          <li>Sans enfant, il adopte Hadrien sur son lit de mort (selon certaines sources, à l’initiative de sa femme Plotine).</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Mort et succession">
        <ListEnum>
          <li>Meurt en 117 ap. J.-C. à Selinus (Cilicie), probablement d’un AVC ou d'une infection après une maladie prolongée.</li>
          <li>Ses cendres sont déposées dans la base de la Colonne Trajane à Rome.</li>
          <li>Hadrien lui succède pacifiquement.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Bilan du règne" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Points positifs" type="success">
          <li>Élargissement territorial maximal de l’Empire romain.</li>
          <li>Politique équilibrée entre autorité impériale et respect du Sénat.</li>
          <li>Administration efficace et justice sociale renforcée.</li>
          <li>Grand bâtisseur et mécène de la paix romaine.</li>
          <li>Modèle d’empereur vertueux dans l’historiographie romaine.</li>
        </ListEnum>
        <ListEnum title="Points négatifs" type="failure">
          <li>Conquêtes à l’est difficiles à maintenir : certaines provinces seront abandonnées dès Hadrien.</li>
          <li>Fin de règne marquée par des campagnes longues et coûteuses en hommes.</li>
        </ListEnum>
      </Accordion>

      <p>
        Trajan est considéré par les Romains comme l’un des plus grands empereurs. Le Sénat le plaça en exemple pour tous ses successeurs avec la formule de bénédiction : "Sois plus heureux qu’Auguste et meilleur que Trajan". Il symbolise l’idéal impérial entre force, justice et modération.
      </p>
    </ReignPageLayout>
  );
}