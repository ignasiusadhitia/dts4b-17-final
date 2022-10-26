import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import UserLog from "./UserLog";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <MovieFilterIcon />
          <Typography
            variant="h6"
            component="div"
            sx={{ padding: "0 20px", flexGrow: 1 }}
          >
            Movie Trailer
          </Typography>
          <UserLog />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
