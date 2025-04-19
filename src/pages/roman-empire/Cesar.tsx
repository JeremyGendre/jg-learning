import Accordion from "../../components/Accordion";
import ListEnum from "../../components/ListEnum";

export default function CesarPage() {
  return (
    <div className="flex flex-col w-full h-full gap-4 flex-wrap">
      <Accordion title="Résumé" defaultOpen>
        <ListEnum title="Conquérant brillant">
          <li>César est surtout connu pour sa conquête de la Gaule (58–50 av. J.-C.), où il soumet de nombreuses tribus, dont celle de Vercingétorix à Alésia (-52).</li>
          <li>Il mène aussi des campagnes éclair en Grande-Bretagne et en Germanie, marquant la puissance romaine au nord.</li>
        </ListEnum>
        <ListEnum title="Homme politique ambitieux">
          <li>Il forme le Premier Triumvirat avec Pompée et Crassus.</li>
          <li>Après sa guerre des Gaules, il entre en conflit avec le Sénat et franchit le Rubicon en -49, déclenchant une guerre civile.</li>
          <li>Vainqueur de Pompée, il devient dictateur à vie en -44.</li>
        </ListEnum>
        <ListEnum title="Populaire auprès du peuple">
          <li>Le peuple romain l’admire pour ses victoires militaires, ses largesses (jeux, distributions de blé), et ses réformes sociales.</li>
          <li>Il donne du travail, étend le droit de cité, et réorganise le calendrier (→ calendrier julien).</li>
        </ListEnum>
        <ListEnum title="Redouté par les élites">
          <li>Le Sénat voit en lui un tyran en devenir, car il concentre tous les pouvoirs.</li>
          <li>Il est accusé de vouloir devenir roi, ce qui est insupportable à l’aristocratie républicaine.</li>
        </ListEnum>
        <ListEnum title="Assassinat en 44 av. J.-C.">
          <li>Trahi par des sénateurs, dont Brutus et Cassius, il est tué aux Ides de mars dans la Curie de Pompée.</li>
          <li>Sa mort plonge Rome dans un nouveau cycle de guerres civiles.</li>
        </ListEnum>
      </Accordion>
      <Accordion title="Dates clés">
        <ListEnum title="100 av. J.-C. – Naissance de Caius Julius Caesar" listStyle="none">
          <li>Né dans une famille patricienne de Rome, le 12 ou 13 juillet 100 av. J.-C.</li>
        </ListEnum>
        <ListEnum title="84 av. J.-C. – Mariage avec Cornelia" listStyle="none">
          <li>Fille de Cinna, un partisan de Marius (ennemi de Sylla). César prend position contre Sylla.</li>
        </ListEnum>
        <ListEnum title="82-78 av. J.-C. – Dictature de Sylla" listStyle="none">
          <li>César est brièvement proscrit par Sylla mais sauvé grâce à l'intervention de sa famille. Il s’exile temporairement.</li>
        </ListEnum>
        <ListEnum title="73 av. J.-C. – Devient pontife, puis élu tribun militaire" listStyle="none">
          <li>Début de sa carrière publique et religieuse.</li>
        </ListEnum>
        <ListEnum title="69-68 av. J.-C. – Questeur en Hispanie" listStyle="none">
          <li>Première fonction importante. Mort de sa femme Cornelia.</li>
        </ListEnum>
        <ListEnum title="63 av. J.-C. – Élu Grand Pontife (Pontifex Maximus)" listStyle="none">
          <li>Une des charges religieuses les plus élevées de Rome, à seulement 37 ans.</li>
        </ListEnum>
        <ListEnum title="61-60 av. J.-C. – Propreteur en Hispanie ultérieure" listStyle="none">
          <li>Il mène des campagnes militaires victorieuses et gagne l’estime de ses soldats.</li>
        </ListEnum>
        <ListEnum title="60 av. J.-C. – Formation du Premier Triumvirat" listStyle="none">
          <li>Alliance politique informelle avec Pompée et Crassus pour se soutenir mutuellement.</li>
        </ListEnum>
        <ListEnum title="59 av. J.-C. – Consul de Rome" listStyle="none">
          <li>César devient consul pour la première fois. Mariage politique entre sa fille Julia et Pompée.</li>
        </ListEnum>
        <ListEnum title="58-50 av. J.-C. – Guerre des Gaules" listStyle="none">
          <li>César conquiert la Gaule, jusqu’au Rhin et la Manche. Victoires majeures contre les Helvètes, les Belges, et Vercingétorix à Alésia (52 av. J.-C.).</li>
        </ListEnum>
        <ListEnum title="49 av. J.-C. – Franchit le Rubicon" listStyle="none">
          <li>Déclenche la guerre civile contre Pompée. Citation célèbre : « Alea jacta est » (« Le sort en est jeté »).</li>
        </ListEnum>
        <ListEnum title="48 av. J.-C. – Bataille de Pharsale" listStyle="none">
          <li>Victoire décisive contre Pompée, qui s’enfuit en Égypte et est assassiné.</li>
        </ListEnum>
        <ListEnum title="48-47 av. J.-C. – Rencontre Cléopâtre en Égypte" listStyle="none">
          <li>Relation célèbre. Il aide Cléopâtre à prendre le pouvoir. Naissance de leur fils Césarion.</li>
        </ListEnum>
        <ListEnum title="46 av. J.-C. – Retour à Rome et dictature" listStyle="none">
          <li>César est nommé dictateur pour dix ans, réforme le calendrier romain (calendrier julien).</li>
        </ListEnum>
        <ListEnum title="44 av. J.-C. – Nommé dictateur à vie" listStyle="none">
          <li>Cela inquiète les sénateurs républicains, qui craignent une monarchie.</li>
        </ListEnum>
        <ListEnum title="15 mars 44 av. J.-C. – Assassinat de César" listStyle="none">
          <li>Tué par un groupe de sénateurs, dont son protégé Brutus, lors des Ides de mars. Derniers mots célèbres (selon Shakespeare) : « Tu quoque, fili mi ? » (Toi aussi, mon fils ?).</li>
        </ListEnum>
      </Accordion>
    </div>
  );
}