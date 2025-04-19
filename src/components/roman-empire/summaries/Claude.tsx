import ReignPageLayout from "../../../pages/roman-empire/ReignPageLayout";
import Accordion from "../../Accordion"
import ListEnum from "../../ListEnum";

export default function Summary() {
  return (
    <ReignPageLayout reign="Claude">
      <p>
      Né Tiberius Claudius Drusus, il est le premier empereur né hors d’Italie (à Lugdunum, Lyon) et succède à Caligula suite à un coup de force de la garde prétorienne. Issu de la famille impériale mais longtemps écarté du pouvoir à cause de son handicap physique et son image d’intellectuel, il surprend par la stabilité et la richesse de son règne.
      </p>

      <Accordion title="Politique intérieure" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Arrivée inattendue au pouvoir">
          <li>Il est proclamé empereur par la garde prétorienne après l’assassinat de Caligula, alors que le Sénat voulait restaurer la République.</li>
          <li>Il récompense la garde avec une forte prime (donativum), ce qui renforce leur rôle politique.</li>
        </ListEnum>
        <ListEnum title="Restauration de l’ordre">
          <li>Il met fin au chaos laissé par Caligula, renforce l’autorité impériale tout en maintenant une collaboration avec le Sénat.</li>
          <li>Il lutte contre la corruption et réforme la justice, en rendant les procès plus accessibles.</li>
        </ListEnum>
        <ListEnum title="Réformes administratives">
          <li>Développement de l’administration impériale avec un rôle accru pour les affranchis impériaux (comme Narcisse ou Pallas), ce qui lui attire la méfiance de l’aristocratie sénatoriale.</li>
          <li>Il crée de nouvelles magistratures et réorganise les provinces.</li>
        </ListEnum>
        <ListEnum title="Infrastructures et travaux publics">
          <li>Grands projets de construction : port d’Ostie, aqueducs, assèchement du lac Fucin.</li>
          <li>Politique volontariste pour améliorer le ravitaillement de Rome en blé.</li>
        </ListEnum>
        <ListEnum title="Politique sociale">
          <li>Il accorde la citoyenneté romaine à de nombreuses communautés, notamment en Gaule.</li>
          <li>Il fait entrer des notables provinciaux au Sénat, ouvrant la voie à une romanisation plus profonde de l’Empire.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Politique extérieure" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Conquête de la Bretagne (Britannia)">
          <li>En 43 ap. J.-C., il lance une expédition militaire victorieuse qui aboutit à l’annexion de la Bretagne, symboliquement dirigée par lui-même.</li>
          <li>Il célèbre un triomphe à Rome – fait rare pour un empereur depuis Auguste.</li>
        </ListEnum>
        <ListEnum title="Expansion de l’Empire">
          <li>Annexion de la Maurétanie (Afrique du Nord), de la Thrace, du Noricum, de la Lycie.</li>
          <li>Création de nouvelles provinces et développement du réseau de routes impériales.</li>
        </ListEnum>
        <ListEnum title="Stabilisation des frontières">
          <li>Il confie les campagnes militaires à des généraux de confiance (notamment son gendre Aulus Plautius en Bretagne).</li>
          <li>Maintien d’une paix relative sur le Danube et en Orient grâce à une diplomatie active.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Vie personnelle et entourage" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Claude et les femmes">
          <li>Il se marie plusieurs fois, dont avec Messaline, connue pour ses intrigues et sa vie dissolue.</li>
          <li>Messaline complote contre lui, et Claude la fait exécuter en 48 ap. J.-C.</li>
          <li>Il épouse ensuite Agrippine la Jeune, sa nièce, pour consolider la dynastie. Elle le pousse à adopter son fils, Néron.</li>
        </ListEnum>
        <ListEnum title="Influence des affranchis et des femmes ">
          <li>Il s’appuie beaucoup sur ses affranchis, devenus secrétaires impériaux puissants.</li>
          <li>Cela provoque des critiques du Sénat, qui se sent marginalisé.</li>
        </ListEnum>
        <ListEnum title="Claude l’érudit">
          <li>Passionné d’histoire, de droit et de linguistique, il écrit de nombreux ouvrages (aujourd’hui perdus).</li>
          <li>Il tente de réformer l’alphabet latin, sans succès.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Mort et succession">
        <ListEnum title="Mort en 54 ap. J.-C., probablement empoisonné">
          <li>Selon la tradition (notamment Suétone et Tacite), il aurait été empoisonné par Agrippine avec des champignons pour favoriser l’avènement de son fils Néron, avant que Claude ne change sa succession.</li>
          <li>Il meurt à 63 ans, après 13 années de règne.</li>
          <li>Agrippine parvient à imposer Néron, encore adolescent, au détriment de Britannicus, fils biologique de Claude.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Bilan du règne" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Points positifs :" type="success">
          <li>Renforcement et modernisation de l’appareil d’État.</li>
          <li>Conquêtes territoriales notables, notamment la Bretagne.</li>
          <li>Intégration des provinces, extension de la citoyenneté romaine.</li>
          <li>Développement d’infrastructures durables.</li>
        </ListEnum>
        <ListEnum title="Points négatifs :" type="failure">
          <li>Dépendance forte à des personnages peu légitimes (affranchis, impératrices), jugée comme une faiblesse par l’aristocratie.</li>
          <li>L’image d’un empereur manipulé, peu charismatique, parfois ridiculisé.</li>
          <li>Instabilité dynastique en fin de règne, prélude aux conflits sous Néron.</li>
        </ListEnum>
      </Accordion>
      <p>Claude a longtemps souffert d’une image de marionnette dominée par les femmes et les affranchis, véhiculée par les historiens antiques. Mais les recherches modernes le réhabilitent en tant qu’administrateur efficace, réformateur pragmatique, et empereur soucieux de l’unité de l’Empire. S’il manquait peut-être d’autorité politique personnelle, son règne fut stable et structurant.</p>
    </ReignPageLayout>
  );
}