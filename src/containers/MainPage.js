import React, { useEffect } from "react";
import { Box } from "@mui/material";
import {
  useGetNowPlayingMoviesQuery,
  useGetPopularMoviesQuery,
  useGetTopRatedMoviesQuery,
} from "../apis/tmdbApi";
import HeroCarousel from "../components/HeroCarousel";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MoviesList from "../components/MoviesList";

const MainPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box>
      <Navbar />
      <HeroCarousel />
      <MoviesList
        listName="Popular "
        query={useGetPopularMoviesQuery()}
        isSliced={true}
      />
      <MoviesList
        listName="Top Rated"
        query={useGetTopRatedMoviesQuery()}
        isSliced={true}
      />
      <MoviesList
        listName="Now Playing"
        query={useGetNowPlayingMoviesQuery()}
        isSliced={true}
      />

      <Footer />
    </Box>
  );
};

export default MainPage;
