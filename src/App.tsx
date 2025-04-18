import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import NoPage from './pages/NoPage';
import ContinentCountriesCapitals from "./pages/capital-cities/ContinentCountriesCapitals";
import LearnPage from "./pages/capital-cities/LearnPage";
import QuizzPage from "./pages/capital-cities/QuizzPage";
import Header from "./components/Header";
import CapitalCitiesLayout from "./pages/capital-cities/Layout";
import CapitalCitiesIndex from "./pages/capital-cities/Index";
import RomanEmpireLayout from "./pages/roman-empire/Layout";
import RomanEmpireIndex from "./pages/roman-empire/Index";
import ReignsPage from "./pages/roman-empire/ReignsPage";
import KeyDatesPage from "./pages/roman-empire/KeyDatesPage";
import ReignPage from "./pages/roman-empire/ReignPage";
import CesarPage from "./pages/roman-empire/Cesar";

function App() {
  return (
    <BrowserRouter>
      <div className="text-gray-800 min-h-screen w-full bg-gray-50">
        <Header />
        <div className="flex p-3">
          <Routes>
            <Route path="/">
              <Route index element={<HomePage />} />
              <Route path="/capital-cities" element={<CapitalCitiesLayout />}>
                <Route index element={<CapitalCitiesIndex />} />
                <Route path="learn/:continentName/capitals" element={<ContinentCountriesCapitals />} />
                <Route path="learn" element={<LearnPage />} />
                <Route path="quizz" element={<QuizzPage />} />
              </Route>
              <Route path="/roman-empire" element={<RomanEmpireLayout/>}>
                <Route index element={<RomanEmpireIndex />} />
                <Route path="cesar" element={<CesarPage />} />
                <Route path="reigns" element={<ReignsPage />} />
                <Route path="reigns/:name" element={<ReignPage />} />
                <Route path="key-dates" element={<KeyDatesPage />} />
              </Route>
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
