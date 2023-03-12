import { Movie } from "../types";

interface Response {
  Search?: Movie[];
  totalResults?: string;
  Error?: string;
  Response: "True" | "False";
}

export default async function fetchMovies(query: string, page = 1): Promise<Response> {
  const res = await fetch(
    `https://www.omdbapi.com/?apikey=${process.env.API_KEY}&s=${query}&page=${page}&type=movie`
  );
  return res.json();
}
