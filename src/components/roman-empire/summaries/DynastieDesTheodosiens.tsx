import ReignPageLayout from "../../../pages/roman-empire/ReignPageLayout";
import Accordion from "../../Accordion"
import ListEnum from "../../ListEnum";

export default function Summary() {
  return (
    <ReignPageLayout reign="Dynastie des Théodosiens">
      <p>
        La dynastie des Théodosiens couvre une période de profondes transformations pour l’Empire romain.
        Fondée par Théodose Ier, elle est marquée par la division définitive de l’Empire entre Orient et Occident, la montée en puissance du christianisme, et les premières pertes majeures de territoires en Occident.
      </p>

      <Accordion title="Contexte général" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum>
          <li>Après la mort de Valens à Andrinople (378), Théodose Ier est proclamé empereur d’Orient en 379.</li>
          <li>Consolidation du christianisme comme religion d’État sous Théodose Ier.</li>
          <li>À la mort de Théodose en 395, l’Empire est définitivement divisé entre ses deux fils : Arcadius (Orient) et Honorius (Occident).</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Empereurs principaux" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Théodose Ier (379–395)">
          <li>Solide gestion de l’Orient après Andrinople.</li>
          <li>Triomphe du christianisme nicéen : interdiction des cultes païens traditionnels.</li>
          <li>Parvient à maintenir temporairement l’unité de l’Empire avant de le diviser entre ses fils.</li>
        </ListEnum>
        <ListEnum title="Arcadius (395–408)">
          <li>Empereur d'Orient faible, manipulé par sa cour (notamment sa femme Eudoxie et ses ministres).</li>
          <li>Lutte contre les ambitions du général Stilicon et les tensions religieuses internes.</li>
        </ListEnum>
        <ListEnum title="Honorius (395–423)">
          <li>Empereur d'Occident notoirement inefficace.</li>
          <li>Perte de la province de Bretagne (vers 410) et prise de Rome par les Wisigoths d'Alaric en 410.</li>
          <li>Survie de l'Empire d’Occident grâce à la défense de Stilicon (avant son exécution en 408).</li>
        </ListEnum>
        <ListEnum title="Théodose II (408–450)">
          <li>Long règne en Orient marqué par la paix relative et les fortifications de Constantinople (Murailles de Théodose).</li>
          <li>Publication du Code Théodosien (438), importante compilation juridique.</li>
        </ListEnum>
        <ListEnum title="Valentinien III (425–455)">
          <li>Petit-fils de Théodose Ier, règne en Occident sous tutelle de sa mère Galla Placidia.</li>
          <li>Affaiblissement progressif de l’autorité impériale au profit des généraux (notamment Aetius).</li>
          <li>Assassiné en 455, marquant la fin véritable de la dynastie théodosienne en Occident.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Événements marquants" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Division définitive de l’Empire (395)">
          <li>Orient et Occident deviennent deux entités politiques distinctes, même si théoriquement unies.</li>
        </ListEnum>
        <ListEnum title="Saccage de Rome (410)">
          <li>Les Wisigoths d'Alaric prennent Rome : premier sac de la Ville depuis huit siècles.</li>
        </ListEnum>
        <ListEnum title="Montée des royaumes barbares">
          <li>Installation progressive de peuples germaniques sur le territoire impérial (Wisigoths, Vandales, Burgondes, etc.).</li>
          <li>Affaiblissement militaire et perte de territoires, notamment en Afrique et en Gaule.</li>
        </ListEnum>
        <ListEnum title="Codification du droit">
          <li>Le Code Théodosien (438) rassemble et ordonne les lois impériales depuis Constantin.</li>
        </ListEnum>
        <ListEnum title="Poids croissant de l'Église">
          <li>Renforcement de l'autorité des évêques, notamment à Rome, Constantinople et Alexandrie.</li>
          <li>Affirmation du rôle de l’Église dans les affaires politiques et civiles.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Bilan de la période" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Points positifs :" type="success">
          <li>Stabilisation relative de l’Empire d’Orient sous Arcadius et Théodose II.</li>
          <li>Triomphe officiel du christianisme dans l’Empire romain.</li>
          <li>Conservation d'une riche production législative et théologique.</li>
        </ListEnum>
        <ListEnum title="Points négatifs :" type="failure">
          <li>Perte irréversible de territoires en Occident.</li>
          <li>Multiplication des usurpations et faiblesse des jeunes empereurs face aux généraux.</li>
          <li>Fragmentation politique et essor des royaumes barbares au sein même de l'Empire.</li>
        </ListEnum>
      </Accordion>

      <p>
        La dynastie des Théodosiens illustre à la fois la persistance de l’idéal impérial chrétien et le début de l'effondrement structurel de l'Empire romain d'Occident.
        L’Empire d’Orient, quant à lui, pose les bases de ce qui deviendra plus tard l’Empire byzantin.
      </p>
    </ReignPageLayout>

  );
}