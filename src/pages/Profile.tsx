import React from "react";
import {
  Box,
  Avatar,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

const posts = [
  {
    title: "My First Post",
    desc: "Sharing my thoughts about React.",
    img: "https://thumbs.dreamstime.com/b/free-range-white-chicken-leghorn-breed-free-range-white-chicken-leghorn-breed-feeding-spring-meadow-364128581.jpg",
  },
  {
    title: "A Day in Life",
    desc: "Captured some moments from my day.",
    img: "https://thumbs.dreamstime.com/b/free-range-white-chicken-leghorn-breed-free-range-white-chicken-leghorn-breed-feeding-spring-meadow-364128581.jpgs",
  },
  {
    title: "Team Work",
    desc: "Our latest project collaboration.",
    img: "https://thumbs.dreamstime.com/b/free-range-white-chicken-leghorn-breed-free-range-white-chicken-leghorn-breed-feeding-spring-meadow-364128581.jpg",
  },
];

const Profile: React.FC = () => {
  return (
    <Box>
      {/* Banner */}
      <Box
        sx={{
          backgroundImage:
            "url(https://thumbs.dreamstime.com/b/free-range-white-chicken-leghorn-breed-free-range-white-chicken-leghorn-breed-feeding-spring-meadow-364128581.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: 200,
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
            <Typography variant="h5">Jane Smith</Typography>
            <Typography color="text.secondary">Frontend Developer</Typography>
            <Typography color="text.secondary">
              jane.smith@example.com
            </Typography>
          </Grid>
        </Grid>

        {/* Bio */}
        <Box sx={{ mt: 3 }}>
          <Typography variant="body1" color="text.secondary">
            Passionate developer specializing in building modern and responsive
            web apps. Loves UI/UX design and working with React & TypeScript.
          </Typography>
        </Box>
      </Paper>

      {/* Recent Posts Section */}
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Recent Posts
      </Typography>
      <Grid container spacing={3}>
        {posts.map((post) => (
          <Grid size={{ xs: 6, sm: 4, md: 3 }} key={post.title}>
            <Card>
              <Box
                component="img"
                src={post.img}
                alt={post.title}
                sx={{ width: "100%", height: 140, objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="subtitle1" fontWeight="bold">
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.desc}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Profile;
