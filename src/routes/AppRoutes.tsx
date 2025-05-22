import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "../pages/Main";
import { FiltredMovies } from "../pages/FiltredMovies";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/filmes-populares" element={<FiltredMovies title="Filmes Populares" apiEndpoint="movie/popular" />} />
        <Route path="/melhores-avaliados" element={<FiltredMovies title="Melhores Avaliados" apiEndpoint="movie/top_rated" />} />
        <Route path="/lancamentos" element={<FiltredMovies title="Próximos Lançamentos" apiEndpoint="movie/upcoming" />} />
      </Routes>
    </BrowserRouter>
  );
};