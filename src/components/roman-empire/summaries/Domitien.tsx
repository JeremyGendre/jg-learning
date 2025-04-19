import ReignPageLayout from "../../../pages/roman-empire/ReignPageLayout";
import Accordion from "../../Accordion"
import ListEnum from "../../ListEnum";

export default function Summary() {
  return (
    <ReignPageLayout reign="Domitien">
      <p>
      Né Titus Flavius Domitianus, fils cadet de Vespasien et frère de Titus, il devient empereur après la mort prématurée de ce dernier. Son règne dure 15 ans, l’un des plus longs depuis Auguste, et mêle efficacité administrative, centralisation du pouvoir, et autoritarisme croissant.
      </p>

      <Accordion title="Politique intérieure" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Renforcement de l’autocratie">
          <li>Domitien gouverne comme un monarque absolu, réduisant le pouvoir du Sénat à une simple chambre d’enregistrement.</li>
          <li>Il se fait appeler "Dominus et Deus" ("Seigneur et Dieu"), marquant la divinisation de l’empereur de son vivant.</li>
          <li>Culte impérial intensifié, encadrement moral et religieux strict.</li>
        </ListEnum>
        <ListEnum title="Administration centralisée et efficace">
          <li>Réformes rigoureuses de l’administration provinciale : lutte contre la corruption, contrôles fréquents.</li>
          <li>Réforme de la fiscalité, meilleure répartition de l’impôt, augmentation des recettes.</li>
        </ListEnum>
        <ListEnum title="Justice et répression">
          <li>Il crée des tribunaux spéciaux et applique une justice sévère.</li>
          <li>Multiplication des condamnations pour maiestas (atteinte à la majesté de l’empereur).</li>
          <li>Nombreuses exécutions d’aristocrates, de sénateurs, et d’intellectuels : climat de suspicion.</li>
        </ListEnum>
        <ListEnum title="Politique religieuse conservatrice">
          <li>Restauration des mœurs traditionnelles, moralisation des élites.</li>
          <li>Multiplication des condamnations pour maiestas (atteinte à la majesté de l’empereur).</li>
        </ListEnum>
        <ListEnum title="Travaux et politique économique">
          <li>Grands travaux (bâtiments publics, stades, forum, temples, termes, ...)</li>
          <li>Soutien à l’agriculture et à la monnaie</li>
          <li>Développement des jeux et spectacles: Organisation de jeux somptueux, notamment des spectacles de gladiateurs et de courses de chars.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Politique extérieure" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Renforcement des frontières">
          <li>Construction de routes, fortifications et camps permanents, notamment sur le limes germanique.</li>
          <li>Édification de la première version du limes rhéno-danubien, avec fossés, palissades et tours.</li>
          <li>Domitien préfère consolider que conquérir : c’est un empereur-bâtisseur de frontières, plus qu’un conquérant.</li>
        </ListEnum>
        <ListEnum title="Campagnes militaires ">
          <li>Guerres contre les Daces (dans l’actuelle Roumanie), dirigées par Decebal : premières défaites, puis paix avec versement d’un tribut — compromis jugé humiliant par certains.</li>
          <li>Guerres en Germanie, menées pour contenir les peuples germaniques.</li>
          <li>Interventions en Bretagne (Grande-Bretagne) et en Orient pour sécuriser les provinces.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Vie personnelle et entourage" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Marié à Domitia Longina">
          <p>Leur relation est marquée par des tensions, mais elle est maintenue jusqu’à la mort de Domitien.</p>
        </ListEnum>
        <ListEnum title="Vie privée austère mais morale">
          <li>Il promeut la rigueur morale (malgré des rumeurs de débauche dans sa jeunesse).</li>
          <li>Rejet des excès de ses prédécesseurs.</li>
        </ListEnum>
        <ListEnum title="Rapports conflictuels avec l’élite sénatoriale">
          <li>Il s’appuie davantage sur les chevaliers et ses proches que sur les sénateurs.</li>
          <li>Il est détesté par une partie de l’élite, ce qui affectera sa mémoire après sa mort.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Mort et succession">
        <ListEnum>
          <li>Assassiné en 96 ap. J.-C. à l’âge de 44 ans, dans une conspiration du palais, orchestrée par des membres de son entourage immédiat, des sénateurs, las de sa tyrannie, et son propre chambellan.</li>
          <li>Sa mort met fin à la dynastie flavienne.</li>
          <li>Le Sénat damne sa mémoire (damnatio memoriae) : ses statues sont détruites, son nom effacé.</li>
          <li>Il est remplacé par Nerva, un sénateur âgé choisi par les conspirateurs.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Bilan du règne" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Points positifs :" type="success">
          <li>Long règne stable après des décennies de turbulence.</li>
          <li>Administration efficace, finances assainies, politique provinciale solide.</li>
          <li>Renforcement des frontières de l’Empire, soutien à l’agriculture et à l’armée.</li>
        </ListEnum>
        <ListEnum title="Points négatifs :" type="failure">
          <li>Autoritarisme croissant, culte personnel excessif.</li>
          <li>Répression violente de l’opposition, terreur politique à Rome.</li>
          <li>Rupture avec le Sénat, isolement progressif du pouvoir impérial.</li>
        </ListEnum>
      </Accordion>
      <p>
      L’historiographie antique (Suétone, Tacite, Pline le Jeune), écrite sous ses successeurs, est très critique envers Domitien. Des études modernes lui reconnaissent toutefois des qualités de gestionnaire et d’organisateur. Il incarne une forme d’absolutisme éclairé mais impopulaire, comparable à Tibère : efficace mais isolé.
      </p>
    </ReignPageLayout>
  );
}