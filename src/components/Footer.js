import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  const footerItems = [
    ["Audio and Subtitles", "Media Center", "Security", "Contact Us"],
    ["Audio Description", "Investor Relations", "Legal Provisions"],
    ["Help center", "Jobs", "Cookie Preferences"],
    ["Gift Cards", "Terms of Use", "Corporate Information"],
  ];
  return (
    <Box
      sx={{
        padding: "20px 0",
        backgroundColor: "primary.main",
        color: "#eceff1",
      }}
    >
      <Grid container spacing={2} sx={{ padding: "50px 20px" }}>
        <Grid item xs={12} sm={6} md={3}>
          {footerItems[0].map((item) => (
            <Box key={item}>
              <Typography variant="subtitle">{item}</Typography>
            </Box>
          ))}
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          {footerItems[1].map((item) => (
            <Box key={item}>
              <Typography variant="subtitle">{item}</Typography>
            </Box>
          ))}
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          {footerItems[2].map((item) => (
            <Box key={item}>
              <Typography variant="subtitle">{item}</Typography>
            </Box>
          ))}
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          {footerItems[3].map((item) => (
            <Box key={item}>
              <Typography variant="subtitle">{item}</Typography>
            </Box>
          ))}
        </Grid>
      </Grid>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="subtitle">
          © 2022 Movie Trailer, All Right Reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
