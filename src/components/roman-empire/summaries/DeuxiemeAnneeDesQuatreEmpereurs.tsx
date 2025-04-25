import ReignPageLayout from "../../../pages/roman-empire/ReignPageLayout";
import Accordion from "../../Accordion"
import ListEnum from "../../ListEnum";

export default function Summary() {
  return (
    <ReignPageLayout reign="2ème année des 4 empereurs (192-193)">
      <p>
        L’année 193 ap. J.-C. est marquée par une crise majeure de succession impériale. Après l’assassinat de Commode, l’Empire connaît une instabilité brutale : quatre empereurs se succèdent en quelques mois. Cette période annonce la fin de la dynastie des Antonins et ouvre la voie à la prise de pouvoir de Septime Sévère.
      </p>

      <Accordion title="Les quatre empereurs de 193" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Pertinax (janvier – mars)">
          <li>Successeur désigné par les conspirateurs ayant assassiné Commode.</li>
          <li>Tente une restauration morale et financière de l’Empire.</li>
          <li>Fait face à l’hostilité de la garde prétorienne qui le tue après seulement 87 jours de règne.</li>
        </ListEnum>
        <ListEnum title="Didius Julianus (mars – juin)">
          <li>Achète littéralement le trône aux enchères auprès des prétoriens.</li>
          <li>Son accession choque profondément le Sénat et le peuple.</li>
          <li>Rapidement discrédité, il est exécuté après trois mois par ordre du Sénat.</li>
        </ListEnum>
        <ListEnum title="Pescennius Niger (proclamé en avril)">
          <li>Gouverneur de Syrie, acclamé empereur par ses troupes à Antioche.</li>
          <li>Entre en guerre contre Septime Sévère après l’exécution de Julianus.</li>
          <li>Battu en 194 lors de la bataille d'Issos, il est tué peu après.</li>
        </ListEnum>
        <ListEnum title="Clodius Albinus (reconnu brièvement comme César)">
          <li>Gouverneur de Bretagne, il conclut d’abord un accord avec Septime Sévère.</li>
          <li>Se proclame empereur après avoir rompu avec lui en 195.</li>
          <li>Définitivement vaincu par Septime Sévère à la bataille de Lugdunum en 197.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Causes de la crise" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Affaiblissement de l’autorité impériale">
          <li>Le règne fantasque de Commode a discrédité la fonction impériale.</li>
          <li>La garde prétorienne devient un acteur politique incontrôlable.</li>
        </ListEnum>
        <ListEnum title="Absence de succession claire">
          <li>Commode meurt sans héritier légitime ou désigné.</li>
          <li>Le pouvoir devient l’objet de lutte entre gouverneurs militaires influents.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Conséquences" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Avènement de Septime Sévère">
          <li>Gouverneur de Pannonie, il marche sur Rome à la tête de ses légions.</li>
          <li>Se fait reconnaître empereur par le Sénat après la chute de Julianus.</li>
          <li>Élimine tour à tour ses rivaux Niger et Albinus.</li>
        </ListEnum>
        <ListEnum title="Militarisation du pouvoir impérial">
          <li>La légitimité impériale repose désormais sur le soutien de l’armée, non du Sénat.</li>
          <li>Septime Sévère inaugure une nouvelle ère, où les empereurs sont avant tout des chefs militaires.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Bilan de l’année 193" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Points marquants" type="success">
          <li>Révèle les faiblesses du système de succession impériale.</li>
          <li>Met fin à l’illusion d’un équilibre entre Sénat, peuple et empereur.</li>
          <li>Ouvre la voie à une réforme en profondeur du pouvoir impérial sous les Sévères.</li>
        </ListEnum>
        <ListEnum title="Aspects négatifs" type="failure">
          <li>Grande instabilité politique et insécurité à Rome et dans les provinces.</li>
          <li>Montée en puissance des armées provinciales au détriment des institutions traditionnelles.</li>
          <li>Précédent dangereux d’un trône "à vendre" par la garde prétorienne.</li>
        </ListEnum>
      </Accordion>

      <p>
        L’année 193 est souvent vue comme un tournant dans l’histoire de l’Empire. Elle marque la fin de la stabilité relative des Antonins et le début d’un cycle de guerres civiles et de luttes de pouvoir fondées sur la force militaire. C’est aussi le prélude à l’ascension de Septime Sévère, qui réformera profondément les structures impériales.
      </p>
    </ReignPageLayout>

  );
}