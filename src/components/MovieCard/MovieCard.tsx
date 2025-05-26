import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";


interface MovieCardProps {
  id: number;
  title: string;
  poster_path: string;
}

export default function MovieCard({ id, title, poster_path }: MovieCardProps) {
  const location = useLocation();

  const isMainPage = location.pathname === "/";

  return (
    <Link to={`/filme/${id}`} className="text-decoration-none">
      <div key={id}>
        <img
          className="rounded border border-primary mt-3"
          width={200}
          height={300}
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />

        {isMainPage ? (
            <div></div>
          ) : (

        <h2 className="text-center fs-6">{title}</h2>
          )}
      </div>
    </Link>
  );
}


