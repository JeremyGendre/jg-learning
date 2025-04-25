import ReignPageLayout from "../../../pages/roman-empire/ReignPageLayout";
import Accordion from "../../Accordion"
import ListEnum from "../../ListEnum";

export default function Summary() {
  return (
    <ReignPageLayout reign="Marc Aurèle">
      <p>
        Marcus Aurelius Antoninus règne de 161 à 180 ap. J.-C. Philosophe stoïcien, il incarne l’idéal du souverain sage et vertueux. Son règne, pourtant, est marqué par de nombreuses crises militaires, une pandémie dévastatrice, et une succession moins bien assurée que ses prédécesseurs. Il gouverne d’abord en tandem avec Lucius Verus, puis seul après la mort de ce dernier.
      </p>

      <Accordion title="Politique intérieure" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Philosophe sur le trône">
          <li>Influencé par le stoïcisme, il gouverne avec un sens aigu du devoir et de la justice.</li>
          <li>Son œuvre, <i>Les Pensées</i>, rédigée en grec, est un chef-d’œuvre de réflexion éthique personnelle.</li>
        </ListEnum>
        <ListEnum title="Administration et justice">
          <li>Renforce les contrôles sur les gouverneurs de province pour limiter les abus.</li>
          <li>Protège les orphelins, les pupilles de l'État, les esclaves maltraités.</li>
          <li>Maintien de la politique sociale des Antonins, malgré les dépenses militaires.</li>
        </ListEnum>
        <ListEnum title="Crises internes">
          <li>Affronte de graves difficultés économiques à cause des guerres et de la peste antonine.</li>
          <li>Doit augmenter les impôts, vendre les biens impériaux, mais refuse toute tyrannie fiscale.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Politique extérieure" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Guerres en Orient (161–166)">
          <li>Lucius Verus dirige la guerre contre les Parthes avec succès.</li>
          <li>Prise de Ctésiphon, mais l’armée revient avec la peste antonine, qui se propage dans tout l’Empire.</li>
        </ListEnum>
        <ListEnum title="Guerres marcomaniques (166–180)">
          <li>Affrontements longs et difficiles contre des peuples germaniques au nord du Danube.</li>
          <li>Marc Aurèle passe de nombreuses années sur le front, près de la frontière.</li>
          <li>Victoire difficile, mais il renonce à annexer durablement les territoires ennemis.</li>
        </ListEnum>
        <ListEnum title="Politique de défense">
          <li>Renforce les frontières danubiennes et rhénanes.</li>
          <li>Crée de nouvelles légions pour faire face à la pression barbare.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Travaux et économie" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Économie affaiblie">
          <li>Efforts de guerre et pandémie fragilisent le trésor impérial.</li>
          <li>Vente de trésors personnels pour financer les campagnes militaires.</li>
        </ListEnum>
        <ListEnum title="Soutien aux provinces sinistrées">
          <li>Envoie des aides d’urgence aux villes ravagées par la peste.</li>
          <li>Tente de maintenir les distributions alimentaires à Rome malgré les pénuries.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Vie personnelle et entourage" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Empereur philosophe">
          <li>Vie sobre, marquée par la méditation et les devoirs impériaux.</li>
          <li>Écrit <i>Les Pensées</i> pendant les campagnes militaires.</li>
        </ListEnum>
        <ListEnum title="Vie de famille">
          <li>Époux de Faustine la Jeune, dont la fidélité est sujette à débat.</li>
          <li>Père de nombreux enfants, mais la plupart meurent jeunes.</li>
        </ListEnum>
        <ListEnum title="Succession dynastique">
          <li>Choisit son fils Commode comme successeur, rompant avec la tradition de l’adoption méritocratique.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Mort et succession">
        <ListEnum>
          <li>Meurt en 180 ap. J.-C., probablement de la peste, à Vindobona (Vienne actuelle).</li>
          <li>Divinisé par le Sénat, salué comme le dernier des bons empereurs.</li>
          <li>Commode lui succède, mais son règne est jugé désastreux.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Bilan du règne" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Points positifs" type="success">
          <li>Empereur lettré, juste, soucieux du bien commun.</li>
          <li>Résistance admirable face aux multiples crises (guerres, peste, économie).</li>
          <li>Laisse une œuvre philosophique majeure dans l’histoire de la pensée antique.</li>
        </ListEnum>
        <ListEnum title="Points négatifs" type="failure">
          <li>Règne marqué par des conflits incessants et des pertes humaines lourdes.</li>
          <li>Choix controversé de Commode comme héritier.</li>
          <li>Moins d’innovation politique que ses prédécesseurs, priorité donnée à la survie.</li>
        </ListEnum>
      </Accordion>

      <p>
        Marc Aurèle reste une figure emblématique de la Rome antique : philosophe stoïcien, dirigeant courageux face aux épreuves, il incarne la sagesse et la dignité impériale. Son règne clôt l'âge d'or de l'Empire, avant une longue période d'instabilité.
      </p>
    </ReignPageLayout>
  );
}