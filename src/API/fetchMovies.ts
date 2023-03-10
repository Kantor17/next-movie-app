import { Movie } from "../types";

interface Response {
  Search?: Movie[];
  totalResults?: string;
  Error?: string;
  Response: string;
}

export default async function fetchMovies(query: string): Promise<Response> {
  const res = await fetch(
    `http://www.omdbapi.com/?apikey=${process.env.API_KEY}&s=${query}`
  );
  return res.json();
}
