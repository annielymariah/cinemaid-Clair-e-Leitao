interface MovieCardProps {
  id: number;
  title: string;
  poster_path: string;
}

function MovieCard({ id, title, poster_path }: MovieCardProps) {
  return (
    <div key={id}>
      <img className="rounded" width={200} height={300}
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
      />
      <h2 className="text-center fs-6">{title}</h2>
    </div>
  );
}

export default MovieCard;