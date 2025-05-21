import { useEffect, useState } from "react";
import api from "../services/api";
import "../app/global.css";

interface Movie { 
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  overview: string;
}

export default function MoviesList() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function loadMovies() {
      try {
        const response = await api.get("trending/movie/day", {
        });
        //console.log(response.data.results)
        setMovies(response.data.results);
      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
      }
    }

    loadMovies();
  }, []);

  return (
      <div>
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <h2>{movie.title}</h2>
            <p className="overview">{movie.overview}</p>
          </div>
        ))}
    </div>
  );
}