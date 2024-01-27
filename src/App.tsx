import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from './pages/HomePage';
import NoPage from './pages/NoPage';
import ContinentCountriesCapitals from "./pages/ContinentCountriesCapitals";
import HomeIcon from "./components/icons/HomeIcon";

function App() {
  return (
    <BrowserRouter>
      <div className="text-gray-800 min-h-screen w-full bg-gray-50">
        <header className="sticky top-0">
          <div className="w-full bg-gray-200 shadow-sm text-center px-3 py-2 flex">
            <Link to="/" className="transition duration-150 flex gap-1 py-2 px-4 bg-gray-300 ring-1 ring-transparent ring-inset hover:ring-gray-400 rounded-md">
              <HomeIcon className="text-xl" />
              Accueil
            </Link>
          </div>
        </header>
        <div className="flex p-3">
          <Routes>
            <Route path="/">
              <Route index element={<HomePage />} />
              <Route path="continent/:continentName/capitals" element={<ContinentCountriesCapitals />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
