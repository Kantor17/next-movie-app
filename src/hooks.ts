import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import type { AppDispatch, AppState } from "./store";
import {
  addToFavorites,
  removeFromFavorites,
} from "./store/slices/favoritesSlice";
import { Movie } from "./types";

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export const useFavoritesHandler = (movie: Movie) => {
  const dispatch = useAppDispatch();
  const favoriteMovies = useAppSelector((state) => state.favorites.movies);
  const inFavorites = favoriteMovies.some(
    (item) => item.imdbID === movie.imdbID
  );
  let onFavoriteClick;
  if (inFavorites) {
    onFavoriteClick = () => dispatch(removeFromFavorites(movie));
  } else {
    onFavoriteClick = () => dispatch(addToFavorites(movie));
  }

  return {
    onFavoriteClick,
    inFavorites,
  };
};
