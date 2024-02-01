import { useCallback, useEffect, useMemo, useState } from "react";
import { useContinentContext } from "../contexts/ContinentContext";
import QuizzContinentCard from "../components/QuizzContinentCard";
import Button from "../components/Button";
import Quizz, { QuizzSize, UserQuizzAnswers } from "../components/Quizz";
import Continent from "../interfaces/continent.interface";
import Checkbox from "../components/Checkbox";

export default function QuizzPage(){
  const { continents } = useContinentContext();
  const [selectedContinents, setSelectedContinents] = useState<Continent[]>([]);
  const [quizzStarted, setQuizzStarted] = useState(false)
  const [quizzSize, setQuizzSize] = useState<QuizzSize>('all')
  const [userQuizzAnswers, setUserQuizzAnswers] = useState<UserQuizzAnswers>({});
  const [showCorrectAnswers, setShowCorrectAnswers] = useState(false)
  const displayedQuizzAnswers = useMemo(() => {
    const answers: UserQuizzAnswers = {};
    Object.entries(userQuizzAnswers).forEach(([countryName, answer]) => {
      if(showCorrectAnswers || !answer.isCorrect) {
        answers[countryName] = answer;
      }
    })
    return answers;
  },[userQuizzAnswers, showCorrectAnswers])

  const selectedContinentsCapitalsNumber = useMemo(() => {
    return selectedContinents.reduce((acc, continent) => acc + continent.countries.length, 0)
  }, [selectedContinents])

  const handleCheckboxChange = useCallback((continent: Continent) => {
    if(!selectedContinents.find(c => c.name === continent.name)){
      setSelectedContinents(old => [...old, continent]);
    } else {
      setSelectedContinents(old => old.filter((c) => c.name !== continent.name));
    }
  }, [selectedContinents])

  function startQuizz() {
    setUserQuizzAnswers({})
    setQuizzStarted(true)
  }

  function stopQuizz() {
    setQuizzStarted(false)
    setSelectedContinents([])
    setUserQuizzAnswers({})
  }

  function handleQuizzSizeChange(value: QuizzSize) {
    if(quizzSize === value) {
      setQuizzSize('all')
    } else {
      setQuizzSize(value)
    }
  }

  function onQuizzEnd(userQuizzAnswers: UserQuizzAnswers) {
    setUserQuizzAnswers(userQuizzAnswers)
    setQuizzStarted(false)
  }

  function reset(){
    setSelectedContinents([]);
    setQuizzStarted(false);
    setUserQuizzAnswers({});
  }

  useEffect(() => {
    if (!selectedContinents.length) {
      setQuizzSize('all')
    }
  }, [selectedContinents])

  if (quizzStarted) {
    return (
      <div className="w-full">
        <Quizz 
          selectedContinents={selectedContinents} 
          quizzSize={quizzSize} 
          onQuizzEnd={onQuizzEnd}
        />
        <div className="mt-8">
          <Button label="Arrêter le quizz" onClick={stopQuizz} />
        </div>
      </div>
    );
  } else if (Object.keys(userQuizzAnswers).length) {
    return (
      <div className="flex flex-col gap-6 items-center justify-center w-full">
        <div className="flex gap-2">
          <Button label="Recommencer" onClick={startQuizz} />
          <Button label="Changer" onClick={reset} />
        </div>
        <div>
          <Button 
            label={showCorrectAnswers ? "Cacher les bonnes réponses" : "Afficher les bonnes réponses"} 
            variant="tinted" 
            onClick={() => setShowCorrectAnswers(old => !old)} 
          />
        </div>
        <div className="w-full flex flex-col text-center gap-4">
          <div className="text-2xl font-bold">Résultats</div>
          <div className="text-xl">Vous avez obtenu {Object.values(userQuizzAnswers).filter(a => a.isCorrect).length} / {Object.values(userQuizzAnswers).length} points</div>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {Object.entries(displayedQuizzAnswers).map(([countryName, answer]) => (
                <div 
                  key={countryName}
                  className={`flex flex-col gap-1.5 items-center ring-1 ring-inset rounded-md px-3 py-4 ${answer.isCorrect ? 'bg-green-100 ring-green-300' : 'bg-red-100 ring-red-300'}`}
                >
                  <div className="text-xl">{countryName}</div>
                  <div className="text-lg font-semibold">{answer.capital}</div>
                  {!answer.isCorrect ? (
                    <div className="italic">
                      Bonne réponse : <span className="font-semibold">{answer.correctAnswer}</span>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <Button label="Recommencer" onClick={startQuizz} />
          <Button label="Changer" onClick={reset} />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col text-center gap-4 mt-4">
      Sélectionnez les continents sur lesquels vous souhaitez être interrogé :
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {continents.map(continent => (
            <QuizzContinentCard 
              key={continent.name}
              continent={continent}
              active={selectedContinents.includes(continent)}
              onClick={() => handleCheckboxChange(continent)}
            />
          ))}
        </div>
      </div>
      {
        selectedContinentsCapitalsNumber > 10 ? (
          <div className="flex flex-col gap-2">
            <div>Choisissez le nombre de questions que vous souhaitez</div>
            <div className="flex gap-2 justify-center">
              <Checkbox id="10" checked={quizzSize === 10} onChange={() => handleQuizzSizeChange(10)} label="10" />
              <Checkbox id="20" checked={quizzSize === 20} onChange={() => handleQuizzSizeChange(20)} label="20" />
              <Checkbox id="all" checked={quizzSize === 'all'} onChange={() => handleQuizzSizeChange('all')} label="Tout" />
            </div>
          </div>
        ) : null
      }
      <div>
        <Button label="Lancer le quizz" onClick={startQuizz} disabled={!selectedContinents?.length} />
      </div>
    </div>
  );
}