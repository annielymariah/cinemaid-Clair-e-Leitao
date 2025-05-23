import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";

interface MovieDetails {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
  runtime: number;
  genres: {
    id: number;
    name: string;
  }[];
}

export default function MovieDetails() {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<MovieDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const response = await api.get(`/movie/${id}`);
        setMovie(response.data);
      } catch (err) {
        setError("Erro ao carregar detalhes sobre o filme selecionado.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchMovieDetails();
  }, [id]);

  if (loading) return <div className="text-center">Carregando</div>;
  if (error) return <div className="alert alert-danger my-5">{error}</div>;
  if (!movie)
    return <div className="alert alert-warning my-5">Filme não encontrado</div>;

  return (
    <>
      <Navbar />

      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-md-4 mb-4">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="img-fluid border border-primary rounded"
            />
          </div>

          <div className="col-md-6">
            <h1 className="display-4">{movie.title}</h1>
            <div className="d-flex flex-wrap gap-2 mb-3">
              {movie.genres.map((genre) => (
                <span key={genre.id} className="badge bg-primary">
                  {genre.name}
                </span>
              ))}
            </div>

            <div className="mb-4">
              <p>
                <strong>Data de lançamento:</strong>{" "}
                {new Date(movie.release_date).toLocaleDateString()}
              </p>
              <p>
                <strong>Avaliação:</strong> {movie.vote_average.toFixed(1)}/10
              </p>
              <p>
                <strong>Duração:</strong> {Math.floor(movie.runtime / 60)}h{" "}
                {movie.runtime % 60}m
              </p>
            </div>

            <h3>Sinopse</h3>
            <p className="lead">{movie.overview}</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
