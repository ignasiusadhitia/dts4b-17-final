import React from "react";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/react-flicking/dist/flicking-inline.css";
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const MoviesCarousel = ({ listName, imageHeight, query }) => {
  const { data: movies, isLoading, isSuccess, isError, error } = query;

  let content;

  if (isLoading) content = <p>Loading...</p>;

  if (isError) content = <p>Error {error} :(</p>;

  if (isSuccess) {
    const { results } = movies;
    const popularMovies = results?.slice(0, 9);

    let displayedMovies;
    if (listName === "Popular Movies") {
      displayedMovies = popularMovies;
    } else {
      displayedMovies = results;
    }

    content = (
      <Box>
        <Typography variant="h5" sx={{ padding: "5px 25px" }}>
          {listName}
        </Typography>
        <Flicking
          moveType="freeScroll"
          bound={true}
          style={{ padding: "0 25px" }}
        >
          {displayedMovies?.map((movie) => (
            <Link to={`movies/${movie.id}`} key={movie.id}>
              <Card
                key={movie.id}
                sx={{ maxWidth: 200, marginRight: "3px", borderRadius: 0 }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height={imageHeight}
                    image={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    alt={movie.title}
                  />
                </CardActionArea>
              </Card>
            </Link>
          ))}
        </Flicking>
      </Box>
    );
  }
  return content;
};

export default MoviesCarousel;
