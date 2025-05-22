import { Footer } from "../../components/Footer";
import { MoviesListSwipped } from "../../components/MoviesListSwipped";
import { Navbar } from "../../components/Navbar";

export default function Main() {
  return (
    <>
      <Navbar />

      <div className="mt-5 pt-3">
        <MoviesListSwipped
          title="Top Filmes do Dia"
          apiEndpoint="trending/movie/day"
        />
        <MoviesListSwipped
          title="Top Filmes da Semana"
          apiEndpoint="trending/movie/week"
        />
        <MoviesListSwipped
          title="Filmes Populares"
          apiEndpoint="movie/popular"
        />
        <MoviesListSwipped
          title="Melhores Avaliados"
          apiEndpoint="movie/top_rated"
        />
        <MoviesListSwipped
          title="Próximos Lançamentos"
          apiEndpoint="movie/upcoming"
        />
      </div>

      <Footer />
    </>
  );
}
