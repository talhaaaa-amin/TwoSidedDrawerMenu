import Grid from "@mui/material/Grid";
import "../styles/App.css";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { createTheme, ThemeProvider } from "@mui/material";
import { AccessTime } from "@mui/icons-material";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: "body2" },
          style: {
            fontSize: 11,
          },
        },
        {
          props: { variant: "body1" },
          style: {
            fontSize: 9,
          },
        },
      ],
    },
  },
});

interface Tour {
  image: string;
  name: string;
  rating: number;
  numberOfReviews: number;
  price: number;
}

export default function MyCard({ tour }: { tour: Tour }) {
  return (
    <>
      <Grid size={{ xs: 6, sm: 6, md: 3 }}>
        <ThemeProvider theme={theme}>
          <Paper elevation={4}>
            <img src={tour.image} width={100} className="img" />
            <Box paddingX={2}>
              <Typography variant="subtitle1" component={"h2"}>
                {tour.name}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <AccessTime sx={{ width: 12.5 }} />
                <Typography variant="body2" component="p" marginLeft={0.5}>
                  6 hours
                </Typography>
              </Box>
              <Rating
                name="read-only"
                value={tour.rating}
                precision={0.5}
                size="small"
                readOnly
              />
              <Typography variant="body2" component="p" marginLeft={0.5}>
                {tour.rating}
              </Typography>
              <Typography variant="body1" component="p" marginLeft={1.5}>
                ({tour.numberOfReviews})
              </Typography>
              <Box>
                <Typography variant="h6" component="h3" marginLeft={0}>
                  From C $ {tour.price}
                </Typography>
              </Box>
            </Box>
          </Paper>
        </ThemeProvider>
      </Grid>
    </>
  );
}
