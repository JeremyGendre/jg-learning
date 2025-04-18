import Accordion from "../../Accordion"
import ListEnum from "../../ListEnum";

export default function Summary() {
  return (
    <div className="flex flex-col gap-4">
      <p>
      Né Lucius Domitius Ahenobarbus, il devient empereur à 17 ans sous le nom de Nero Claudius Caesar Augustus Germanicus après avoir été adopté par Claude. Son règne, d’abord prometteur, glisse progressivement vers l’autoritarisme, les excès, et la révolte générale.
      </p>

      <Accordion title="Politique intérieure" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Débuts modérés (54–59)">
          <li>Durant les premières années, Néron gouverne avec modération, influencé par sa mère Agrippine, son précepteur Sénèque et le préfet du prétoire Burrus.</li>
          <li>Il limite les procès pour crime de lèse-majesté, réduit les impôts, et se montre soucieux de l'opinion publique.</li>
        </ListEnum>
        <ListEnum title="Rupture avec Agrippine">
          <li>Agrippine tente de garder un pouvoir sur lui, mais Néron s’en affranchit rapidement.</li>
          <li>Il fait assassiner sa mère en 59 ap. J.-C. après plusieurs tentatives ratées (naufrage, poison, poignard).</li>
        </ListEnum>
        <ListEnum title="Concentration du pouvoir">
          <li>Après la mort de Burrus (62) et le retrait de Sénèque, Néron gouverne sans réel contre-pouvoir.</li>
          <li>Début des répressions politiques, notamment contre les aristocrates soupçonnés de complot.</li>
          <li>Mise en place d’un climat de peur et de délation, intensifié après la conjuration de Pison (65), qui entraîne une vague d’exécutions (dont Sénèque).</li>
        </ListEnum>
        <ListEnum title="Grand incendie de Rome (64 ap. J.-C.)">
          <li>L’incendie détruit une grande partie de la ville ; Néron organise des secours et reconstruit la ville selon un nouveau plan urbain.</li>
          <li>Mais des rumeurs l’accusent d’en être à l’origine pour faire place à son Domus Aurea (palais démesuré).</li>
          <li>Il accuse alors les chrétiens d’avoir provoqué l’incendie, déclenchant la première persécution officielle de ce groupe à Rome.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Politique extérieure" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Révoltes en provinces">
          <li>Révolte en Britannia menée par la reine Boudicca (60–61) contre la domination romaine : répression sanglante, mais Rome conserve la province.</li>
        </ListEnum>
        <ListEnum title="Affaires militaires en Orient">
          <li>Conflit avec les Parthes en Arménie : son général Corbulon mène une campagne victorieuse, mais les résultats sont diplomatiquement compromis ensuite.</li>
        </ListEnum>
        <ListEnum title="Désintérêt croissant pour les affaires militaires">
          <li>Néron ne s'intéresse guère aux campagnes militaires, préférant les arts et les spectacles.</li>
          <li>Il confie les opérations à ses généraux, mais leur popularité devient un danger pour lui.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Vie personnelle et artistique" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Passion pour les arts">
          <li>Néron se veut poète, chanteur, acteur, aurige : il se produit en public, ce qui choque les élites romaines.</li>
          <li>Il participe aux Jeux néréens et à des concours artistiques en Grèce (où il remporte… tous les prix).</li>
        </ListEnum>
        <ListEnum title="Mariages et scandales">
          <li>Il fait tuer sa première épouse Octavie, fille de Claude, puis épouse Poppée, qu’il tue accidentellement (selon les sources), avant d’épouser Statilia Messalina.</li>
          <li>Il épouse aussi un esclave eunuque, Sporus, qu’il fait castrer, suscitant la stupeur générale.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Fin de règne et chute">
        <ListEnum title="Isolement progressif">
          <li>Il s’éloigne du Sénat, du peuple et des légions.</li>
          <li>Ses dépenses somptuaires vident le trésor, entraînant des augmentations fiscales et la confiscation de fortunes privées.</li>
        </ListEnum>
        <ListEnum title="Révoltes militaires (68 ap. J.-C.)">
          <li>Les légions en Gaule (Vindex), puis en Hispanie (Galba), se soulèvent.</li>
          <li>Le Sénat retire sa confiance à Néron et le déclare ennemi public.</li>
        </ListEnum>
        <ListEnum title="Suicide de Néron (juin 68)">
          <li>Traqué, il se suicide à 30 ans avec l’aide d’un esclave, en murmurant : "Qualis artifex pereo" — "Quel artiste périt avec moi !"</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Bilan du règne" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Points positifs :" type="success">
          <li>Règne relativement stable et pacifié dans ses premières années.</li>
          <li>Réformes monétaires, aménagements urbains, politiques de spectacles pour le peuple.</li>
          <li>Mise en valeur des arts et de la culture grecque.</li>
        </ListEnum>
        <ListEnum title="Points négatifs :" type="failure">
          <li>Autoritarisme croissant, persécutions politiques, climat de terreur.</li>
          <li>Affaiblissement de l’autorité impériale et des finances.</li>
          <li>Déconnexion avec les élites et les militaires.</li>
          <li>Ses extravagances et ses meurtres ont terni durablement son image.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Postérité" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum>
          <li>Néron reste l’un des empereurs les plus haïs par les historiens antiques (Suétone, Tacite, Dion Cassius).</li>
          <li>Il devient un symbole du tyran fou, cruel, narcissique, mais cette image est en partie biaisée par ses opposants sénatoriaux.</li>
          <li>Il a été divinisé dans l'Est de l'Empire après sa mort, et des rumeurs de son retour ont circulé pendant des années (Néron redivivus).</li>
        </ListEnum>
      </Accordion>
    </div>
  );
}