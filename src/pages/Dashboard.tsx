import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

const stats = [
  {
    label: "Active Users",
    value: "1,245",
    img: "https://thumbs.dreamstime.com/b/free-range-white-chicken-leghorn-breed-free-range-white-chicken-leghorn-breed-feeding-spring-meadow-364128581.jpg",
  },
  {
    label: "New Orders",
    value: "312",
    img: "https://thumbs.dreamstime.com/b/free-range-white-chicken-leghorn-breed-free-range-white-chicken-leghorn-breed-feeding-spring-meadow-364128581.jpg",
  },
  {
    label: "Revenue",
    value: "$7,540",
    img: "https://thumbs.dreamstime.com/b/free-range-white-chicken-leghorn-breed-free-range-white-chicken-leghorn-breed-feeding-spring-meadow-364128581.jpg",
  },
];

const activities = [
  {
    user: "Alice",
    action: "placed a new order",
    img: "https://thumbs.dreamstime.com/b/free-range-white-chicken-leghorn-breed-free-range-white-chicken-leghorn-breed-feeding-spring-meadow-364128581.jpg",
  },
  {
    user: "Bob",
    action: "updated profile info",
    img: "https://thumbs.dreamstime.com/b/free-range-white-chicken-leghorn-breed-free-range-white-chicken-leghorn-breed-feeding-spring-meadow-364128581.jpg",
  },
  {
    user: "Charlie",
    action: "commented on a post",
    img: "https://thumbs.dreamstime.com/b/free-range-white-chicken-leghorn-breed-free-range-white-chicken-leghorn-breed-feeding-spring-meadow-364128581.jpg",
  },
];

const Dashboard: React.FC = () => {
  return (
    <Grid container spacing={4}>
      {/* Stats Cards */}
      {stats.map((stat) => (
        <Grid size={{ xs: 6, sm: 4, md: 3 }} key={stat.label}>
          <Card sx={{ textAlign: "center", p: 2 }}>
            <CardContent>
              <Avatar
                src={stat.img}
                sx={{ width: 100, height: 100, mx: "auto", mb: 2 }}
              />
              <Typography variant="h6">{stat.label}</Typography>
              <Typography variant="h4" color="primary">
                {stat.value}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}

      {/* Recent Activities */}
      <Grid size={12}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Recent Activities
            </Typography>
            <List>
              {activities.map((activity, index) => (
                <ListItem key={index}>
                  <ListItemAvatar>
                    <Avatar src={activity.img} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={`${activity.user} ${activity.action}`}
                    secondary="Just now"
                  />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
