import ReignPageLayout from "../../../pages/roman-empire/ReignPageLayout";
import Accordion from "../../Accordion"
import ListEnum from "../../ListEnum";

export default function Summary() {
  return (
    <ReignPageLayout reign="Dynastie des Valentiniens">
      <p>
        Après la mort de Jovien, l’Empire romain est confié à Valentinien Ier, qui inaugure la dynastie des Valentiniens.
        Cette période est marquée par une stabilisation partielle de l'Empire occidental, une attention soutenue portée à la défense des frontières, et des tensions religieuses croissantes.
      </p>

      <Accordion title="Contexte général" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum>
          <li>Après la crise de succession suivant la mort de Julien et Jovien, besoin d'une nouvelle légitimité impériale.</li>
          <li>Valentinien Ier est proclamé empereur par l'armée en 364 et décide de partager l’Empire avec son frère Valens.</li>
          <li>Marque un retour à un partage géographique de l'Empire : Valentinien à l'Ouest, Valens à l'Est.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Empereurs principaux" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Valentinien Ier (364–375)">
          <li>Empereur énergique, défenseur acharné des frontières rhénanes et danubiennes.</li>
          <li>Réformes administratives et militaires pour renforcer la discipline dans l'armée.</li>
          <li>Connu pour son tempérament violent ; mort subite d'une crise de colère en 375.</li>
        </ListEnum>
        <ListEnum title="Valens (364–378)">
          <li>Frère cadet de Valentinien, empereur d'Orient.</li>
          <li>Affronte les Goths : défait et tué lors de la désastreuse bataille d'Andrinople (378).</li>
          <li>Considéré comme un empereur moins compétent, mais maintient une certaine stabilité jusqu'à sa mort.</li>
        </ListEnum>
        <ListEnum title="Gratien (375–383)">
          <li>Fils de Valentinien Ier, proclamé empereur très jeune.</li>
          <li>Abandonne progressivement les symboles religieux païens (retire l'autel de la Victoire du Sénat).</li>
          <li>Assassiné après une révolte menée par l’usurpateur Magnus Maximus.</li>
        </ListEnum>
        <ListEnum title="Valentinien II (375–392)">
          <li>Deuxième fils de Valentinien Ier, proclamé empereur enfant sous la tutelle de sa mère Justine.</li>
          <li>Conflits internes entre influences païennes et chrétiennes (notamment avec l’évêque Ambroise de Milan).</li>
          <li>Meurt dans des circonstances obscures en 392, probablement assassiné sous la pression du général Arbogast.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Événements marquants" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Bataille d'Andrinople (378)">
          <li>Défaite massive de l’armée romaine contre les Goths.</li>
          <li>Mort de Valens ; événement perçu comme un tournant majeur annonçant le déclin militaire de Rome.</li>
        </ListEnum>
        <ListEnum title="Pressions barbares croissantes">
          <li>Multiplication des incursions germaniques, notamment sur le Rhin et le Danube.</li>
          <li>Installation de groupes goths à l’intérieur des frontières romaines après 378.</li>
        </ListEnum>
        <ListEnum title="Affirmation du christianisme">
          <li>Renforcement du christianisme nicéen (catholique) sous Gratien et Valentinien II.</li>
          <li>Conflits internes contre l'arianisme, surtout en Orient sous Valens.</li>
        </ListEnum>
        <ListEnum title="Affaiblissement de l'autorité impériale">
          <li>Multiplication des usurpations et influence croissante des généraux militaires sur les jeunes empereurs.</li>
          <li>Développement de tensions entre l’Ouest et l’Est de l’Empire, avec un affaiblissement notable de l’Ouest.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Bilan de la période" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Points positifs :" type="success">
          <li>Maintien temporaire de la cohésion impériale malgré les pressions extérieures.</li>
          <li>Réaffirmation du pouvoir impérial après la mort de Jovien.</li>
          <li>Consolidation de la christianisation de l’Empire.</li>
        </ListEnum>
        <ListEnum title="Points négatifs :" type="failure">
          <li>Défaite désastreuse à Andrinople marquant une perte irréversible du prestige militaire romain.</li>
          <li>Affaiblissement progressif du pouvoir impérial au profit des chefs militaires.</li>
          <li>Début du processus d'autonomisation progressive de l'armée barbare intégrée dans l'Empire.</li>
        </ListEnum>
      </Accordion>

      <p>
        La dynastie des Valentiniens est souvent vue comme la dernière tentative sérieuse de consolidation de l'Empire avant son lent effritement en Occident.
        La mort de Valentinien II et la montée d'usurpateurs ouvriront la voie à l'intervention décisive de Théodose Ier.
      </p>
    </ReignPageLayout>

  );
}