import { Container, Grid, Typography } from "@mui/material";
import { GetServerSideProps } from "next";
import fetchMovieDetails from "../API/fetchMovieDetails";
import { MovieDetails } from "../types";
import posterPlaceholder from "../../public/poster-placeholder.jpg";
import { Box } from "@mui/system";
import { DetailsField } from "../components/DetailsField";
import { Header } from "../components/Header";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params?.id as string;
  const movie = await fetchMovieDetails(id);
  if (movie.Error)
    return {
      notFound: true,
    };

  return {
    props: {
      movie,
    },
  };
};

export const MovieDetailsPage = ({ movie }: { movie: MovieDetails }) => {
  return (
    <>
      <Header />
      <Container component="main">
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            spacing={2}
            sx={{ minHeight: "100vh", py: 3 }}
          >
            <Grid item md={6}>
              <img
                height="450"
                style={{ maxWidth: "100%" }}
                src={
                  movie.Poster !== "N/A" ? movie.Poster : posterPlaceholder.src
                }
                alt={`${movie.Title} poster`}
              />
            </Grid>
            <Grid item md={6} container direction="column" spacing={0.5}>
              <Grid item sx={{ mb: 1 }}>
                <Typography variant="h3" component="h1">
                  {movie.Title}
                  <Typography variant="h4" component="span" color="primary">
                    {" "}
                    ({movie.Year})
                  </Typography>
                </Typography>
              </Grid>
              <DetailsField title="Director" value={movie.Director} />
              <DetailsField title="Genre" value={movie.Genre} />
              <DetailsField title="Plot" value={movie.Plot} />
              <DetailsField title="Starring" value={movie.Actors} />
              <DetailsField title="Awards" value={movie.Awards} />
              <DetailsField title="Revenue" value={movie.BoxOffice} />
              {movie.Ratings && (
                <Grid item>
                  <>
                    <Typography color="primary" variant="h5" component="h2">
                      Ratings
                    </Typography>
                    {movie.Ratings.map((rating, idx) => {
                      return (
                        <Typography key={`${rating.Source}${idx}}`}>
                          {rating.Source} - {rating.Value}
                        </Typography>
                      );
                    })}
                  </>
                </Grid>
              )}
            </Grid>
          </Grid>
      </Container>
    </>
  );
};
export default MovieDetailsPage;
