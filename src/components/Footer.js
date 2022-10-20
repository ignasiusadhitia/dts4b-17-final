import { Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={3}>
        <Typography>Menu 1</Typography>
        <Typography>Menu 1</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography>Menu 1</Typography>
        <Typography>Menu 1</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography>Menu 1</Typography>
        <Typography>Menu 1</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography>Menu 1</Typography>
        <Typography>Menu 1</Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
