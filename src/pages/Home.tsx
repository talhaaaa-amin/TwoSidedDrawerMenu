import React from "react";
import { Typography, Button, Box } from "@mui/material";

const Home: React.FC = () => {
  return (
    <Box textAlign="center" sx={{ py: 6 }}>
      <Typography variant="h3" gutterBottom>
        Welcome to MyApp
      </Typography>
      <Typography variant="h6" color="text.secondary" gutterBottom>
        The best place to manage your projects and collaborate with your team.
      </Typography>
      <Button variant="contained" color="primary" size="large">
        Get Started
      </Button>
    </Box>
  );
};

export default Home;
