import Accordion from "../../Accordion"
import ListEnum from "../../ListEnum";

export default function Summary() {
  return (
    <div className="flex flex-col gap-4">
      <p>
        Fils adoptif et successeur d’Auguste, Tibère est un général expérimenté et administrateur compétent, mais son règne est marqué par l’ombre, la suspicion, et une rupture croissante avec les élites romaines.
      </p>
      <Accordion title="Politique intérieure">
        <ListEnum>
          <li>Succession difficile : Bien qu’Auguste ait soigneusement préparé sa succession, Tibère reste un choix par défaut, adopté tardivement après la mort prématurée de Caius et Lucius César. Il accède au pouvoir avec réticence.</li>
          <li>Respect des institutions républicaines (au début) : Il joue le jeu du Sénat en se déclarant "princeps", laissant croire à une continuité républicaine, comme Auguste. Il refuse ostensiblement certains honneurs pour ne pas paraître monarchique.</li>
          <li>Relations tendues avec le Sénat : Rapidement, une méfiance mutuelle s’installe. Tibère juge le Sénat incompétent et servile, tandis que les sénateurs craignent son autoritarisme.</li>
          <li>Répression et climat de terreur : Les lois de maiestas (lèse-majesté) sont détournées pour condamner ceux qui critiquent ou s’opposent à l’empereur. Cela instaure une atmosphère de délation et de peur.</li>
          <li>Renforcement de la bureaucratie impériale : Il consolide le rôle des chevaliers (equites) et du préfet du prétoire, ce qui renforce l’administration impériale, notamment en matière de justice et de finances.</li>
          <li>Peu d’urbanisme ou de politique grandiose : Contrairement à Auguste, Tibère ne cherche pas à embellir Rome. Il est économe, voire austère, et réduit les dépenses publiques.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Politique extérieure">
        <ListEnum>
          <li>Politique défensive et conservatrice : Tibère rejette l’expansion territoriale au profit de la stabilisation des frontières. Il poursuit la politique de non-agression dans les provinces.</li>
          <li>Germanicus, neveu et fils adoptif de Tibère, mène plusieurs campagnes en Germanie (14–16) pour venger la défaite de Teutobourg. Il remporte des victoires symboliques, mais est rappelé à Rome.</li>
          <li>La mort de Germanicus en Syrie (19 ap. J.-C.) provoque une crise : le peuple soupçonne Tibère d’en être responsable.</li>
          <li>Révoltes provinciales maîtrisées : Plusieurs troubles éclatent (notamment en Gaule ou dans les provinces danubiennes), mais les gouverneurs et les légions maintiennent l’ordre.</li>
          <li>Maîtrise de l’administration provinciale : Tibère exige des gouverneurs compétents, réduit la corruption et améliore la gestion fiscale.</li>
        </ListEnum>
      </Accordion>

      <Accordion title="Personnalité et entourage">
        <ListEnum>
          <li>Homme réservé, voire misanthrope : Tibère déteste les mondanités, la foule, et méprise les jeux du pouvoir à Rome. Il préfère la solitude et la rigueur militaire.</li>
          <li>Traumatisé par la politique augustéenne : Sa jeunesse a été marquée par les manipulations politiques d’Auguste, ses mariages imposés (notamment avec Julia, fille d’Auguste), et les deuils familiaux.</li>
          <li>Séjan, bras droit devenu menace</li>
          <li>Préfet du prétoire, Séjan concentre de plus en plus de pouvoir, en profitant de l’éloignement de Tibère. Il élimine ses rivaux, notamment les descendants de Germanicus.</li>
          <li>En 31 ap. J.-C., Tibère, averti de ses ambitions, fait arrêter et exécuter Séjan. Cela marque un tournant vers un régime encore plus paranoïaque.</li>
        </ListEnum>
      </Accordion>
      <Accordion title="Retrai à Capri">
        <ListEnum>
          <li>Exil volontaire à partir de 26 ap. J.-C. : Tibère quitte Rome et s’installe dans sa villa sur l’île de Capri, d’où il gouverne à distance, en s’appuyant sur des lettres et des émissaires.</li>
          <li>Légendes noires : Les auteurs antiques, notamment Suétone et Tacite, évoquent des excès et des débauches sur l’île, bien que ces récits soient à prendre avec précaution, car très hostiles.</li>
        </ListEnum>
      </Accordion>
      <Accordion title="Fin de règne et mort">
        <ListEnum>
          <li>Climat délétère à Rome : Après la chute de Séjan, les procès et purges se multiplient. Le règne de Tibère se termine dans la suspicion et l’isolement complet du pouvoir.</li>
          <li>Mort en 37 ap. J.-C. à Misène :</li>
          <li>Tibère meurt à 77 ans, probablement de causes naturelles, bien qu’il existe des rumeurs d’assassinat (notamment par Caligula ou le préfet Macron, pour hâter sa succession).</li>
          <li>Il laisse un empire stable, mais une dynastie fragile, marquée par les tensions internes.</li>
        </ListEnum>
      </Accordion>
      <Accordion title="Bilan du règne" classes={{ content: 'flex flex-col gap-2' }}>
        <ListEnum title="Points positifs :" type="success">
          <li>Bonne gestion des finances et des provinces.</li>
          <li>Stabilité des frontières.</li>
          <li>Administration efficace.</li>
        </ListEnum>
        <ListEnum title="Points négatifs :" type="failure">
          <li>Rupture avec les élites sénatoriales.</li>
          <li>Atmosphère de peur et de répression.</li>
          <li>Absence de politique dynastique claire (pas d’héritier désigné fermement jusqu’à la fin).</li>
        </ListEnum>
      </Accordion>
      <p>
      En résumé, Tibère est un empereur efficace mais impopulaire, dont le règne marque la fin des illusions républicaines et annonce un pouvoir impérial plus autoritaire. Il incarne la face sombre de l’Empire : la stabilité obtenue au prix de la liberté.
      </p>
    </div>
  );
}