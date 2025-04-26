import ReignPageLayout from "../../../pages/roman-empire/ReignPageLayout";
import Accordion from "../../Accordion"
import ListEnum from "../../ListEnum";

export default function Summary() {
  return (
    <ReignPageLayout reign="Année des 4 empereurs (68-69)">
      <p>
      L’année des quatre empereurs (69 ap. J.-C.) est une période chaotique mais décisive de l’histoire romaine, qui marque la fin de la dynastie julio-claudienne (initiée par Auguste) et l’arrivée d’une nouvelle maison impériale : les Flaviens.
      </p>

      <Accordion title="Contexte : la mort de Néron (68 ap. J.-C.)">
        <p>
        L’empereur Néron, dernier descendant d’Auguste par adoption, se suicide en juin 68 après avoir été déclaré ennemi public par le Sénat.
        Cette mort plonge l’Empire dans l’incertitude : il n’y a pas d’héritier désigné, et le pouvoir devient ouvertement militaire.
        </p>
      </Accordion>
      <Accordion title="Galba (juin 68 – janvier 69)">
        <ListEnum>
          <li>Soutenu par la Garde prétorienne et reconnu empereur après la mort de Néron.</li>
          <li>Gouverneur d’Hispanie, vieil aristocrate traditionaliste.</li>
          <li>Impopulaire à Rome : il refuse de payer les soldats qui l’ont soutenu, licencie des prétoriens.</li>
          <li>Othon, un ancien allié frustré d’avoir été écarté de la succession, complote contre lui.</li>
          <li>Assassiné par la Garde prétorienne le 15 janvier 69, sur ordre d’Othon.</li>
        </ListEnum>
      </Accordion>
      <Accordion title="Othon (janvier – avril 69)">
        <ListEnum>
          <li>S’empare du pouvoir avec l’appui de la Garde.</li>
          <li>Homme rusé, gouverne avec une certaine modération.</li>
          <li>Mais un autre général, Vitellius, soutenu par les légions de Germanie, avance vers Rome.</li>
          <li>Défaite d’Othon à la bataille de Bédriac (avril 69) face à Vitellius.</li>
          <li>Il se suicide pour éviter la guerre civile, geste salué comme noble par les Romains.</li>
        </ListEnum>
      </Accordion>
      <Accordion title="Vitellius (avril – décembre 69)">
        <ListEnum>
          <li>Soutenu par les légions du Rhin.</li>
          <li>Populaire auprès des soldats, mais son règne est marqué par le laxisme et le chaos.</li>
          <li>Perd rapidement le soutien des élites romaines.</li>
          <li>Pendant ce temps, en Orient, Vespasien, commandant des armées en Judée (où il réprime la révolte juive), est proclamé empereur par ses troupes.</li>
        </ListEnum>
      </Accordion>
      <Accordion title="Vespasien (décembre 69 – 79)">
        <ListEnum>
          <li>Marque le retour à la stabilité.</li>
          <li>Ses partisans, menés par Antonius Primus, vainquent les troupes de Vitellius.</li>
          <li>Vitellius est capturé et tué brutalement à Rome (décembre 69).</li>
          <li>Vespasien devient empereur, fonde la dynastie des Flaviens et restaure l’ordre.</li>
        </ListEnum>
      </Accordion>
      <p>L’année 69 montre que le pouvoir impérial repose désormais sur le soutien des armées, non plus sur l’héritage dynastique seul.
      Vespasien parvient à réconcilier les provinces, l’armée et le Sénat, et son règne inaugure une ère de stabilité après la crise.</p>
    </ReignPageLayout>
  );
}