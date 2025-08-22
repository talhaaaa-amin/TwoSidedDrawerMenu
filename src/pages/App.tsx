// import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";

import MyCard from "../components/MyCard";
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import cities from "../data.json";

export default function App() {
  return (
    <>
      <Box>
        <CssBaseline />
        <Container sx={{ marginBottom: 1, maxWidth: "sm" }}>
          {cities.map((city) => {
            return (
              <>
                <Typography
                  variant="h4"
                  component="h2"
                  marginTop={5}
                  marginBottom={3}
                >
                  Top {city.name} Tours
                </Typography>
                <Grid container spacing={5}>
                  {city.tours.map((tour, index) => (
                    <MyCard tour={tour} key={index} />
                  ))}
                </Grid>
              </>
            );
          })}
          {/* <Grid container spacing={5}>
            <MyCard />
            <MyCard />
            <MyCard />
            <MyCard />
          </Grid> */}
        </Container>
      </Box>
    </>
  );
}
