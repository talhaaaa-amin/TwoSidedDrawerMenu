import React from "react";
import { Paper, Typography, Box } from "@mui/material";

const About: React.FC = () => {
  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" color="text.secondary">
        MyApp is a modern platform built to help teams collaborate efficiently.
        We focus on simplicity, speed, and powerful features to make your work
        easier.
      </Typography>
      <Box mt={2}>
        <Typography variant="body2" color="text.secondary">
          Version: 1.0.0 | Developed by Team MyApp
        </Typography>
      </Box>
    </Paper>
  );
};

export default About;
