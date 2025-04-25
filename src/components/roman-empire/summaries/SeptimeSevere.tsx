import ReignPageLayout from "../../../pages/roman-empire/ReignPageLayout";
import Accordion from "../../Accordion"
import ListEnum from "../../ListEnum";

export default function Summary() {
  return (
    <ReignPageLayout reign="Septime Sévère">
      <p>
        Lucius Septimius Severus, originaire de Leptis Magna en Afrique, devient empereur en 193 ap. J.-C. à la suite d’une guerre civile. Il fonde une nouvelle dynastie et réforme profondément l’Empire en renforçant l’autorité impériale et le rôle de l’armée. Son règne marque une transition vers un pouvoir plus autocratique et militarisé.
      </p>

      <Accordion title="Politique intérieure" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Renforcement de l’autocratie">
          <li>Réduit le rôle du Sénat à un organe consultatif : centralisation du pouvoir entre ses mains.</li>
          <li>Se présente comme un nouveau fondateur de Rome, à l’image d’Auguste.</li>
          <li>Intensifie la propagande impériale, notamment via les monnaies et monuments.</li>
        </ListEnum>
        <ListEnum title="Réforme administrative">
          <li>Crée un Conseil impérial composé de juristes et fonctionnaires fidèles.</li>
          <li>Augmente le nombre de provinces pour mieux contrôler l’administration.</li>
          <li>Favorise les élites provinciales, notamment africaines et orientales.</li>
        </ListEnum>
        <ListEnum title="Justice et répression">
          <li>Accroît la sévérité des lois contre les opposants politiques.</li>
          <li>Nombreuses confiscations de biens, notamment après la défaite de Clodius Albinus.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Politique extérieure" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Campagnes militaires victorieuses">
          <li>Victoire contre Pescennius Niger en Orient (bataille d'Issos, 194).</li>
          <li>Bataille décisive de Lugdunum contre Albinus en 197 (Gaule).</li>
        </ListEnum>
        <ListEnum title="Guerre en Parthie (197–199)">
          <li>Prend Ctésiphon, la capitale des Parthes.</li>
          <li>Crée la province de Mésopotamie : symbole de prestige militaire.</li>
        </ListEnum>
        <ListEnum title="Expédition en Bretagne (208–211)">
          <li>Marche vers le nord de l’île pour sécuriser les frontières.</li>
          <li>Fait renforcer le Mur d’Hadrien et y stationne ses troupes.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Travaux et économie" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Soutien aux vétérans et à l’armée">
          <li>Distribution massive de terres et d’indemnités aux soldats.</li>
          <li>Crée une nouvelle légion : la Legio II Parthica stationnée près de Rome.</li>
        </ListEnum>
        <ListEnum title="Réformes fiscales">
          <li>Alourdit les impôts pour financer l’armée et les campagnes militaires.</li>
          <li>Dévaluation monétaire : baisse du poids en argent du denier.</li>
        </ListEnum>
        <ListEnum title="Développement de l’Afrique romaine">
          <li>Fait embellir Leptis Magna, sa ville natale, avec des monuments grandioses.</li>
          <li>Favorise les circuits économiques reliant l’Afrique au reste de l’Empire.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Vie personnelle et entourage" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Famille puissante">
          <li>Époux de Julia Domna, intellectuelle syrienne influente et très présente dans la vie politique.</li>
          <li>Père de Caracalla et Geta, qu’il associe au pouvoir impérial avant sa mort.</li>
        </ListEnum>
        <ListEnum title="Homme de guerre et de pouvoir">
          <li>Préfère la vie militaire à la cour.</li>
          <li>Inspiré par Alexandre le Grand et les modèles hellénistiques d’autocratie.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Mort et succession" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum>
          <li>Meurt en 211 à Eboracum (actuelle York) en Bretagne, probablement de maladie.</li>
          <li>Laisse l’Empire à ses deux fils, Caracalla et Geta, en co-régence.</li>
          <li>Sa dernière recommandation : « Soyez d’accord entre vous, enrichissez les soldats, moquez-vous du reste. »</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Bilan du règne" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Points positifs :" type="success">
          <li>Stabilise l’Empire après la crise de 193.</li>
          <li>Renforce la puissance militaire romaine à l’extérieur.</li>
          <li>Réforme l’administration en profondeur.</li>
          <li>Favorise les provinces, notamment l’Afrique et l’Orient.</li>
        </ListEnum>
        <ListEnum title="Points négatifs :" type="failure">
          <li>Affaiblissement du Sénat et concentration du pouvoir.</li>
          <li>Dépendance extrême à l’armée, creusant les dépenses de l’État.</li>
          <li>Dévaluation monétaire et pression fiscale croissante.</li>
        </ListEnum>
      </Accordion>

      <p>
        Septime Sévère inaugure une nouvelle ère impériale dominée par l’armée et par une centralisation accrue du pouvoir. Sa dynastie marquera profondément le IIIe siècle, bien que ses successeurs aient plus de mal à maintenir l’équilibre qu’il avait instauré par la force.
      </p>
    </ReignPageLayout>
  );
}