import { Box } from "@mui/material";
import React from "react";
import MovieCard from "../components/MovieCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <Box>
      <MovieCard />
      <Footer />
    </Box>
  );
};

export default HomePage;
