import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const tmdbApiKey = process.env.REACT_APP_TMDB_API_KEY;
const page = 1;

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3" }),
  endpoints: (builder) => ({
    //* Get Genres
    getGenres: builder.query({
      query: () => `genre/movie/list?api_key=${tmdbApiKey}`,
    }),

    //* Get Movies by [Type]
    getMovies: builder.query({
      query: ({ genreIdOrCategoryName, page, searchQuery }) => {
        //* Get Movies by Search
        if (searchQuery) {
          return `/search/movie?query=${searchQuery}&page=${page}&api_key=${tmdbApiKey}`;
        }

        //* Get Movies by Category
        if (
          genreIdOrCategoryName &&
          typeof genreIdOrCategoryName === "string"
        ) {
          return `movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmdbApiKey}`;
        }

        //* Get Movies by Genre
        if (
          genreIdOrCategoryName &&
          typeof genreIdOrCategoryName === "number"
        ) {
          return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmdbApiKey}`;
        }

        //* Get Popular Movies
        return `movie/popular?page=${page}&api_key=${tmdbApiKey}`;
      },
    }),

    //* Get Now Playing Movies
    getNowPlayingMovies: builder.query({
      query: () => `movie/now_playing?page=1&api_key=${tmdbApiKey}`,
    }),
    //* Get Popular Movies
    getPopularMovies: builder.query({
      query: () => `movie/popular?page=1&api_key=${tmdbApiKey}`,
    }),
    //* Get Top Rated Movies
    getTopRatedMovies: builder.query({
      query: () => `movie/top_rated?page=1&api_key=${tmdbApiKey}`,
    }),
    //* Get user specific movie lists
    getRecommendations: builder.query({
      query: ({ movie_id, list }) =>
        `/movie/${movie_id}/${list}?api_key=${tmdbApiKey}`,
    }),
    //* Get Movie Details
    getMovie: builder.query({
      query: (id) =>
        `/movie/${id}?api_key=${tmdbApiKey}&append_to_response=videos,credits`,
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetNowPlayingMoviesQuery,
  useGetPopularMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetGenresQuery,
  useGetRecommendationsQuery,
  useGetMovieQuery,
} = tmdbApi;
