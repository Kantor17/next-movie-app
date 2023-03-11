import {
  AppBar,
  Container,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();
  return (
    <AppBar position="static">
        <Container>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => router.back()}
          >
            <ArrowBackIcon />
          </IconButton>
        </Container>
    </AppBar>
  );
};
