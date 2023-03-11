import { MovieDetails } from "../types";

export default async function fetchMovieDetails(id: string): Promise<MovieDetails> {
  const res = await fetch(
    `http://www.omdbapi.com/?apikey=${process.env.API_KEY}&i=${id}`
  );
  return res.json();
}
