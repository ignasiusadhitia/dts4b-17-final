import { Box, Typography } from "@mui/material";
import React from "react";

const NotFound = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h3" sx={{ fontWeight: "bold" }}>
        404!
      </Typography>
      <Typography variant="body1">Cannot found the page...</Typography>
    </Box>
  );
};

export default NotFound;
