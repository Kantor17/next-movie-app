import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Movie } from "../types";
import posterPlaceholder from "../../public/poster-placeholder.jpg";

export const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <Card sx={{ maxWidth: "300px", height: "100%", mx: "auto" }}>
      <CardMedia
        component="img"
        height="350"
        src={movie.Poster !== "N/A" ? movie.Poster : posterPlaceholder.src}
        alt={`${movie.Title} poster`}
      />
      <CardContent>
        <Typography variant="h6" component="h3" textAlign="center">
          {movie.Title}
          <Typography variant="h6" component="p" color={"primary"} textAlign="center">({movie.Year})</Typography>
        </Typography>
      </CardContent>
    </Card>
  );
};
