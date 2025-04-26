import ReignPageLayout from "../../../pages/roman-empire/ReignPageLayout";
import Accordion from "../../Accordion"
import ListEnum from "../../ListEnum";

export default function Summary() {
  return (
    <ReignPageLayout reign="Valérien et Gallien">
      <p>
        Après l'Anarchie militaire, Valérien est proclamé empereur en 253 et associe rapidement son fils Gallien au pouvoir. 
        Leur règne conjoint tente de stabiliser l'Empire, mais ils doivent faire face à des menaces incessantes : invasions barbares, usurpations multiples, crise économique et catastrophes militaires majeures. 
        Leur échec souligne l'effondrement de l'unité impériale avant la reconsolidation ultérieure.
      </p>

      <Accordion title="Contexte général" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum>
          <li>Valérien gouverne principalement l'Orient, Gallien l'Occident.</li>
          <li>Contexte de pression continue : envahisseurs barbares, troubles internes, usurpateurs régionaux.</li>
          <li>Début d'une tentative de réforme administrative et militaire.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Règne de Valérien" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Action en Orient">
          <li>Confronte l'Empire sassanide de Shapur Ier, qui mène de vastes campagnes contre Rome.</li>
          <li>En 260, Valérien est capturé vivant par Shapur Ier lors de la bataille d'Édesse : humiliation majeure pour Rome.</li>
          <li>Meurt en captivité en Perse dans des conditions misérables, vers 262.</li>
        </ListEnum>
        <ListEnum title="Persécution religieuse">
          <li>Ordonne une sévère persécution des chrétiens, considérés comme déloyaux envers Rome.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Règne de Gallien" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Réformes militaires">
          <li>Réorganise l'armée : création d'unités de cavalerie mobile (comitatenses) pour mieux réagir aux menaces rapides.</li>
          <li>Défend l'Italie contre les incursions germaniques, notamment les Alamans et les Francs.</li>
        </ListEnum>
        <ListEnum title="Crises internes">
          <li>Multiplication des usurpations locales : Postume fonde l'Empire des Gaules (Gallia, Hispanie, Bretagne).</li>
          <li>Révoltes en Orient et en Afrique (Macrien, Ingenuus, Regalianus, etc.).</li>
        </ListEnum>
        <ListEnum title="Politique religieuse">
          <li>Met fin aux persécutions contre les chrétiens initiées par son père Valérien.</li>
        </ListEnum>
        <ListEnum title="Mort de Gallien">
          <li>Assassiné en 268 lors d'un complot militaire pendant le siège de Milan contre l'usurpateur Aureolus.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Menaces extérieures" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Invasions barbares">
          <li>Pressions croissantes sur le limes du Rhin et du Danube (Goths, Francs, Alamans).</li>
          <li>Raids en Gaule, en Espagne, en Italie du Nord et même jusqu’en Grèce.</li>
        </ListEnum>
        <ListEnum title="Pressions en Orient">
          <li>Les Sassanides profitent de l'affaiblissement romain pour étendre leur influence.</li>
          <li>Perte de territoires en Syrie et en Mésopotamie.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Bilan du règne" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Points positifs" type="success">
          <li>Gallien amorce des réformes militaires qui prépareront la survie de l'Empire.</li>
          <li>Relâchement de la pression sur les chrétiens en Occident.</li>
          <li>Maintien d'un semblant d'autorité centrale malgré le morcellement.</li>
        </ListEnum>
        <ListEnum title="Points négatifs" type="failure">
          <li>Capture et mort humiliante de Valérien.</li>
          <li>Division de l’Empire : apparition de l'Empire des Gaules et du Royaume de Palmyre.</li>
          <li>Incapacité à enrayer durablement les invasions et les révoltes.</li>
        </ListEnum>
      </Accordion>

      <p>
        Le règne conjoint de Valérien et Gallien est souvent vu comme le point bas de la crise du IIIᵉ siècle. 
        Pourtant, Gallien prépare discrètement les bases de la survie future de l'Empire, notamment grâce à ses réformes militaires. 
        La réunification de l'Empire devra attendre leurs successeurs plus énergiques.
      </p>
    </ReignPageLayout>
  );
}