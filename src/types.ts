export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface MovieDetails {
  Actors?: string;
  Awards?: string;
  BoxOffice?: string;
  Country?: string;
  DVD?: string;
  Director?: string;
  Genre?: string;
  Language?: string;
  Metascore?: string;
  Plot?: string;
  Poster?: string;
  production?: string;
  Rated?: string;
  Ratings?: {
    Source: string;
    Value: string;
  }[];
  Released?: string;
  Response: "True" | "False";
  Runtime?: string;
  Title: string;
  Type?: string;
  Website?: string;
  Writer?: string;
  Year?: string;
  imdbID: string;
  imdbRating?: string;
  imdbVotes?: string;
  Error?: string;
}
