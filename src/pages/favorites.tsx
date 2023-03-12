import { Container, Typography } from "@mui/material";
import { NextSeo } from "next-seo";
import { Header } from "../components/Header";
import MovieList from "../components/MovieList";
import { useAppSelector } from "../hooks";

export const Favorites = () => {
  const { movies } = useAppSelector((state) => state.favorites);
  return (
    <>
      <NextSeo
        title="Favorites"
        description="List of all movies that user marked as 'favorite'"
      />
      <Header />
      <Container component="main" sx={{ py: 1 }}>
        <Typography variant="h3" component="h2" textAlign={"center"}>
          Favorite movies
        </Typography>
        {movies.length > 0 ? (
          <MovieList movies={movies} />
        ) : (
          <Typography textAlign={"center"} sx={{p: 3}}>
            You haven't add any movies to your favorites yet.
          </Typography>
        )}
      </Container>
    </>
  );
};

export default Favorites;
