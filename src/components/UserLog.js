import React from "react";
import { Button } from "@mui/material";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";

const UserLog = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const onLogin = () => {
    navigate("/login");
  };

  const onLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return user ? (
    <>
      <Button color="inherit" onClick={onLogout}>
        Logout
      </Button>
    </>
  ) : (
    <Button color="inherit" onClick={onLogin}>
      Login
    </Button>
  );
};

export default UserLog;
