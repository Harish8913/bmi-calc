import React, { useState, useContext } from "react";
import {
  Card,
  CardContent,
  TextField,
  Button,
  Grid,
  Radio,
  RadioGroup,
  FormControlLabel,
  Typography,
  FormHelperText,
  FormControl,
  FormLabel,
  Box,
  Container,
  Slider,
  Skeleton,
} from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { MyContext } from "./Context";
import BodyMass from "./assets/bodymass1.avif";

// Register the necessary chart components
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState({});
  const { bmiResult, setBmiResult } = useContext(MyContext);
  const { bmiVal, setBmiValue } = useContext(MyContext);
  const { bmiType,setBmiType } = useContext(MyContext);

  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const calculateBMI = () => {
    const bmi = (
      (parseFloat(weight) / (parseFloat(height) * parseFloat(height))) *
      10000
    ).toFixed(2);

    setBmiValue(bmi);
    return bmi;
  };

  const handleSubmit = () => {
    const bmi = calculateBMI(); // Calculate BMI first
    setBmiType(getBmiCategory(bmi)?.label); // Set bmiType based on calculated BMI
  
    let tempError = {};
  
    if (!height || !weight || !age || !gender) {
      if (!height) tempError.height = "Height is required (in cm)";
      if (!weight) tempError.weight = "Weight is required";
      if (!age) tempError.age = "Age is required";
      if (!gender) tempError.gender = "Gender is required";
      setError(tempError);
      return;
    }
  
    if (height < 50 || height > 250) tempError.height = "Height must be between 50 and 250 cm";
    if (weight < 10 || weight > 300) tempError.weight = "Weight must be between 10 and 300 kg";
    if (age < 2 || age > 120) tempError.age = "Age must be between 2 and 120 years";
  
    if (Object.keys(tempError).length) {
      setError(tempError);
      return;
    }
  
    setError({});
  
    let interpretation = "";
    if (gender === "male") {
      interpretation = (
        <div>
          <p>Your BMI is {bmi}.</p>
          <small>For males, a normal BMI ranges between 18.5 and 24.9.</small>
        </div>
      );
    } else if (gender === "female") {
      interpretation = (
        <div>
          <p>Your BMI is {bmi}.</p>
          <small>For females, a normal BMI ranges between 18.5 and 24.9.</small>
        </div>
      );
    }
  
    setBmiResult(interpretation);
  };
  

  const bmiCategories = [
    { label: "Underweight", min: 0, max: 18.5 },
    { label: "Normal weight", min: 18.5, max: 24.99 },
    { label: "Overweight", min: 25, max: 29.99 },
    { label: "Obesity", min: 30, max: 34.99 },
    { label: "Severe obesity", min: 35, max: 39.99 },
    { label: "Very severe obesity", min: 40, max: 120 },
  ];

  const getBmiCategory = (bmi) => {
    return bmiCategories.find(
      (category) => bmi >= category.min && bmi <= category.max
    );
  };

  const bmiCategory = getBmiCategory(bmiVal);
  const chartData = {
    labels: bmiCategories.map((category) => category.label),
    datasets: [
      {
        data: bmiCategories.map((category) =>
          bmiCategory && category.label === bmiCategory.label ? 100 : 0
        ),
        backgroundColor: [
          "#FFB6C1", // Underweight
          "#98FB98", // Normal weight
          "#FFFF00", // Overweight
          "#FF6347", // Obesity
          "#8B0000", // Severe obesity
          "#DC143C", // Very severe obesity
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 20,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const category = bmiCategories[tooltipItem.dataIndex];
            return `${category.label}: ${category.min} - ${category.max}`;
          },
        },
        bodyFont: {
          size: 18,
        },
        titleFont: {
          size: 18,
        },
        padding: 10,
        yAlign: "top",
      },
    },
    elements: {
      arc: {
        borderWidth: 5,
      },
    },
  };

  return (
    <Container maxWidth={"xl"}>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          overflowY: "auto",
        }}
      >
        <Grid container spacing={2} mt={4}>
          <Grid item xs={12} sm={12} md={6}>
            <Box
              className="imgBox"
              sx={{
                width: "100%",
                height: "100%",
                overflow: "hidden",
                borderRadius: 2,
              }}
            >
              <img src={BodyMass} width={"100%"} height={"100%"} />
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <Box
              sx={{
                width: "100%",
                borderRadius: 2,
              }}
            >
              <Typography fontSize={20}>
                {`Body Mass Index (BMI) is a simple calculation used to assess whether an individual has a healthy body weight relative to their height. It is calculated using the formula:`}
              </Typography>

              <Typography
                display={"flex"}
                alignItems={"center"}
                gap={1}
                justifyContent={"end"}
                mt={2}
                mr={6}
                fontWeight={800}
                fontSize={18}
              >
                <span>BMI = </span>

                <span style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ borderBottom: "1px solid #fff" }}>
                    Height (m)<sup>2</sup>
                  </span>

                  <span>Weight (kg)</span>
                </span>
              </Typography>

              <ul
                style={{ marginLeft: "2rem", marginTop: "2rem" }}
                id="orderedHero"
              >
                <li>{`Underweight: BMI < 18.5`}</li>
                <li>{`Normal weight: BMI 18.5–24.9`}</li>
                <li>{`Overweight: BMI 25–29.9`}</li>
                <li>{`Obesity & Severe Obesity: BMI ≥ 30`}</li>
                <li>{`Very Severe Obesity: BMI ≥ 40`}</li>
              </ul>

              <Typography mt={4} fontSize={18}>
                BMI is a general indicator and may not account for muscle mass,
                bone density, or fat distribution. It is widely used for health
                assessments.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={12} md={12} mt={4}>
          <Card
            sx={{
              height: "100%",
              padding: "20px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <CardContent
              sx={{ display: { sm: "block", lg: "flex" }, gap: "2rem" }}
            >
              <Grid container spacing={isSmallScreen ? 2 : 4}>
                <Grid item xs={12}>
                  <Typography variant="h5" gutterBottom fontWeight={500}>
                    BMI Calculator
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    label="Height (cm)"
                    value={height}
                    onChange={(e) => {
                      let value = e.target.value;
                      if (/^\d*$/.test(value)) {
                        if (value === "" || parseInt(value) <= 250) {
                          setHeight(value);
                        }
                      }
                    }}
                    fullWidth
                    error={!!error.height}
                    helperText={error.height || "Enter height (max: 250 cm)"}
                    type="number"
                  />
                </Grid>

                <Grid item xs={12}>
                  <Slider
                    value={Number(weight)}
                    onChange={(e, value) => setWeight(parseInt(value))}
                    step={0.1}
                    min={10}
                    max={300}
                    valueLabelDisplay="auto"
                    aria-label="Weight"
                  />
                  {error.weight && (
                    <FormHelperText error>{error.weight}</FormHelperText>
                  )}
                  <Typography>Weight: {weight} kg</Typography>
                </Grid>

                <Grid
                  container
                  item
                  xs={12}
                  spacing={2}
                  justifyContent="space-between"
                >
                  <Grid item xs={isSmallScreen ? 12 : 6}>
                    <TextField
                      label="Age"
                      value={age}
                      onChange={(e) => {
                        let value = e.target.value;
                        if (/^\d*$/.test(value)) {
                          if (value === "" || parseInt(value) <= 120) {
                            setAge(value);
                          }
                        }
                      }}
                      fullWidth
                      error={!!error.age}
                      helperText={error.age || "Enter age (max: 120)"}
                      type="number"
                    />
                  </Grid>

                  <Grid item xs={isSmallScreen ? 12 : 6}>
                    <FormControl error={!!error.gender}>
                      <FormLabel>Gender</FormLabel>
                      <RadioGroup
                        row
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        sx={{ ml: { lg: 6 } }}
                      >
                        <FormControlLabel
                          value="male"
                          control={<Radio />}
                          label="Male"
                        />
                        <FormControlLabel
                          value="female"
                          control={<Radio />}
                          label="Female"
                        />
                      </RadioGroup>
                      <FormHelperText>{error.gender}</FormHelperText>
                    </FormControl>
                  </Grid>
                </Grid>

                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ padding: "12px" }}
                    fullWidth
                    onClick={handleSubmit}
                  >
                    Calculate BMI
                  </Button>
                </Grid>
              </Grid>

              <Grid item xs={12} md={12}>
                {!bmiVal ? (
                  <Box mt={3}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        mt: 3,
                      }}
                    >
                      <Skeleton variant="text" width="80%" height={40} />
                    </Box>

                    <Skeleton
                      variant="rectangular"
                      width="100%"
                      height={200}
                      sx={{ mt: 3 }}
                    />
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        mt: 3,
                      }}
                    >
                      <Skeleton variant="circular" width={200} height={200} />
                    </Box>
                  </Box>
                ) : (
                  <>
                    {bmiResult && (
                      <Box mt={3} textAlign={"center"}>
                        <Typography variant="h6" color="textPrimary">
                          {bmiResult}
                        </Typography>
                      </Box>
                    )}

                    {bmiVal && bmiVal <= 120 ? (
                      <Box mt={3}>
                        <Doughnut
                          data={chartData}
                          options={chartOptions}
                          style={{ width: "50%", height: "400px" }}
                        />
                      </Box>
                    ) : (
                      <Box
                        mt={8}
                        display={"flex"}
                        textAlign={"center"}
                        sx={{
                          maxWidth: "sm",
                          mx: "auto",
                        }}
                      >
                        <Typography variant="h4">
                          {`Invalid Input Values or Some Serious Conditions beacause BMI INDEX: ${bmiVal} is not possible`}
                        </Typography>
                      </Box>
                    )}
                  </>
                )}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BMICalculator;
