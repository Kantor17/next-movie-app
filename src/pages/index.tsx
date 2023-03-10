import { Container } from "@mui/material";
import type { NextPage } from "next";
import React from "react";
import MoviesList from "../components/MoviesList";
import SearchBar from "../components/SearchBar";

const Home: NextPage = () => {
  return (
    <Container>
      <SearchBar />
      <MoviesList />
    </Container>
  );
};

export default Home;
