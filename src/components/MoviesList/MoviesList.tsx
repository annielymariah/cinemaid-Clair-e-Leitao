import { useEffect, useState } from "react";
import api from "../../services/api";
import { MovieCard } from "../MovieCard";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  overview: string;
}

interface MoviesListProps {
  title: string;
  apiEndpoint: string;
}

export default function MoviesList({ title, apiEndpoint }: MoviesListProps) {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function loadMovies() {
      try {
        const response = await api.get(apiEndpoint);
        setMovies(response.data.results);
      } catch (error) {
        console.error("Erro ao buscar itens:", error);
      }
    }

    loadMovies();
  }, [apiEndpoint]);

  return (
    <div className="container">
      <h2 className="mt-4">{title}</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6 g-3">
        {movies.map((movie) => (
          <MovieCard {...movie} />
        ))}
      </div>
    </div>
  );
}
