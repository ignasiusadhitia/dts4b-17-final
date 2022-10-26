import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useGetGenresQuery } from "../apis/tmdbApi";
import { selectGenreOrCategory } from "../features/currentGenreOrCategory";

const categories = [
  { label: "Popular", value: "popular" },
  { label: "Top Rated", value: "top_rated" },
  { label: "Upcoming", value: "upcoming" },
];

const GenresCategories = () => {
  const { genreIdOrCategoryName } = useSelector(
    (state) => state.currentGenreOrCategory
  );

  const { data, isFetching } = useGetGenresQuery();
  const dispatch = useDispatch();

  return (
    <Box sx={{ padding: "30px 0" }}>
      <Box>
        {categories.map(({ label, value }) => (
          <Link key={value} to="/movies" style={{ textDecoration: "none" }}>
            <Button onClick={() => dispatch(selectGenreOrCategory(value))}>
              {label}
            </Button>
          </Link>
        ))}
        {isFetching
          ? ""
          : data.genres.map(({ name, id }) => (
              <Link key={name} to="/movies" style={{ textDecoration: "none" }}>
                <Button onClick={() => dispatch(selectGenreOrCategory(id))}>
                  {name}
                </Button>
              </Link>
            ))}
      </Box>
    </Box>
  );
};

export default GenresCategories;
