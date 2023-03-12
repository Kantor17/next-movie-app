import { Box, CircularProgress, Typography } from "@mui/material";
import { useAppSelector } from "../hooks";
import MovieList from "./MovieList";

const SearchList = () => {
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
  return <MovieList movies={movies} />;
};

export default SearchList;
