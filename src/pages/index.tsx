import { Container } from "@mui/material";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import React from "react";
import { Header } from "../components/Header";
import MoviesList from "../components/SearchList";
import MoviesPagination from "../components/SearchPagination";
import SearchBar from "../components/SearchBar";

const Home: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Movie search"
        description="Search for any movie by it's title and learn more information about it."
      />
      <Header />
      <Container component="main" sx={{ py: 2 }}>
          <SearchBar />
          <MoviesList />
          <MoviesPagination />
      </Container>
    </>
  );
};

export default Home;
