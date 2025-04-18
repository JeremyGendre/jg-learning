import Accordion from "../../components/Accordion";
import ListEnum from "../../components/ListEnum";

export default function KeyDatesPage() {
  return (
    <div className="flex flex-col md:flex-row w-full justify-center items-stretch md:items-center h-full gap-3 flex-wrap">
      <Accordion title="La Royauté (-753 à -509)" defaultOpen>
        <ListEnum classes={{ content: 'flex flex-col gap-2' }}>
          <div><span className="font-bold">-753</span> : Fondation légendaire de Rome par Romulus.</div>
          <div>Règne des 7 rois</div>
          <div><span className="font-bold">-509</span> : Renversement de Tarquin le Superbe, fin de la royauté.</div>
        </ListEnum>
      </Accordion>
      <Accordion title="La République (-509 à -27)" defaultOpen>
        <ListEnum classes={{ content: 'flex flex-col gap-2' }}>
          <div><span className="font-bold">-509</span> : Instauration de la République avec des consuls.</div>
          <div><span className="font-bold">Vᵉ – IVᵉ siècles av. J.-C.</span> : Conquêtes en Italie centrale et alliances.</div>
          <div><span className="font-bold">-264 à -146</span> : Guerres puniques contre Carthage, domination méditerranéenne.</div>
          <div><span className="font-bold">IIᵉ siècle av. J.-C.</span> : Conquête de la Grèce, Macédoine et Asie Mineure.</div>
          <div><span className="font-bold">-133 à -121</span> : Réformes sociales échouées des frères Gracques.</div>
          <div><span className="font-bold">-58 à -51</span> : Conquêtes de Jules César en Gaule.</div>
          <div><span className="font-bold">-49 à -44 </span> : Jules César dictateur, assassiné en 44 av. J.-C.</div>
          <div><span className="font-bold">-31</span> : Octave bat Marc Antoine à Actium.</div>
          <div><span className="font-bold">-27</span> : Octave devient empereur (Auguste), fin de la République.</div>
        </ListEnum>
      </Accordion>
      <Accordion title="L’Empire (-27 à 476)" defaultOpen>
        <ListEnum classes={{ content: 'flex flex-col gap-2' }}>
          <div><span className="font-bold">-27</span> : Début du règne d’Auguste, instauration du Principat.</div>
          <div><span className="font-bold">Iᵉʳ – IIᵉ siècles ap. J.-C.</span> : Pax Romana, apogée territoriale sous Trajan (117 ap. J.-C.).</div>
          <div><span className="font-bold">IIIᵉ siècle  ap. J.-C.</span> : Crise (invasions barbares, guerres civiles).</div>
          <div><span className="font-bold">285</span> : Dioclétien instaure la Tétrarchie.</div>
          <div><span className="font-bold">313</span> : Édit de Milan, autorisation du christianisme.</div>
          <div><span className="font-bold">330</span> : Constantin fonde Constantinople.</div>
          <div><span className="font-bold">395</span> : Division de l’Empire entre Orient et Occident.</div>
          <div><span className="font-bold">476</span> : Chute de l’Empire romain d’Occident avec Romulus Augustule.</div>
        </ListEnum>
      </Accordion>
      <Accordion title="Empire d'Orient" defaultOpen>
        <ListEnum classes={{ content: 'flex flex-col gap-2' }}>
          <div><span className="font-bold">285</span> : Division de l’Empire romain par Dioclétien</div>
          <div><span className="font-bold">395</span> : Mort de Théodose Ier : séparation définitive</div>
          <div><span className="font-bold">476</span> : Chute de l’Empire romain d’Occident</div>
          <div><span className="font-bold">527-565</span> : Règne de Justinien Ier. Période de gloire : reconquête partielle de l’Occident (Italie, Afrique du Nord, sud de l’Espagne), réformes juridiques (Corpus Juris Civilis), construction de la Sainte-Sophie</div>
          <div><span className="font-bold">636</span> : Défaite face aux Arabes à Yarmouk. L’Empire perd durablement la Syrie, la Palestine, et bientôt l’Égypte. Début du recul territorial majeur.</div>
          <div><span className="font-bold">717 - 718</span> : Siège de Constantinople par les Arabes. Victoire décisive des Byzantins grâce à l’usage du feu grégeois. Constantinople reste inviolée.</div>
          <div><span className="font-bold">800</span> : Couronnement de Charlemagne. L’Empire romain d’Occident renaît symboliquement à l’Ouest, ce que les Byzantins considèrent comme une usurpation.</div>
          <div><span className="font-bold">1054</span> : Séparation définitive entre l’Église catholique (Rome) et l’Église orthodoxe (Constantinople).</div>
          <div><span className="font-bold">1071</span> : Défaite de Manzikert. Les Seldjoukides battent les Byzantins. L’Anatolie, cœur de l’empire, commence à être perdue.</div>
          <div><span className="font-bold">1204</span> : Sac de Constantinople par la 4e croisade</div>
          <div><span className="font-bold">1261</span> : Reprise de Constantinople</div>
          <div><span className="font-bold">1453</span> : Chute de Constantinople</div>
        </ListEnum>
      </Accordion>
    </div>
  );
}