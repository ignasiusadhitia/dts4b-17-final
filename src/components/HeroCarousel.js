import React from "react";
import Flicking from "@egjs/react-flicking";
import { AutoPlay } from "@egjs/flicking-plugins";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/react-flicking/dist/flicking-inline.css";
import { useGetNowPlayingMoviesQuery } from "../apis/tmdbApi";
import { Card, CardActionArea, CardMedia } from "@mui/material";

const HeroCarousel = () => {
  const {
    data: movies,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetNowPlayingMoviesQuery();

  let content;

  if (isLoading) content = <p>Loading...</p>;

  if (isError) content = <p>Error {error} :(</p>;

  if (isSuccess) {
    const { results } = movies;

    const carouselImagesData = results.slice(0, 3);

    const plugins = [
      new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: false }),
    ];
    content = (
      <Flicking
        circular={true}
        plugins={plugins}
        defaultIndex={1}
        panelsPerView={1.1}
      >
        {carouselImagesData.map((movie) => (
          <Card key={movie.id} sx={{ margin: "0 10px", maxWidth: "100%" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="500px"
                image={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                alt={movie.title}
              />
            </CardActionArea>
          </Card>
        ))}
      </Flicking>
    );
  }

  return content;
};

export default HeroCarousel;
