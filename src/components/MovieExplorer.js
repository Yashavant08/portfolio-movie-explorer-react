import { useState } from "react";
import movies from "../data/movie";

function MovieExplore() {
    const [search, setSearch] = useState("");
    const [favorites, setFavorites] = useState([]);
    const [showOnlyFavorites, setShowOnlyFavourites] = useState(false);
    const [genreFilter, setGenreFilter] = useState("All");
    const [sortBy, setSortBy] = useState("default");
    const filteredMovies = movies.filter((movie) => {
        const matchesSearch = movie.title
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesFavorite = showOnlyFavorites
            ? favorites.includes(movie.id)
            : true;

        const matchesGenre =
            genreFilter === "All" || movie.genre === genreFilter;

        return matchesSearch && matchesFavorite && matchesGenre;
    });

    const sortedMovies = [...filteredMovies].sort((a, b) => {
        if (sortBy === "title") {
            return a.title.localeCompare(b.title);
        }

        if (sortBy === "rating") {
            return b.rating - a.rating;
        }

        if (sortBy === "year") {
            return b.year - a.year;
        }

        return 0;
    });




    const ToggleFavorite = (id) => {
        if (favorites.includes(id)) {
            setFavorites(favorites.filter((favId) => favId !== id));
        } else {
            setFavorites([...favorites, id]);
        }
    };

    return (
  <div>
    <h1>Movie Explore</h1>
    <div className="controls">
  <p>Favorite Movies: {favorites.length}</p>

  <input
    type="text"
    placeholder="Search movies..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />

  <div>
    <button onClick={() => setGenreFilter("All")}>All</button>
    <button onClick={() => setGenreFilter("Action-Thriller")}>Action</button>
    <button onClick={() => setGenreFilter("Romance")}>Romance</button>
    <button onClick={() => setGenreFilter("Sci-Fi")}>Sci-Fi</button>
    <button onClick={() => setGenreFilter("Comedy")}>Comedy</button>
  </div>

  <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
    <option value="default">Sort By</option>
    <option value="title">Title A-Z</option>
    <option value="rating">Rating High to Low</option>
    <option value="year">Year New to Old</option>
  </select>

  <button onClick={() => setShowOnlyFavourites(!showOnlyFavorites)}>
    {showOnlyFavorites ? "Show All Movies" : "Show Favorite Movies"}
  </button>
</div>

    {filteredMovies.length === 0 ? (
      <p>No Movie Found</p>
    ) : (
      <div className="movie-container">
        {sortedMovies.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <img src={movie.image} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.year} | {movie.genre}</p>
            <p>Rating: {movie.rating}</p>

            <button onClick={() => ToggleFavorite(movie.id)}>
              {favorites.includes(movie.id) ? "❤️ Unfavorite" : "🤍 Favorite"}
            </button>
          </div>
        ))}
      </div>
    )}
  </div>
);

}

export default MovieExplore;