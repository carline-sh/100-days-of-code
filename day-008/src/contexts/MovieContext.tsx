import {
  createContext,
  useState,
  useContext,
  useEffect,
  type FC,
  type PropsWithChildren,
} from "react";
import type { Movie } from "../components/MovieCard";

type MovieContext = {
  isFavorite: any;
  addToFavorites: any;
  removeFromFavorites: any;
  favorites: Movie[];
};

const MovieContext = createContext<MovieContext>({} as any);

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider: FC<PropsWithChildren> = ({ children }) => {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  useEffect(() => {
    const storedFavs = localStorage.getItem("favorites");

    if (storedFavs) setFavorites(JSON.parse(storedFavs));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (movie: Movie) => {
    setFavorites((prev) => [...prev, movie]);
  };

  const removeFromFavorites = (movieId: string) => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  const isFavorite = (movieId: string) => {
    return favorites.some((movie) => movie.id === movieId);
  };

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
