import React from "react";
import Flicking from "@egjs/react-flicking";
import { AutoPlay } from "@egjs/flicking-plugins";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/react-flicking/dist/flicking-inline.css";
import { useGetNowPlayingMoviesQuery } from "../apis/tmdbApi";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CircularProgress,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const HeroCarousel = () => {
  const {
    data: movies,
    isLoading,
    isSuccess,
    isError,
    // eslint-disable-next-line
    error,
  } = useGetNowPlayingMoviesQuery();

  let content;

  if (isLoading)
    content = (
      <Box
        sx={{
          width: "100%",
          height: "50vh",
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
          height: "50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          Error!
        </Typography>
        <Typography variant="body1">Movie not found!...</Typography>
      </Box>
    );

  if (isSuccess) {
    const { results } = movies;

    const carouselImagesData = results.slice(0, 4);

    const plugins = [
      new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: false }),
    ];
    content = (
      <Flicking
        circular={true}
        plugins={plugins}
        defaultIndex={1}
        panelsPerView={1}
      >
        {carouselImagesData?.map((movie) => (
          <Link to={`movies/${movie.id}`} key={movie.id}>
            <Box
              sx={{
                height: "500px",
                width: "100%",
                position: "fixed",
                top: 0,
                background: "rgba(0,0,0,0.5)",
                zIndex: 2,
                color: "#eceff1",
              }}
            >
              <Box
                sx={{
                  padding: "20px",
                  width: "50%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  gap: "20px",
                }}
              >
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                  {movie.title}
                </Typography>
                <Typography variant="body1">
                  {movie.overview.slice(0, 100)}...
                </Typography>
                <Button variant="contained" sx={{ width: "50%" }}>
                  Watch Trailer
                </Button>
              </Box>
            </Box>
            <Card
              sx={{
                maxWidth: "100%",
                height: "500px",
                position: "relative",
                zIndex: 0,
                borderRadius: "none",
              }}
            >
              <CardActionArea>
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                  alt={movie.title}
                />
              </CardActionArea>
            </Card>
          </Link>
        ))}
      </Flicking>
    );
  }

  return content;
};

export default HeroCarousel;
