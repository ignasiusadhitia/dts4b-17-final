import { configureStore } from "@reduxjs/toolkit";
import { tmdbApi } from "../apis/tmdbApi";
import genreOrCategoryReducer from "../features/currentGenreOrCategory";

export default configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    currentGenreOrCategory: genreOrCategoryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbApi.middleware),
  devTools: true,
});
