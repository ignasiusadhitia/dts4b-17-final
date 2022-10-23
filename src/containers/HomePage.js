import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import MoviesCarousel from "../components/MoviesCarousel";
import { useSelector } from "react-redux";

import {
  useGetNowPlayingMoviesQuery,
  useGetPopularMoviesQuery,
  useGetTopRatedMoviesQuery,
} from "../apis/tmdbApi";
import HeroCarousel from "../components/HeroCarousel";

const HomePage = () => {
  return (
    <Box>
      <Navbar />
      <HeroCarousel />
      <MoviesCarousel
        listName="Top Rated"
        query={useGetTopRatedMoviesQuery()}
      />
      <MoviesCarousel
        listName="Now Playing"
        query={useGetNowPlayingMoviesQuery()}
      />
      <MoviesCarousel
        listName="Popular Movies"
        imageHeight="400px"
        query={useGetPopularMoviesQuery()}
      />
      <Footer />
    </Box>
  );
};

export default HomePage;
