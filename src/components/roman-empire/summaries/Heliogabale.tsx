import ReignPageLayout from "../../../pages/roman-empire/ReignPageLayout";
import Accordion from "../../Accordion"
import ListEnum from "../../ListEnum";

export default function Summary() {
  return (
    <ReignPageLayout reign="Héliogabale">
      <p>
        Né Varius Avitus Bassianus, Héliogabale devient empereur en 218 ap. J.-C., à l’âge de 14 ans, soutenu par sa grand-mère Julia Maesa. Prêtre du dieu solaire Elagabal à Émèse, il impose un règne extravagant et religieux qui choque profondément les traditions romaines.
      </p>

      <Accordion title="Politique intérieure" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Domination religieuse">
          <li>Impose le culte du dieu solaire Élagabal comme religion principale de l’Empire.</li>
          <li>Construit un temple à Rome (Elagabalium) pour son dieu et place le dieu romain Jupiter en second plan.</li>
          <li>Transfère des symboles religieux romains majeurs dans son temple (bouclier de Mars, pierres sacrées).</li>
        </ListEnum>
        <ListEnum title="Politique impopulaire">
          <li>Choque le Sénat et la population par ses réformes religieuses radicales.</li>
          <li>Ignore les traditions politiques et rompt avec les rites ancestraux.</li>
          <li>Distribue des postes élevés à ses favoris et à des étrangers issus de Syrie.</li>
        </ListEnum>
        <ListEnum title="Tentatives de réformes sociales">
          <li>Tente de fusionner les divinités romaines sous la domination d’Élagabal.</li>
          <li>Accorde des privilèges aux femmes dans les cercles religieux, ce qui scandalise les Romains.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Politique extérieure" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Peu d’actions militaires">
          <li>Pas de grandes campagnes militaires initiées directement par Héliogabale.</li>
          <li>Stabilité maintenue grâce aux efforts des généraux locaux et de la famille impériale.</li>
        </ListEnum>
        <ListEnum title="Affaiblissement du prestige impérial">
          <li>L’obsession religieuse nuit à l’autorité de Rome dans les provinces occidentales.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Travaux et économie" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Projets religieux grandioses">
          <li>Construction du grand temple d’Élagabal sur le Palatin.</li>
          <li>Organisation de fêtes extravagantes en l’honneur du dieu solaire, dépensant des sommes colossales.</li>
        </ListEnum>
        <ListEnum title="Gaspillage financier">
          <li>Somptuosité de la cour impériale qui ruine partiellement les finances publiques.</li>
          <li>Donations inconsidérées à ses favoris et à son entourage syrien.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Vie personnelle et entourage" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Vie privée scandaleuse">
          <li>Multiples mariages, y compris avec une vestale (sacrilège majeur).</li>
          <li>Comportement perçu comme extravagant, provocateur et contraire aux mœurs romaines traditionnelles.</li>
          <li>Pratiques sexuelles non conformes aux attentes de l’élite romaine, ce qui alimente sa mauvaise réputation historique.</li>
        </ListEnum>
        <ListEnum title="Influence familiale">
          <li>Julia Maesa, sa grand-mère, contrôle l’administration en coulisses.</li>
          <li>Julia Soaemias, sa mère, a également une influence directe sur ses décisions.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Mort et succession" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum>
          <li>Face au mécontentement général, Julia Maesa favorise son cousin Alexandre Sévère.</li>
          <li>En 222 ap. J.-C., Héliogabale et sa mère sont assassinés par la garde prétorienne lors d’une mutinerie.</li>
          <li>Leurs corps sont traînés dans les rues de Rome et jetés dans le Tibre.</li>
          <li>Alexandre Sévère est proclamé empereur dans la foulée.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Bilan du règne" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Points positifs :" type="success">
          <li>Aucune guerre majeure durant son règne.</li>
          <li>Maintient global de la paix dans l'Empire grâce aux officiers militaires compétents.</li>
        </ListEnum>
        <ListEnum title="Points négatifs :" type="failure">
          <li>Instabilité religieuse et politique majeure à Rome.</li>
          <li>Hostilité généralisée du Sénat, du peuple et de l’armée.</li>
          <li>Gaspillage des ressources publiques.</li>
          <li>Perte de prestige de la fonction impériale.</li>
        </ListEnum>
      </Accordion>

      <p>
        Héliogabale reste l’un des empereurs les plus controversés et scandaleux de l’histoire romaine. Son règne est vu comme un moment de décadence extrême, mais son élimination ouvre la voie à un retour à la stabilité avec Alexandre Sévère.
      </p>
    </ReignPageLayout>

  );
}