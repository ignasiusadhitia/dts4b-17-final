import { Box, Button, CircularProgress, Grid, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useGetMovieQuery, useGetRecommendationsQuery } from "../apis/tmdbApi";
import MovieCard from "../components/MovieCard";
import { selectGenreOrCategory } from "../features/currentGenreOrCategory";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const MoviePage = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();

  // eslint-disable-next-line
  const { data, isLoading, isSuccess, isError, error } =
    useGetMovieQuery(movieId);

  // eslint-disable-next-line
  const { data: recommendations, isFetching: isRecommendationsFetching } =
    useGetRecommendationsQuery({ list: "/recommendations", movie_id: movieId });

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

  if (isError) {
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
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          Error!
        </Typography>
        <Typography variant="body1">Movie not found!...</Typography>
      </Box>
    );
  }
  if (isSuccess) {
    content = (
      <Box>
        <Box
          sx={{ position: "relative", width: "100%", paddingBottom: "56.25%" }}
        >
          {data?.videos?.results?.length > 0 && (
            <iframe
              autoPlay
              frameBorder="0"
              title="Trailer"
              src={`https://www.youtube.com/embed/${data.videos.results[0].key}`}
              allow="autoplay"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: 0,
              }}
            />
          )}
        </Box>
        <Box sx={{ padding: "20px" }}>
          <Grid container spacing={2} sx={{ padding: "20px 0" }}>
            <Grid item xs={12} md={3}>
              <MovieCard imageAlt={data?.title} imageUrl={data?.poster_path} />
            </Grid>
            <Grid item xs={12} md={9}>
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                {data?.title} ({data?.release_date.substring(0, 4)})
              </Typography>
              <Box sx={{ display: "flex", gap: "20px", marginTop: "5px" }}>
                {data?.genres?.map((genre, i) => (
                  <Link
                    key={genre.name}
                    to="/movies"
                    onClick={() => dispatch(selectGenreOrCategory(genre.id))}
                    style={{ textDecoration: "none" }}
                  >
                    <Button sx={{ padding: 0 }}>{genre?.name} </Button>
                  </Link>
                ))}
              </Box>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Link to="/movies" style={{ textDecoration: "none" }}>
                  <Button startIcon={<KeyboardBackspaceIcon />}>
                    Back to Movies
                  </Button>
                </Link>
              </Box>
              <Box sx={{ margin: "20px 0" }}>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  Overview:
                </Typography>
                <Typography variant="body1">{data?.overview}</Typography>
              </Box>
              <Box sx={{ margin: "20px 0" }}>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  Top Cast:
                </Typography>
              </Box>
              <Grid item container spacing={2}>
                {data &&
                  data.credits.cast
                    .map(
                      (character, i) =>
                        character.profile_path && (
                          <Grid
                            key={i}
                            item
                            xs={4}
                            md={2}
                            style={{ textDecoration: "none" }}
                          >
                            <img
                              src={`https://image.tmdb.org/t/p/w500/${character.profile_path}`}
                              alt={character.name}
                              width="100%"
                            />
                            <Typography color="textPrimary">
                              {character.name}
                            </Typography>
                            <Typography color="textSecondary">
                              {character.character.split("/")[0]}
                            </Typography>
                          </Grid>
                        )
                    )
                    .slice(0, 6)}
              </Grid>
            </Grid>
          </Grid>
          <Box sx={{ margin: "20px 0" }}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              You might also like
            </Typography>
            {recommendations ? (
              <Grid
                container
                spacing={{ xs: 1, md: 2 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
                sx={{ padding: "20px 0" }}
              >
                {recommendations.results.slice(0, 12).map((recommendation) => (
                  <Grid item xs={4} sm={2} md={1} key={recommendation.id}>
                    <MovieCard
                      key={recommendation.id}
                      imageAlt={recommendation.title}
                      imageUrl={recommendation.poster_path}
                      height="100%"
                    />
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Typography variant="body1" sx={{ padding: "20px 0" }}>
                Sorry, nothing is found.
              </Typography>
            )}
          </Box>
        </Box>
      </Box>
    );
  }
  return content;
};

export default MoviePage;
