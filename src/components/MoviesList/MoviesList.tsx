import { useEffect, useState } from "react";
import api from "../../services/api";
import { MovieCard } from "../MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

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
    <div className="container position-relative py-4">
      <h2 className="mb-4">{title}</h2>

      <Swiper
        spaceBetween={20}
        slidesPerView={"auto"}
        navigation
        pagination={{ clickable: true }}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id} style={{ width: "200px" }}>
            <MovieCard {...movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
