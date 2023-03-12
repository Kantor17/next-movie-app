import { Grid } from "@mui/material";
import { Movie } from "../types";
import { MovieCard } from "./MovieCard";

const MovieList = ({ movies }: { movies: Movie[] }) => {
  return (
    <Grid container spacing={2} sx={{ py: 2 }}>
      {movies.map((movie) => (
        <Grid item key={movie.imdbID} md={3} sm={6} xs={12}>
          <MovieCard movie={movie} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieList;
