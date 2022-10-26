import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Navbar from "./Navbar";
import Footer from "./Footer";

const RequireAuth = () => {
  const [user] = useAuthState(auth);

  const location = useLocation();

  return user ? (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  ) : (
    <Navigate to="login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
