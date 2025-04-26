import ReignPageLayout from "../../../pages/roman-empire/ReignPageLayout";
import Accordion from "../../Accordion"
import ListEnum from "../../ListEnum";

export default function Summary() {
  return (
    <ReignPageLayout reign="Tétrarchies et dynastie des Constantiniens">
      <p>
        De 284 à 364, l'Empire romain traverse d'importantes transformations institutionnelles, militaires et religieuses.
        Dioclétien inaugure la Tétrarchie pour stabiliser l’Empire, mais les conflits internes aboutissent à la montée de Constantin Ier et de sa dynastie, qui marquera profondément l’histoire romaine, notamment par la christianisation progressive de l’Empire.
      </p>

      <Accordion title="Contexte général" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum>
          <li>Après la crise du IIIᵉ siècle, besoin d’une nouvelle organisation politique pour renforcer l’autorité impériale.</li>
          <li>Multiplication des menaces extérieures (Goths, Perses, Francs) et internes (usurpations fréquentes).</li>
          <li>Transition vers un Empire chrétien amorcée sous Constantin Ier.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="La Tétrarchie (284-313)" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Mise en place par Dioclétien">
          <li>Division du pouvoir entre deux Augustes (Dioclétien et Maximien) et deux Césars (Galère et Constance Chlore).</li>
          <li>Chacun gouverne une partie de l'Empire pour mieux le défendre et administrer.</li>
        </ListEnum>
        <ListEnum title="Réformes majeures">
          <li>Réforme administrative : création de diocèses et multiplication des provinces.</li>
          <li>Réforme militaire : séparation de l'armée de garnison et des forces mobiles (comitatenses).</li>
          <li>Réforme fiscale : instauration d'un impôt plus rationnel (capitatio-jugatio).</li>
          <li>Persécution systématique des chrétiens à partir de 303 (Grande Persécution).</li>
        </ListEnum>
        <ListEnum title="Fin de la Tétrarchie">
          <li>Conflits de succession après l'abdication de Dioclétien en 305.</li>
          <li>Multiplication des guerres civiles entre prétendants au pouvoir (dont Constantin et Maxence).</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Dynastie des Constantiniens (313-364)" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Constantin Ier et ses fils">
          <li>Constantin Ier (306-337) réunifie l’Empire et fonde Constantinople (330).</li>
          <li>Introduction progressive du christianisme comme religion favorisée par l’État.</li>
          <li>À sa mort, ses fils se partagent l’Empire (Constance II, Constantin II, Constant Ier).</li>
        </ListEnum>
        <ListEnum title="Conflits entre ses descendants">
          <li>Guerres fratricides : Constantin II et Constant Ier s'affrontent, puis Constance II reste seul empereur en 353.</li>
          <li>Constance II lutte contre les Perses et les troubles internes (révoltes usurpatrices).</li>
        </ListEnum>
        <ListEnum title="Julien (361-363)">
          <li>Julien, dit "l'Apostat", tente de restaurer le paganisme et réduire l'influence chrétienne.</li>
          <li>Meurt en campagne contre les Perses en 363 sans laisser d’héritier.</li>
        </ListEnum>
        <ListEnum title="Jovien (363-364)">
          <li>Élu par l'armée après la mort de Julien.</li>
          <li>Conclut rapidement une paix défavorable avec les Perses pour sauver l’armée romaine.</li>
          <li>Meurt après un règne très court (moins d'un an).</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Politique intérieure" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Réformes administratives">
          <li>Division de l’Empire en unités plus petites pour une meilleure gouvernance.</li>
          <li>Création du poste de préfet du prétoire civil.</li>
        </ListEnum>
        <ListEnum title="Évolution religieuse">
          <li>Christianisme d'abord persécuté, puis favorisé et protégé sous Constantin Ier.</li>
          <li>Concile de Nicée (325) : affirmation de l’orthodoxie chrétienne contre l'arianisme.</li>
        </ListEnum>
        <ListEnum title="Économie et fiscalité">
          <li>Poids croissant de la fiscalité pour soutenir l'administration et l'armée.</li>
          <li>Introduction du solidus d'or par Constantin, qui deviendra la base monétaire de l’Empire jusqu'au Moyen Âge.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Politique extérieure" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Pressions barbares constantes">
          <li>Conflits permanents sur le Danube contre Goths, Vandales, Quades et Sarmates.</li>
          <li>Campagnes contre l’Empire Sassanide à l’est, notamment sous Julien.</li>
        </ListEnum>
        <ListEnum title="Défense des frontières">
          <li>Renforcement des fortifications du limes rhénan et danubien.</li>
          <li>Politique de foederati : intégration de peuples barbares en échange d'un service militaire.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Bilan de la période" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Points positifs" type="success">
          <li>Stabilisation progressive après les crises du IIIᵉ siècle grâce à la Tétrarchie.</li>
          <li>Christianisation progressive de l’Empire, processus majeur de l’histoire mondiale.</li>
          <li>Réformes administratives et militaires durables.</li>
        </ListEnum>
        <ListEnum title="Points négatifs" type="failure">
          <li>Instabilité récurrente en raison des successions mal contrôlées.</li>
          <li>Poids fiscal croissant sur la population.</li>
          <li>Affaiblissement de l'unité religieuse avec la montée de l'arianisme et autres hérésies.</li>
        </ListEnum>
      </Accordion>

      <p>
        La période des Tétrarchies et de la dynastie constantinienne transforme en profondeur l’Empire romain.
        Elle marque la transition vers une monarchie plus absolue, fortement militarisée et progressivement chrétienne, préparant les évolutions futures de l’Antiquité tardive.
      </p>
    </ReignPageLayout>

  );
}