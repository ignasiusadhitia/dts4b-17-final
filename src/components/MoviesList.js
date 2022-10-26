import React from "react";
import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
import MovieCard from "./MovieCard";

const MoviesList = ({ listName, query, isSliced }) => {
  const [user] = useAuthState(auth);

  // eslint-disable-next-line
  const { data: movies, isLoading, isSuccess, isError, error } = query;

  let content;

  if (isLoading)
    content = (
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );

  if (isError)
    content = (
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></Box>
    );

  if (isSuccess) {
    const { results } = movies;

    const slicedResults = results?.slice(0, 4);
    const moviesData = isSliced ? slicedResults : results;

    content = (
      <Box sx={{ margin: "20px" }}>
        <Typography variant="h4" sx={{ padding: "15px 0", fontWeight: "bold" }}>
          {listName}
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {moviesData?.map((movie) => (
            <Grid item xs={12} sm={4} md={3} key={movie.id}>
              <Link to={user ? `${movie.id}` : "/login"}>
                <MovieCard
                  key={movie.id}
                  imageAlt={movie.title}
                  imageUrl={movie.poster_path}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }

  return content;
};

export default MoviesList;
