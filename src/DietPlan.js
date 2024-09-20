import React from "react";
import {
  Grid,
  Card, 
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { MyContext } from "./Context";
import { listData } from "./DietData";

const DietPlan = () => {
  const { bmiType } = useContext(MyContext);
  return (
    <Container sx={{ mt: 5, mb: 4 }} maxWidth={"xl"}>
      <Typography variant="h3" sx={{mb: 5}}>Diet Plan</Typography>
      <Grid container spacing={2} justifyContent="center">
        {bmiType === "normal"
          ? listData.normal.map(({ text, id }) => {
              return (
                <Grid item xs={12} sm={6} md={3} key={id}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6" fontWeight={400} fontSize={16} textAlign={'justify'} align="center">
                        {text}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })
          : bmiType === "underweight"
          ? listData.underweight.map(({ text, id }) => {
              return (
                <Grid item xs={12} sm={6} md={3} key={id}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6" fontWeight={400} fontSize={16} textAlign={'justify'} align="center">
                        {text}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })
          : bmiType === "overweight"
          ? listData.overweight.map(({ text, id }) => {
              return (
                <Grid item xs={12} sm={6} md={3} key={id}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6" fontWeight={400} fontSize={16} textAlign={'justify'} align="center">
                        {text}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })
          : listData.obesity.map(({ text, id }) => {
              return (
                <Grid item xs={12} sm={6} md={3} key={id}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6" fontWeight={400} fontSize={16} textAlign={'justify'} align="center">
                        {text}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
      </Grid>
    </Container>
  );
};

export default DietPlan;
