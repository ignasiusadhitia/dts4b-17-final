import { configureStore } from "@reduxjs/toolkit";
import { tmdbApi } from "../apis/tmdbApi";

export default configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbApi.middleware),
  devTools: true,
});
