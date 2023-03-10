import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import { useAppSelector } from "../hooks";
import { MovieCard } from "./MovieCard";

const MoviesList = () => {
  const { movies, status, error } = useAppSelector((state) => state.search);
  if (status === "pending")
    return (
      <Box sx={{ display: "flex", justifyContent: "center", py: 2 }}>
        <CircularProgress />
      </Box>
    );
  if (!movies)
    return (
      <Typography sx={{ py: 1.5 }}>
        Type in a title to get a list of matching movies.
      </Typography>
    );
  if (error) return <Typography color="error">{error.message}</Typography>;
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

export default MoviesList;
