import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { REHYDRATE } from "redux-persist";
import { Movie } from "../../types";

export interface FavoritesState {
  movies: Movie[];
}
const initialState: FavoritesState = {
  movies: [],
};
const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<Movie>) => {
      state.movies.push(action.payload);
    },
    removeFromFavorites: (state, action: PayloadAction<Movie>) => {
      const targetId = state.movies.findIndex(
        (item) => item.imdbID === action.payload.imdbID
      );
      state.movies.splice(targetId, 1);
    },
  },
  extraReducers(builder) {
    builder.addCase(REHYDRATE, (state, action: any) => {
      state = action.payload;
    });
  },
});

export default favoritesSlice;

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
