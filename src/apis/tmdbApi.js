import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const tmdbApiKey = process.env.REACT_APP_TMDB_API_KEY;
const page = 1;

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3" }),
  endpoints: (builder) => ({
    //* Get Now Playing Movies
    getNowPlayingMovies: builder.query({
      query: () => `movie/now_playing?page=${page}&api_key=${tmdbApiKey}`,
    }),
    //* Get Popular Movies
    getPopularMovies: builder.query({
      query: () => `movie/popular?page=${page}&api_key=${tmdbApiKey}`,
    }),
    //* Get Top Rated Movies
    getTopRatedMovies: builder.query({
      query: () => `movie/top_rated?page=${page}&api_key=${tmdbApiKey}`,
    }),
  }),
});

export const {
  useGetNowPlayingMoviesQuery,
  useGetPopularMoviesQuery,
  useGetTopRatedMoviesQuery,
} = tmdbApi;
