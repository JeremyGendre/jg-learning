import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import NoPage from './pages/NoPage';
import ContinentCountriesCapitals from "./pages/ContinentCountriesCapitals";
import LearnPage from "./pages/LearnPage";
import QuizzPage from "./pages/QuizzPage";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="text-gray-800 min-h-screen w-full bg-gray-50">
        <Header />
        <div className="flex p-3">
          <Routes>
            <Route path="/">
              <Route index element={<HomePage />} />
              <Route path="learn/:continentName/capitals" element={<ContinentCountriesCapitals />} />
              <Route path="learn" element={<LearnPage />} />
              <Route path="quizz" element={<QuizzPage />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
