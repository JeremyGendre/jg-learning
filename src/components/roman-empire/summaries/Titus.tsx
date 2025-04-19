import ReignPageLayout from "../../../pages/roman-empire/ReignPageLayout";
import Accordion from "../../Accordion"
import ListEnum from "../../ListEnum";

export default function Summary() {
  return (
    <ReignPageLayout reign="Titus">
      <p>
      Fils aîné de Vespasien, Titus Flavius Caesar Vespasianus Augustus est le premier empereur romain succédant à son père biologique sans conflit. Général victorieux en Judée, il devient empereur à 40 ans et laisse l’image d’un souverain juste, bienveillant et aimé du peuple.
      </p>

      <Accordion title="Politique intérieure" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Continuité avec Vespasien">
          <li>Titus poursuit la politique de modération, d’efficacité administrative et de gestion rigoureuse des finances initiée par son père.</li>
          <li>Il respecte les institutions, entretient de bons rapports avec le Sénat, et gouverne dans un esprit de justice et de clémence.</li>
        </ListEnum>
        <ListEnum title="Sympathie populaire">
          <li>Il se montre accessible, généreux, charitable : de nombreuses sources (comme Suétone) insistent sur son humanité.</li>
          <li>Il instaure une politique de dons et d’aides lors des catastrophes.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Politique extérieure" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Fin de la guerre en Judée (66–73)">
          <li>Avant son règne, il mène victorieusement la campagne de Judée, notamment avec la prise de Jérusalem (70 ap. J.-C.).</li>
          <li>Il transporte le trésor du Temple à Rome ; les fonds servent à financer le Colisée et d’autres monuments.</li>
          <li>La victoire est célébrée par l’Arc de Titus, qui montre la Ménorah et les objets sacrés juifs.</li>
        </ListEnum>
        <ListEnum title="Maintien de la paix">
          <li>Durant son court règne, aucune grande campagne militaire n’est entreprise.</li>
          <li>Il veille à la stabilité et à la pacification des provinces.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Événements marquants de son règne" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Éruption du Vésuve (24 août 79 ap. J.-C.)">
          <li>Éruption du Vésuve (24 août 79 ap. J.-C.)</li>
          <li>Grand incendie de Rome (80 ap. J.-C.)</li>
          <li>Épidémie (probablement de peste)</li>
          <li>A chaque fois, Titus organise rapidement les secours et les soutiens financiers pour venir en aide au peuple.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Vie personnelle et entourage" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Popularité auprès du peuple">
          <p>Il était redouté avant son règne à cause de ses excès de jeunesse et de sa brutalité en Judée, mais il se transforme en souverain exemplaire.</p>
        </ListEnum>
        <ListEnum title="Relation avec Bérénice">
          <p>Il entretient une relation amoureuse avec la princesse juive Bérénice, mais doit y mettre fin pour ne pas heurter l’opinion romaine.</p>
        </ListEnum>
        <ListEnum title="Soutien à son frère Domitien">
          <p>Il associe Domitien à certaines responsabilités, sans jamais lui accorder un vrai rôle politique.</p>
        </ListEnum>
      </Accordion>

      <Accordion title="Mort et succession">
        <ListEnum title="Mort prématurée en 81 ap. J.-C. à 42 ans, après seulement 2 ans de règne.">
          <li>Les causes exactes restent floues : maladie soudaine (fièvre, diarrhée) ou empoisonnement ?</li>
          <li>Des rumeurs suggèrent que son frère Domitien pourrait être impliqué, mais cela reste hypothétique.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Bilan du règne" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Points positifs :" type="success">
          <li>Règne juste, modéré, bienveillant.</li>
          <li>Gère avec efficacité plusieurs catastrophes naturelles.</li>
          <li>Populaire auprès du peuple et respecté par le Sénat.</li>
          <li>Soutient les arts, les jeux publics, et les constructions (inauguration du Colisée en 80).</li>
        </ListEnum>
        <ListEnum title="Points négatifs :" type="failure">
          <li>Très court règne, peu de réformes à long terme.</li>
          <li>Aucune politique militaire nouvelle.</li>
          <li>Mystère autour de sa mort et de sa succession.</li>
        </ListEnum>
      </Accordion>
      <p>
      Titus est considéré comme l’un des meilleurs empereurs de Rome par les auteurs antiques (Suétone, Tacite). Il est souvent vu comme le "bon empereur éphémère", à la fois héros militaire et souverain philanthrope. Son règne contraste fortement avec celui de son frère Domitien, plus autoritaire.
      </p>
    </ReignPageLayout>
  );
}