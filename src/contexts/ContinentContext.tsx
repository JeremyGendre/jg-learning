import {createContext, PropsWithChildren, useCallback, useContext} from "react";
import Continent from "../interfaces/continent.interface";
const continentJson = require('../resources/continents.json');

interface ContinentContextType {
	continents: Array<Continent>;
	getContinent: (name: string) => Continent | undefined;
}

const ContinentContext = createContext<ContinentContextType>(undefined!);

export const useContinentContext = () => useContext(ContinentContext);

export default function ContinentContextProvider({children}: PropsWithChildren<{}>){
	const continents: Continent[] = continentJson;
	console.log(continents)

	const getContinent = useCallback((name: string) => {
		return continents.find(continent => continent.name === name);
	}, [continents])

	return (
		<ContinentContext.Provider value={{ continents, getContinent }}>
			{children}
		</ContinentContext.Provider>
	);
}

// const continents = [
//     {
//       "name": "Europe",
//       "countries": [
//         {
//           "name": "Allemagne",
//           "capital": "Berlin"
//         },
//         {
//           "name": "France",
//           "capital": "Paris"
//         },
//         {
//           "name": "Italie",
//           "capital": "Rome"
//         },
//         {
//           "name": "Espagne",
//           "capital": "Madrid"
//         },
//         {
//           "name": "Royaume-Uni",
//           "capital": "Londres"
//         },
//         {
//           "name": "Pays-Bas",
//           "capital": "Amsterdam"
//         },
//         {
//           "name": "Belgique",
//           "capital": "Bruxelles"
//         },
//         {
//           "name": "Suisse",
//           "capital": "Berne"
//         },
//         {
//           "name": "Portugal",
//           "capital": "Lisbonne"
//         },
//         {
//           "name": "Autriche",
//           "capital": "Vienne"
//         },
//         {
//           "name": "Grèce",
//           "capital": "Athènes"
//         },
//         {
//           "name": "Suède",
//           "capital": "Stockholm"
//         },
//         {
//           "name": "Norvège",
//           "capital": "Oslo"
//         },
//         {
//           "name": "Danemark",
//           "capital": "Copenhague"
//         },
//         {
//           "name": "Finlande",
//           "capital": "Helsinki"
//         },
//         {
//           "name": "Irlande",
//           "capital": "Dublin"
//         },
//         {
//           "name": "Islande",
//           "capital": "Reykjavik"
//         },
//         {
//           "name": "Luxembourg",
//           "capital": "Luxembourg"
//         },
//         {
//           "name": "Malte",
//           "capital": "La Valette"
//         },
//         {
//           "name": "Chypre",
//           "capital": "Nicosie"
//         },
//         {
//           "name": "Estonie",
//           "capital": "Tallinn"
//         },
//         {
//           "name": "Lettonie",
//           "capital": "Riga"
//         },
//         {
//           "name": "Lituanie",
//           "capital": "Vilnius"
//         },
//         {
//           "name": "Slovaquie",
//           "capital": "Bratislava"
//         },
//         {
//           "name": "Slovénie",
//           "capital": "Ljubljana"
//         },
//         {
//           "name": "Hongrie",
//           "capital": "Budapest"
//         },
//         {
//           "name": "Pologne",
//           "capital": "Varsovie"
//         },
//         {
//           "name": "République tchèque",
//           "capital": "Prague"
//         },
//         {
//           "name": "Roumanie",
//           "capital": "Bucarest"
//         },
//         {
//           "name": "Bulgarie",
//           "capital": "Sofia"
//         },
//         {
//           "name": "Croatie",
//           "capital": "Zagreb"
//         },
//         {
//           "name": "Bosnie-Herzégovine",
//           "capital": "Sarajevo"
//         },
//         {
//           "name": "Serbie",
//           "capital": "Belgrade"
//         },
//         {
//           "name": "Monténégro",
//           "capital": "Podgorica"
//         },
//         {
//           "name": "Macédoine",
//           "capital": "Skopje"
//         },
//         {
//           "name": "Albanie",
//           "capital": "Tirana"
//         },
//         {
//           "name": "Kosovo",
//           "capital": "Pristina"
//         },
//         {
//           "name": "Moldavie",
//           "capital": "Chisinau"
//         },
//         {
//           "name": "Biélorussie",
//           "capital": "Minsk"
//         },
//         {
//           "name": "Ukraine",
//           "capital": "Kiev"
//         },
//         {
//           "name": "Russie",
//           "capital": "Moscou"
//         },
//         {
//           "name": "Andorre",
//           "capital": "Andorre-la-Vieille"
//         },
//         {
//           "name": "Liechtenstein",
//           "capital": "Vaduz"
//         },
//         {
//           "name": "Monaco",
//           "capital": "Monaco"
//         },
//         {
//           "name": "Saint-Marin",
//           "capital": "Saint-Marin"
//         },
//         {
//           "name": "Vatican",
//           "capital": "Vatican"
//         }
//       ]
//     },
//     {
//       "name": "Afrique",
//       "countries": [
//         {
//           "name": "Afrique du Sud",
//           "capital": "Pretoria"
//         },
//         {
//           "name": "Algérie",
//           "capital": "Alger"
//         },
//         {
//           "name": "Angola",
//           "capital": "Luanda"
//         },
//         {
//           "name": "Bénin",
//           "capital": "Porto-Novo"
//         },
//         {
//           "name": "Botswana",
//           "capital": "Gaborone"
//         },
//         {
//           "name": "Burkina Faso",
//           "capital": "Ouagadougou"
//         },
//         {
//           "name": "Burundi",
//           "capital": "Bujumbura"
//         },
//         {
//           "name": "Cameroun",
//           "capital": "Yaoundé"
//         },
//         {
//           "name": "Cap-Vert",
//           "capital": "Praia"
//         },
//         {
//           "name": "République centrafricaine",
//           "capital": "Bangui"
//         },
//         {
//           "name": "Comores",
//           "capital": "Moroni"
//         },
//         {
//           "name": "République du Congo",
//           "capital": "Brazzaville"
//         },
//         {
//           "name": "République démocratique du Congo",
//           "capital": "Kinshasa"
//         },
//         {
//           "name": "Côte d'Ivoire",
//           "capital": "Yamoussoukro"
//         },
//         {
//           "name": "Djibouti",
//           "capital": "Djibouti"
//         },
//         {
//           "name": "Égypte",
//           "capital": "Le Caire"
//         },
//         {
//           "name": "Érythrée",
//           "capital": "Asmara"
//         },
//         {
//           "name": "Eswatini",
//           "capital": "Mbabane"
//         },
//         {
//           "name": "Éthiopie",
//           "capital": "Addis-Abeba"
//         },
//         {
//           "name": "Gabon",
//           "capital": "Libreville"
//         },
//         {
//           "name": "Gambie",
//           "capital": "Banjul"
//         },
//         {
//           "name": "Ghana",
//           "capital": "Accra"
//         },
//         {
//           "name": "Guinée",
//           "capital": "Conakry"
//         },
//         {
//           "name": "Guinée-Bissau",
//           "capital": "Bissau"
//         },
//         {
//           "name": "Guinée équatoriale",
//           "capital": "Malabo"
//         },
//         {
//           "name": "Kenya",
//           "capital": "Nairobi"
//         },
//         {
//           "name": "Lesotho",
//           "capital": "Maseru"
//         },
//         {
//           "name": "Liberia",
//           "capital": "Monrovia"
//         },
//         {
//           "name": "Libye",
//           "capital": "Tripoli"
//         },
//         {
//           "name": "Madagascar",
//           "capital": "Antananarivo"
//         },
//         {
//           "name": "Malawi",
//           "capital": "Lilongwe"
//         },
//         {
//           "name": "Mali",
//           "capital": "Bamako"
//         },
//         {
//           "name": "Maroc",
//           "capital": "Rabat"
//         },
//         {
//           "name": "Maurice",
//           "capital": "Port-Louis"
//         },
//         {
//           "name": "Mauritanie",
//           "capital": "Nouakchott"
//         },
//         {
//           "name": "Mozambique",
//           "capital": "Maputo"
//         },
//         {
//           "name": "Namibie",
//           "capital": "Windhoek"
//         },
//         {
//           "name": "Niger",
//           "capital": "Niamey"
//         },
//         {
//           "name": "Nigeria",
//           "capital": "Abuja"
//         },
//         {
//           "name": "Ouganda",
//           "capital": "Kampala"
//         },
//         {
//           "name": "Rwanda",
//           "capital": "Kigali"
//         },
//         {
//           "name": "São Tomé-et-Principe",
//           "capital": "São Tomé"
//         },
//         {
//           "name": "Sénégal",
//           "capital": "Dakar"
//         },
//         {
//           "name": "Seychelles",
//           "capital": "Victoria"
//         },
//         {
//           "name": "Sierra Leone",
//           "capital": "Freetown"
//         },
//         {
//           "name": "Somalie",
//           "capital": "Mogadiscio"
//         },
//         {
//           "name": "Soudan",
//           "capital": "Khartoum"
//         },
//         {
//           "name": "Soudan du Sud",
//           "capital": "Djouba"
//         },
//         {
//           "name": "Tanzanie",
//           "capital": "Dodoma"
//         },
//         {
//           "name": "Tchad",
//           "capital": "N'Djaména"
//         },
//         {
//           "name": "Togo",
//           "capital": "Lomé"
//         },
//         {
//           "name": "Tunisie",
//           "capital": "Tunis"
//         },
//         {
//           "name": "Zambie",
//           "capital": "Lusaka"
//         },
//         {
//           "name": "Zimbabwe",
//           "capital": "Harare"
//         }
//       ]
//     },
//     {
//       "name": "Amérique du Nord",
//       "countries": [
//         {
//           "name": "Antigua-et-Barbuda",
//           "capital": "Saint John's"
//         },
//         {
//           "name": "Bahamas",
//           "capital": "Nassau"
//         },
//         {
//           "name": "Barbade",
//           "capital": "Bridgetown"
//         },
//         {
//           "name": "Belize",
//           "capital": "Belmopan"
//         },
//         {
//           "name": "Canada",
//           "capital": "Ottawa"
//         },
//         {
//           "name": "Costa Rica",
//           "capital": "San José"
//         },
//         {
//           "name": "Cuba",
//           "capital": "La Havane"
//         },
//         {
//           "name": "République dominicaine",
//           "capital": "Saint-Domingue"
//         },
//         {
//           "name": "Dominique",
//           "capital": "Roseau"
//         },
//         {
//           "name": "États-Unis",
//           "capital": "Washington"
//         },
//         {
//           "name": "Grenade",
//           "capital": "Saint-Georges"
//         },
//         {
//           "name": "Guatemala",
//           "capital": "Guatemala"
//         },
//         {
//           "name": "Haïti",
//           "capital": "Port-au-Prince"
//         },
//         {
//           "name": "Honduras",
//           "capital": "Tegucigalpa"
//         },
//         {
//           "name": "Jamaïque",
//           "capital": "Kingston"
//         },
//         {
//           "name": "Mexique",
//           "capital": "Mexico"
//         },
//         {
//           "name": "Nicaragua",
//           "capital": "Managua"
//         },
//         {
//           "name": "Panama",
//           "capital": "Panama"
//         },
//         {
//           "name": "Saint-Christophe-et-Niévès",
//           "capital": "Basseterre"
//         },
//         {
//           "name": "Saint-Vincent-et-les-Grenadines",
//           "capital": "Kingstown"
//         },
//         {
//           "name": "Sainte-Lucie",
//           "capital": "Castries"
//         },
//         {
//           "name": "Salvador",
//           "capital": "San Salvador"
//         },
//         {
//           "name": "Trinité-et-Tobago",
//           "capital": "Port-d'Espagne"
//         },
//         {
//           "name": "Groenland",
//           "capital": "Nuuk"
//         },
//         {
//           "name": "Porto Rico",
//           "capital": "San Juan"
//         },
//         {
//           "name": "Guadeloupe",
//           "capital": "Basse-Terre"
//         },
//         {
//           "name": "Martinique",
//           "capital": "Fort-de-France"
//         }
//       ]
//     },
//     {
//       "name": "Amérique du Sud",
//       "countries": [
//         {
//           "name": "Argentine",
//           "capital": "Buenos Aires"
//         },
//         {
//           "name": "Bolivie",
//           "capital": "Sucre"
//         },
//         {
//           "name": "Brésil",
//           "capital": "Brasilia"
//         },
//         {
//           "name": "Chili",
//           "capital": "Santiago"
//         },
//         {
//           "name": "Colombie",
//           "capital": "Bogota"
//         },
//         {
//           "name": "Équateur",
//           "capital": "Quito"
//         },
//         {
//           "name": "Guyana",
//           "capital": "Georgetown"
//         },
//         {
//           "name": "Paraguay",
//           "capital": "Asuncion"
//         },
//         {
//           "name": "Pérou",
//           "capital": "Lima"
//         },
//         {
//           "name": "Suriname",
//           "capital": "Paramaribo"
//         },
//         {
//           "name": "Uruguay",
//           "capital": "Montevideo"
//         },
//         {
//           "name": "Venezuela",
//           "capital": "Caracas"
//         },
//         {
//           "name": "Guyane",
//           "capital": "Cayenne"
//         }
//       ]
//     },
//     {
//       "name": "Asie",
//       "countries": [
//         {
//           "name": "Afghanistan",
//           "capital": "Kaboul"
//         },
//         {
//           "name": "Arabie saoudite",
//           "capital": "Riyad"
//         },
//         {
//           "name": "Arménie",
//           "capital": "Erevan"
//         },
//         {
//           "name": "Azerbaïdjan",
//           "capital": "Bakou"
//         },
//         {
//           "name": "Bahreïn",
//           "capital": "Manama"
//         },
//         {
//           "name": "Bangladesh",
//           "capital": "Dacca"
//         },
//         {
//           "name": "Bhoutan",
//           "capital": "Thimphou"
//         },
//         {
//           "name": "Birmanie",
//           "capital": "Naypyidaw"
//         },
//         {
//           "name": "Brunei",
//           "capital": "Bandar Seri Begawan"
//         },
//         {
//           "name": "Cambodge",
//           "capital": "Phnom Penh"
//         },
//         {
//           "name": "Chine",
//           "capital": "Pékin"
//         },
//         {
//           "name": "Corée du Nord",
//           "capital": "Pyongyang"
//         },
//         {
//           "name": "Corée du Sud",
//           "capital": "Séoul"
//         },
//         {
//           "name": "Émirats arabes unis",
//           "capital": "Abou Dabi"
//         },
//         {
//           "name": "Géorgie",
//           "capital": "Tbilissi"
//         },
//         {
//           "name": "Inde",
//           "capital": "New Delhi"
//         },
//         {
//           "name": "Indonésie",
//           "capital": "Jakarta"
//         },
//         {
//           "name": "Irak",
//           "capital": "Bagdad"
//         },
//         {
//           "name": "Iran",
//           "capital": "Téhéran"
//         },
//         {
//           "name": "Israël",
//           "capital": "Jérusalem"
//         },
//         {
//           "name": "Japon",
//           "capital": "Tokyo"
//         },
//         {
//           "name": "Jordanie",
//           "capital": "Amman"
//         },
//         {
//           "name": "Kazakhstan",
//           "capital": "Noursoultan"
//         },
//         {
//           "name": "Kirghizistan",
//           "capital": "Bichkek"
//         },
//         {
//           "name": "Koweït",
//           "capital": "Koweït"
//         },
//         {
//           "name": "Laos",
//           "capital": "Vientiane"
//         },
//         {
//           "name": "Liban",
//           "capital": "Beyrouth"
//         },
//         {
//           "name": "Malaisie",
//           "capital": "Kuala Lumpur"
//         },
//         {
//           "name": "Maldives",
//           "capital": "Malé"
//         },
//         {
//           "name": "Mongolie",
//           "capital": "Oulan-Bator"
//         },
//         {
//           "name": "Népal",
//           "capital": "Katmandou"
//         },
//         {
//           "name": "Oman",
//           "capital": "Mascate"
//         },
//         {
//           "name": "Ouzbékistan",
//           "capital": "Tachkent"
//         },
//         {
//           "name": "Pakistan",
//           "capital": "Islamabad"
//         },
//         {
//           "name": "Philippines",
//           "capital": "Manille"
//         },
//         {
//           "name": "Qatar",
//           "capital": "Doha"
//         },
//         {
//           "name": "Singapour",
//           "capital": "Singapour"
//         },
//         {
//           "name": "Sri Lanka",
//           "capital": "Sri Jayawardenapura Kotte"
//         },
//         {
//           "name": "Syrie",
//           "capital": "Damas"
//         },
//         {
//           "name": "Tadjikistan",
//           "capital": "Douchanbé"
//         },
//         {
//           "name": "Taïwan",
//           "capital": "Taipei"
//         },
//         {
//           "name": "Thaïlande",
//           "capital": "Bangkok"
//         },
//         {
//           "name": "Timor oriental",
//           "capital": "Dili"
//         },
//         {
//           "name": "Turkménistan",
//           "capital": "Achgabat"
//         },
//         {
//           "name": "Turquie",
//           "capital": "Ankara"
//         },
//         {
//           "name": "Viêt Nam",
//           "capital": "Hanoï"
//         },
//         {
//           "name": "Yémen",
//           "capital": "Sanaa"
//         }
//       ]
//     },
//     {
//       "name": "Océanie",
//       "countries": [
//         {
//           "name": "Australie",
//           "capital": "Canberra"
//         },
//         {
//           "name": "Fidji",
//           "capital": "Suva"
//         },
//         {
//           "name": "Kiribati",
//           "capital": "Tarawa-Sud"
//         },
//         {
//           "name": "Iles Marshall",
//           "capital": "Majuro"
//         },
//         {
//           "name": "Iles Cook",
//           "capital": "Avarua"
//         },
//         {
//           "name": "Micronésie",
//           "capital": "Palikir"
//         },
//         {
//           "name": "Nauru",
//           "capital": "Yaren"
//         },
//         {
//           "name": "Nouvelle-Zélande",
//           "capital": "Wellington"
//         },
//         {
//           "name": "Palaos",
//           "capital": "Melekeok"
//         },
//         {
//           "name": "Papouasie-Nouvelle-Guinée",
//           "capital": "Port Moresby"
//         },
//         {
//           "name": "Iles Salomon",
//           "capital": "Honiara"
//         },
//         {
//           "name": "Samoa",
//           "capital": "Apia"
//         },
//         {
//           "name": "Tonga",
//           "capital": "Nuku'alofa"
//         },
//         {
//           "name": "Tuvalu",
//           "capital": "Funafuti"
//         },
//         {
//           "name": "Vanuatu",
//           "capital": "Port-Vila"
//         }
//       ]
//     }
//   ]