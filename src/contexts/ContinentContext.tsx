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

	const getContinent = useCallback((name: string) => {
		return continents.find(continent => continent.name === name);
	}, [continents])

	return (
		<ContinentContext.Provider value={{ continents, getContinent }}>
			{children}
		</ContinentContext.Provider>
	);
}