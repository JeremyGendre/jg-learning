import Country from "./country.interface";

export default interface Continent {
  name: string;
  image: string;
  countries: Country[];
}