import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import HomePage from "./containers/HomePage";
import Login from "./containers/Login";
import MoviePage from "./containers/MoviePage";
import NotFound from "./containers/NotFound";
import ProfilesPage from "./containers/ProfilesPage";
import Register from "./containers/Register";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./themes/theme";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<NotFound />}>
      <Route errorElement={<NotFound />} />
      <Route index element={<HomePage />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="movies/:movieId" element={<MoviePage />} />
      <Route path="profiles/:profileId" element={<ProfilesPage />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
