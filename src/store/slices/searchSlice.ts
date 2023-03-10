import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchMovies from "../../API/fetchMovies";
import { Movie } from "../../types";

interface SearchState {
  movies: Movie[] | null;
  status: "pending" | "rejected" | "fulfilled";
  error: Error | null;
}
const initialState: SearchState = {
  movies: null,
  status: "fulfilled",
  error: null,
};

export const searchMovies = createAsyncThunk(
  "searchMovies",
  async (query: string) => {
    const res = await fetchMovies(query);
    return res;
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchMovies.pending, (state) => {
      state.error = null;
      state.status = "pending";
    });
    builder.addCase(searchMovies.rejected, (state) => {
      state.status = "rejected";
    });
    builder.addCase(searchMovies.fulfilled, (state, action) => {
      if (action.payload.Search) {
        state.status = "fulfilled";
        state.movies = action.payload.Search;
      } else {
        state.status = "rejected";
        state.movies = [];
        state.error = new Error(
          action.payload.Error || "Something wrong with the server."
        );
      }
    });
  },
});

export default searchSlice;
