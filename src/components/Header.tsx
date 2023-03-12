import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import Link from "@mui/material/Link";

export const Header = () => {
  return (
    <AppBar position="relative">
      <Container>
        <Toolbar
          variant="dense"
          disableGutters
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Link href={"/"}>
            <Typography
              variant="h5"
              component="span"
              noWrap
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
          </Link>
          <Link href="/favorites">
            Favorites
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
