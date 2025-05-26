import { useEffect, useState } from "react";
import api from "../../services/api";
import { MovieCard } from "../MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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

      {movies.length > 0 ? (
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView="auto"
          navigation
          pagination={{ clickable: true }}
        >
          {movies.map((movie) => (
            <SwiperSlide key={movie.id} style={{ width: "200px" }}>
              <MovieCard {...movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p>Não há filmes disponíveis para essa categoria.</p>
      )}
    </div>
  );
}
