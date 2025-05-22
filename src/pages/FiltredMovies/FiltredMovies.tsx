import { Footer } from "../../components/Footer";
import { MoviesList } from "../../components/MoviesList";
import { Navbar } from "../../components/Navbar";

interface FiltredMoviesProps {
  title: string;
  apiEndpoint: string;
}

export default function FiltredMovies({
  title,
  apiEndpoint,
}: FiltredMoviesProps) {
  return (
    <>
      <Navbar />
      <div className="container mt-5 pt-3">
        <MoviesList title={title} apiEndpoint={apiEndpoint} />
      </div>

      <Footer />
    </>
  );
}
