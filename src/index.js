import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";

import Login from "./containers/Login";
import MoviePage from "./containers/MoviePage";
import NotFound from "./containers/NotFound";
import Register from "./containers/Register";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./themes/theme";
import { Provider } from "react-redux";
import store from "./app/store";
import RequireAuth from "./components/RequireAuth";

import MainPage from "./containers/MainPage";
import MoviesPage from "./containers/MoviesPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<NotFound />}>
      <Route index element={<MainPage />} />
      <Route element={<RequireAuth />}>
        <Route path="movies">
          <Route index element={<MoviesPage />} />
          <Route path=":movieId" element={<MoviePage />} />
        </Route>
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route errorElement={<NotFound />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
