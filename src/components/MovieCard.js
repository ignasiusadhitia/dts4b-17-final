import React from "react";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";

const MovieCard = ({ imageUrl, imageAlt }) => {
  return (
    <Card sx={{ maxWidth: "100%", height: "100%", borderRadius: 0 }}>
      <CardActionArea sx={{ width: "100%", height: "100%" }}>
        <img
          src={`https://image.tmdb.org/t/p/original/${imageUrl}`}
          alt={imageAlt}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </CardActionArea>
    </Card>
  );
};

export default MovieCard;
