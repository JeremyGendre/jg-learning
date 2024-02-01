import { useEffect, useMemo, useState } from "react";
import { useContinentContext } from "../contexts/ContinentContext";
import Continent from "../interfaces/continent.interface";
import Country from "../interfaces/country.interface";

export type QuizzSize = number | 'all';

export type QuizzQuestion = {
  countryName: string;
  capitalChoices: QuizzAnswer[];
};

export type QuizzAnswer = {
  capital: string;
  isCorrect: boolean;
  correctAnswer: string;
};

export type UserQuizzAnswers = Record<string, QuizzAnswer>;

type QuizzProps = {
  selectedContinents: Continent[];
  quizzSize: QuizzSize;
  onQuizzEnd: (userQuizzAnswers: UserQuizzAnswers) => void;
};

export default function Quizz({ selectedContinents, quizzSize, onQuizzEnd }: QuizzProps){
  const { continents } = useContinentContext();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<UserQuizzAnswers>({});

  const selectedContinentsCapitalsNumber = useMemo(() => {
    return selectedContinents.reduce((acc, continent) => acc + continent.countries.length, 0)
  }, [selectedContinents])

  const countries: Country[] = useMemo(() => {
    const countries: Country[] = [];
    selectedContinents.forEach(continent => {
      continent.countries.forEach(country => {
        countries.push(country);
      });
    });
    return countries;
  },[selectedContinents]);

  const allCountries: Country[] = useMemo(() => {
    const countries: Country[] = [];
    continents.forEach(continent => {
      continent.countries.forEach(country => {
        countries.push(country);
      });
    });
    return countries;
  },[continents]);

  const quizzQuestions: QuizzQuestion[] = useMemo(() => {
    const questions: QuizzQuestion[] = [];
    const quizzSizeNumber = quizzSize === 'all' ? selectedContinentsCapitalsNumber : quizzSize;
    if(quizzSizeNumber === 0) {
      return questions;
    }
    // get <quizzSizeNumber> random countries
    const randomCountries = countries.sort(() => Math.random() - Math.random()).slice(0, quizzSizeNumber);
    // for each country, get the capital and 3 random capitals and shuffle them
    randomCountries.forEach(country => {
      const capitalChoices = [country.capital, ...allCountries.filter(c => c.capital !== country.capital).sort(() => Math.random() - Math.random()).slice(0, 3).map(c => c.capital)].sort(() => Math.random() - Math.random());
      questions.push({
        countryName: country.name,
        capitalChoices: capitalChoices.map(capital => ({
          capital,
          isCorrect: capital === country.capital,
          correctAnswer: country.capital
        }))
      });
    });
    return questions;
  },[selectedContinentsCapitalsNumber, countries, quizzSize, allCountries]);

  function selectAnswer(answer: QuizzAnswer) {
    setAnswers(old => ({
      ...old,
      [quizzQuestions[currentQuestionIndex].countryName]: answer
    }));
    if(currentQuestionIndex < quizzQuestions.length - 1) {
      setCurrentQuestionIndex(old => old + 1);
    }
  }

  useEffect(() => {
    if(Object.keys(answers).length === quizzQuestions.length) {
      onQuizzEnd(answers);
    }
  }, [answers, onQuizzEnd, quizzQuestions]);

  return (
    <div className="flex justify-end flex-col items-center">
      <div className="text-3xl font-bold mb-4 text-center">{quizzQuestions[currentQuestionIndex].countryName}</div>
      <div className="grid grid-cols-2 gap-2 md:gap-4 w-full sm:w-4/5 md:w-fit">
        {quizzQuestions[currentQuestionIndex].capitalChoices.map((answer) => (
          <div 
            key={`${answer.capital}-${Math.floor(Math.random() * 1000)}`} 
            className="text-base text-center flex items-center justify-center bg-blue-200 rounded-md p-3 py-10 sm:!p-6 md:!p-10 cursor-pointer hover:bg-blue-300 transition duration-150"
            onClick={() => selectAnswer(answer)}
          >
            {answer.capital}
          </div>
        ))}
      </div>
      <div className="mt-4">
        {currentQuestionIndex + 1} / {quizzQuestions.length}
      </div>
    </div>
  );
}