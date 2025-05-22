interface MovieCardProps {
  id: number;
  title: string;
  poster_path: string;
}

function MovieCard({ id, title, poster_path }: MovieCardProps) {
  return (
    <div key={id}>
      <img
        className="rounded border border-primary mt-3 mb-5"
        width={200}
        height={300}
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
      />
    </div>
  );
}

export default MovieCard;
