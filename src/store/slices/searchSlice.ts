import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchMovies from "../../API/fetchMovies";
import { Movie } from "../../types";

const MOVIES_PER_PAGE = 10;

interface SearchState {
  movies: Movie[] | null;
  status: "pending" | "rejected" | "fulfilled";
  error: Error | null;
  query: string;
  currentPage: number;
  totalPages: number;
}
const initialState: SearchState = {
  movies: null,
  status: "fulfilled",
  error: null,
  query: '',
  currentPage: 0,
  totalPages: 0,
};

export const searchMovies = createAsyncThunk(
  "searchMovies",
  async ({ query, page = 1 }: { query: string; page?: number }) => {
    const res = await fetchMovies(query, page);
    return res;
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchMovies.pending, (state, action) => {
      state.error = null;
      state.status = "pending";
      state.query = action.meta.arg.query;
      state.currentPage = action.meta.arg.page || 1;
    });
    builder.addCase(searchMovies.rejected, (state) => {
      state.status = "rejected";
      state.movies = [];
    });
    builder.addCase(searchMovies.fulfilled, (state, action) => {
      if (action.payload.Search && action.payload.totalResults) {
        state.status = "fulfilled";
        state.movies = action.payload.Search;
        state.totalPages = Math.round(+action.payload.totalResults / 10);
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
