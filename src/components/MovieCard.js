import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const MovieCard = ({ height, width, imageUrl, imageAlt }) => {
  return (
    <Card sx={{ maxWidth: 354 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100%"
          image={`https://image.tmdb.org/t/p/original/${imageUrl}`}
          alt={imageAlt}
        />
      </CardActionArea>
    </Card>
  );
};

export default MovieCard;
