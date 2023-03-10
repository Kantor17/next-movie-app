import { Card, Grid, Typography } from "@mui/material";
import { useAppSelector } from "../hooks";

const MoviesList = () => {
  const { movies, status, error } = useAppSelector((state) => state.search);
  if (!movies)
    return (
      <Typography>Type in a title to get a list of matching movies.</Typography>
    );
  if (status === "pending") return <Typography>Loading...</Typography>;
  if (error) return <Typography>{error.message}</Typography>;
  return (
    <Grid>
      {movies.map((movie) => (
        <Card key={movie.imdbID}>
          <Typography>{movie.Title}</Typography>
          <Typography>{movie.Year}</Typography>
        </Card>
      ))}
    </Grid>
  );
};

export default MoviesList;
