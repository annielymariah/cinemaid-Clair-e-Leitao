import { MoviesList } from "../../components/MoviesList";

export default function Main() {
  return (
    <div>
      <MoviesList title="Top Filmes do Dia" apiEndpoint="trending/movie/day" />
      <MoviesList title="Top Filmes da Semana" apiEndpoint="trending/movie/week"/>
      <MoviesList title="Filmes Populares" apiEndpoint="movie/popular" />
      <MoviesList title="Melhores Avaliados" apiEndpoint="movie/popular" />
      <MoviesList title="Próximos Lançamentos" apiEndpoint="movie/upcoming" />
    </div>
  );
}
