import { Container } from "@mui/material";
import { Box } from "@mui/material/";
import type { NextPage } from "next";
import React from "react";
import MoviesList from "../components/MoviesList";
import SearchBar from "../components/SearchBar";

const Home: NextPage = () => {
  return (
    <Container>
      <Box component="main" sx={{ py: 2 }}>
        <SearchBar />
        <MoviesList />
      </Box>
    </Container>
  );
};

export default Home;
