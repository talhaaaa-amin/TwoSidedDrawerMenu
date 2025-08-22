import React from "react";
import {
  Box,
  Avatar,
  Typography,
  Paper,
  Grid,
  TextField,
  Button,
} from "@mui/material";

const Account: React.FC = () => {
  return (
    <Box>
      {/* Banner Section */}
      <Box
        sx={{
          backgroundImage:
            "url(https://thumbs.dreamstime.com/b/free-range-white-chicken-leghorn-breed-free-range-white-chicken-leghorn-breed-feeding-spring-meadow-364128581.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: 160,
          borderRadius: 2,
          mb: -8,
        }}
      />

      {/* Profile Info */}
      <Paper sx={{ p: 4, mt: 8 }}>
        <Grid container spacing={3} alignItems="center">
          <Grid>
            <Avatar
              src="https://thumbs.dreamstime.com/b/free-range-white-chicken-leghorn-breed-free-range-white-chicken-leghorn-breed-feeding-spring-meadow-364128581.jpg"
              sx={{ width: 100, height: 100 }}
            />
          </Grid>
          <Grid>
            <Typography variant="h5">John Doe</Typography>
            <Typography color="text.secondary">john.doe@example.com</Typography>
          </Grid>
        </Grid>

        {/* Account Settings Form */}
        <Box component="form" sx={{ mt: 4 }}>
          <Grid container spacing={2}>
            <Grid>
              <TextField label="Full Name" fullWidth defaultValue="John Doe" />
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 3 }}>
              <TextField
                label="Email"
                fullWidth
                defaultValue="john.doe@example.com"
              />
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 3 }}>
              <TextField
                label="Phone"
                fullWidth
                defaultValue="+1 234 567 890"
              />
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 3 }}>
              <TextField label="City" fullWidth defaultValue="New York" />
            </Grid>
          </Grid>
          <Button variant="contained" sx={{ mt: 3 }}>
            Save Changes
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Account;
