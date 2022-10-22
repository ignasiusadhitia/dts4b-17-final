import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import MoviesCarousel from "../components/MoviesCarousel";
import { useSelector } from "react-redux";

import { useGetMoviesQuery } from "../apis/tmdbApi";

const HomePage = () => {
  const { data } = useGetMoviesQuery();
  console.log(data);
  return (
    <Box>
      <Navbar />
      <MoviesCarousel />
      <MovieCard />
      <Footer />
    </Box>
  );
};

export default HomePage;
