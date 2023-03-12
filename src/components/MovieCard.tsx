import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { Movie } from "../types";
import posterPlaceholder from "../../public/poster-placeholder.jpg";
import Link from "next/link";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useFavoritesHandler } from "../hooks";

export const MovieCard = ({ movie }: { movie: Movie }) => {
  const { inFavorites, onFavoriteClick } = useFavoritesHandler(movie);

  return (
    <Card
      sx={{
        maxWidth: "300px",
        height: "100%",
        mx: "auto",
        position: "relative",
      }}
    >
      <IconButton
        sx={{ position: "absolute", bottom: "3px", right: "3px" }}
        onClick={onFavoriteClick}
      >
        {inFavorites ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>
      <Link href={`/${movie.imdbID}`}>
        <CardMedia
          component="img"
          height="350"
          src={movie.Poster !== "N/A" ? movie.Poster : posterPlaceholder.src}
          alt={`${movie.Title} poster`}
        />
      </Link>
      <CardContent>
        <Typography variant="h6" component="h3" textAlign="center">
          {movie.Title}
          <Typography
            variant="h6"
            component="p"
            color={"primary"}
            textAlign="center"
          >
            ({movie.Year})
          </Typography>
        </Typography>
      </CardContent>
    </Card>
  );
};
