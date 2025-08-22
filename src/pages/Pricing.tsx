import React from "react";
import { Grid, Card, CardContent, Typography, Button } from "@mui/material";

const plans = [
  { title: "Basic", price: "$9/mo", features: ["1 project", "Email support"] },
  {
    title: "Pro",
    price: "$29/mo",
    features: ["5 projects", "Priority support"],
  },
  {
    title: "Enterprise",
    price: "$99/mo",
    features: ["Unlimited projects", "24/7 support"],
  },
];

const Pricing: React.FC = () => {
  return (
    <Grid container spacing={4} justifyContent="center">
      {plans.map((plan) => (
        <Grid size={{ xs: 6, sm: 4, md: 3 }}>
          <Card sx={{ textAlign: "center", p: 2 }}>
            <CardContent>
              <Typography variant="h5">{plan.title}</Typography>
              <Typography variant="h4" color="primary" gutterBottom>
                {plan.price}
              </Typography>
              {plan.features.map((f) => (
                <Typography key={f} variant="body2">
                  {f}
                </Typography>
              ))}
              <Button sx={{ mt: 2 }} variant="contained">
                Choose
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Pricing;
