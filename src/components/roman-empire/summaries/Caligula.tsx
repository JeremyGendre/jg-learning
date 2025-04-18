import Accordion from "../../Accordion"
import ListEnum from "../../ListEnum";

export default function Summary() {
  return (
    <div className="flex flex-col gap-4">
      <p>
      Né Caius Julius Caesar Germanicus, il est surnommé Caligula (« petites bottes ») par les soldats de Germanicus, son père, lorsqu’il les accompagnait enfant en campagne. Son règne, court mais intense, est souvent associé à la folie, la cruauté et la démesure, bien que certains aspects soient à nuancer.
      </p>
      <Accordion title="Politique intérieure" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Débuts prometteurs (37-38)">
          <li>À son arrivée au pouvoir, Caligula est accueilli avec enthousiasme : jeune, fils de Germanicus (très aimé du peuple), et descendant d’Auguste, il incarne l’espoir.</li>
          <li>Il accorde des amnisties, rappelle les exilés, offre des jeux somptueux et réduit certains impôts.</li>
          <li>Il restaure des droits au Sénat et aux chevaliers pour gagner du soutien politique.</li>
        </ListEnum>
        <ListEnum title="Tournant après une grave maladie (fin 37)">
          <li>Il souffre d’une maladie mystérieuse peu après son accession. À sa guérison, son comportement change radicalement (paranoïa, cruauté, extravagance).</li>
          <li>Il élimine ou humilie ceux qu’il soupçonne d’avoir souhaité sa mort pendant sa maladie (y compris des membres de sa propre famille).</li>
        </ListEnum>
        <ListEnum title="Tournant après une grave maladie (fin 37)">
          <li>Il impose son autorité de manière brutale, humilie des sénateurs publiquement, les contraint à des formes de vénération proche du culte divin.</li>
          <li>Il semble vouloir abolir la fiction républicaine du Principat instaurée par Auguste, se présentant comme un roi ou un dieu vivant.</li>
        </ListEnum>
        <ListEnum title="Règne de terreur">
          <li>Les accusations, arrestations et exécutions sommaires se multiplient. Il utilise la peur pour gouverner, tout en isolant le Sénat et l’armée.</li>
          <li>Il taxe lourdement les provinces et les citoyens pour financer ses folies (notamment des jeux, temples, et constructions gigantesques).</li>
          <li>La cour impériale devient un lieu de complots, de tensions et de coups de théâtre constants. La légitimité même de son pouvoir est de plus en plus contestée.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Politique extérieure" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Expéditions symboliques ou absurdes">
          <li>Il organise une campagne militaire vers la Germanie et la Bretagne, mais elle s’arrête brusquement : selon les sources, il fait ramasser des coquillages sur la plage comme "butin de guerre", épisode souvent cité comme preuve de sa folie.</li>
          <li>Toutefois, certaines de ces expéditions semblent avoir eu un objectif réel de consolidation des frontières, sans être aussi absurdes que le suggèrent les récits hostiles.</li>
        </ListEnum>
        <ListEnum title="Renforcement du pouvoir impérial en Orient ">
          <li>Il impose des règlements religieux aux communautés locales (notamment en Judée), provoquant des tensions avec les Juifs.</li>
          <li>Il multiplie les nominations de souverains clients, souvent issus de son entourage personnel.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Personnalité et entourage" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Culte impérial exacerbé">
          <li>Caligula se fait représenter comme un dieu vivant, ordonne qu’on lui rende un culte, s’identifie à Jupiter, Mercure ou Apollon.</li>
          <li>Il installe une statue de lui dans le Temple de Jérusalem (jamais posée, grâce à l’intervention de Pétronius, gouverneur de Syrie), ce qui scandalise les Juifs.</li>
        </ListEnum>
        <ListEnum title="Excentricités célèbres">
          <li>Il organise des fêtes somptueuses et parfois choquantes.</li>
          <li>Il aurait voulu nommer son cheval Incitatus consul (signe de mépris envers le Sénat, ou satire politique ?).</li>
          <li>Il multiplie les dépenses extravagantes, dilapidant l’héritage financier laissé par Tibère.</li>
        </ListEnum>
        <ListEnum title="Relations familiales troubles">
          <li>Il fait exécuter ou exiler ses sœurs (notamment Drusilla, avec qui des rumeurs d’inceste circulent).</li>
          <li>Il se méfie de tout son entourage, y compris de ses alliés initiaux.</li>
        </ListEnum>
      </Accordion>
      <Accordion title="Mort et succession">
        <ListEnum>
          <li>Caligula est tué lors d’un complot orchestré par des officiers de la garde prétorienne, notamment Cassius Chaerea, qu’il avait publiquement ridiculisé.</li>
          <li>Il est assassiné dans un couloir du palais impérial, ainsi que sa femme Cæsonia et leur fille.</li>
          <li>Le Sénat tente brièvement de restaurer la République, mais la garde prétorienne impose rapidement Claude, oncle de Caligula, comme nouvel empereur.</li>
        </ListEnum>
      </Accordion>
      <Accordion title="Bilan du règne" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Points positifs :" type="success">
          <li>Débuts prometteurs, réformes populaires.</li>
          <li>Tentative (même maladroite) d’affirmer pleinement le caractère monarchique de l’Empire.</li>
          <li>Quelques projets d’infrastructures utiles (canaux, routes, ports).</li>
        </ListEnum>
        <ListEnum title="Points négatifs :" type="failure">
          <li>Gaspillage des finances publiques.</li>
          <li>Répression arbitraire et règne de la peur.</li>
          <li>Isolement complet du pouvoir, rupture avec le Sénat, l’armée et le peuple.</li>
          <li>Instabilité qui menace les fondements mêmes du Principat.</li>
        </ListEnum>
      </Accordion>
      <p>
      Beaucoup de ce que nous savons de Caligula vient de sources hostiles, notamment Suétone, Dion Cassius et Tacite. Ces auteurs, très critiques envers l’absolutisme impérial, ont sans doute noirci le tableau. Si Caligula a été clairement instable et dangereux, il a aussi été victime d’une propagande posthume intense, utilisée pour justifier sa chute.
      </p>
    </div>
  );
}