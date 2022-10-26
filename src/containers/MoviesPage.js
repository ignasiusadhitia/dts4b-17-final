import React, { useState } from "react";
import {
  Box,
  CircularProgress,
  Grid,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import { useGetMoviesQuery } from "../apis/tmdbApi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import GenresCategories from "../components/GenresCategories";
import Search from "../components/Search";

const MoviesPage = () => {
  const [page, setPage] = useState(1);

  const { genreIdOrCategoryName, searchQuery } = useSelector(
    (state) => state.currentGenreOrCategory
  );
  const { data, error, isFetching } = useGetMoviesQuery({
    genreIdOrCategoryName,
    page,
    searchQuery,
  });

  if (isFetching) {
    return (
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
  }

  if (error) return "An error has occured.";

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Box sx={{ margin: "30px 0", padding: "20px" }}>
      <Search />
      <GenresCategories />
      {!data.results.length ? (
        <Box
          sx={{
            width: "100%",
            height: "50vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            No movies match that name!
          </Typography>
          <Typography variant="h4">
            Please search for something else...
          </Typography>
        </Box>
      ) : (
        ""
      )}

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {data.results.map((movie) => (
          <Grid item xs={12} sm={4} md={3} key={movie.id}>
            <Link to={`${movie.id}`}>
              <MovieCard
                key={movie.id}
                imageAlt={movie.title}
                imageUrl={movie.poster_path}
              />
            </Link>
          </Grid>
        ))}
      </Grid>
      <Stack
        spacing={2}
        sx={{ padding: "40px 0", display: "flex", alignItems: "center" }}
      >
        <Pagination
          count={data.total_pages}
          page={page}
          color="primary"
          onChange={handleChange}
        />
      </Stack>
    </Box>
  );
};

export default MoviesPage;
