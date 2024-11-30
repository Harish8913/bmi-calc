import React, { useContext, useEffect, useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Container,
  Box,
} from "@mui/material";
// import under1 from "./assets/exercise/under1.jpg";
// import under2 from "./assets/exercise/under2.png";
// import under3 from "./assets/exercise/under3.webp";

// import normal1 from './assets/exercise/normal1.jpg'
// import normal2 from './assets/exercise/normal2.webp'
// import normal3 from './assets/exercise/normal3.avif'

// import over1 from './assets/exercise/over1.jpg'
// import over2 from './assets/exercise/over2.jpg'
// import over3 from './assets/exercise/over3.jpg'

// import obesity1 from './assets/exercise/obesity1.webp'
// import obesity2 from './assets/exercise/obesity2.webp'
// import obesity3 from './assets/exercise/obesity3.jpg'

// import severe1 from './assets/exercise/severe1.jpg'
// import severe2 from './assets/exercise/severe2.webp'
// import severe3 from './assets/exercise/severe3.jpg'

// import vsevere1 from './assets/exercise/vsevere1.webp'
// import vsevere2 from './assets/exercise/vsevere2.jpg'
// import vsevere3 from './assets/exercise/vsevere3.jpg'

import { MyContext } from "./Context";

const dietData = {
  underweight: [
    {
      title: "High-Calorie Foods",
      description: "Include more high-calorie, nutrient-dense foods like avocados, nuts, seeds, and whole grains.",
    },
    {
      title: "Protein-Rich Foods",
      description: "Consume protein-rich foods like lean meats, eggs, legumes, and dairy to promote muscle growth.",
    },
    {
      title: "Frequent Meals",
      description: "Eat 5-6 small meals throughout the day to increase calorie intake.",
    },
  ],
  "normal weight": [
    {
      title: "Balanced Diet",
      description: "Maintain a balanced diet with lean proteins, healthy fats, and whole grains.",
    },
    {
      title: "Hydration",
      description: "Drink plenty of water and stay hydrated to maintain energy levels and overall health.",
    },
    {
      title: "Fruits and Vegetables",
      description: "Include a variety of fruits and vegetables in your daily meals to ensure adequate vitamins and minerals.",
    },
  ],
  overweight: [
    {
      title: "Reduced Calorie Intake",
      description: "Reduce calorie intake by consuming smaller portions and focusing on nutrient-dense foods.",
    },
    {
      title: "Whole Grains",
      description: "Incorporate whole grains like brown rice, oats, and quinoa into meals for better satiety.",
    },
    {
      title: "Healthy Fats",
      description: "Choose healthy fats such as olive oil, avocado, and nuts while avoiding trans fats.",
    },
  ],
  obesity: [
    {
      title: "Low-Carb Diet",
      description: "Follow a low-carb diet by reducing the intake of sugary foods and refined carbohydrates.",
    },
    {
      title: "Lean Protein",
      description: "Focus on lean protein sources like chicken, turkey, fish, and plant-based proteins.",
    },
    {
      title: "Small, Frequent Meals",
      description: "Eat small, frequent meals to avoid overeating and maintain steady energy levels.",
    },
  ],
  "severe obesity": [
    {
      title: "Low-Calorie, Nutrient-Dense Foods",
      description: "Consume low-calorie foods rich in nutrients, such as vegetables, fruits, and lean proteins.",
    },
    {
      title: "Limit Sugary Beverages",
      description: "Avoid sugary beverages and opt for water, herbal teas, or black coffee.",
    },
    {
      title: "Mindful Eating",
      description: "Practice mindful eating to prevent overeating and improve digestion.",
    },
  ],
  "very severe obesity": [
    {
      title: "Portion Control",
      description: "Control portion sizes by using smaller plates and serving sizes to prevent overeating.",
    },
    {
      title: "Increased Fiber",
      description: "Include more fiber-rich foods like legumes, vegetables, and whole grains to improve satiety.",
    },
    {
      title: "Calorie Tracking",
      description: "Track your calories to stay mindful of your intake and adjust for weight loss goals.",
    },
  ],
};

const DietCards = () => {
  const { bmiType } = useContext(MyContext);
  const [diets, setDiets] = useState([]);

  useEffect(() => {
    const normalizedBmiType =
      typeof bmiType === "string" ? bmiType.toLowerCase() : null;
    const newDiets = dietData[normalizedBmiType] || [];
    setDiets(newDiets);
  }, [bmiType]);

  return (
    <Container maxWidth="xl" sx={{ mt: 4 }}>
    <Typography variant="h3" mb={6}>Diet Cautions</Typography>
      <Grid container spacing={8} justifyContent={'space-evenly'}>
        {diets.length > 0 ? (
          diets.map((diet, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{px: 2, py: 3, height: 300, display: 'flex', alignItems: 'center'}}>
                {/* <Box
                  sx={{
                    height: "70%",
                    backgroundColor: "gray",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    fontSize: 24,
                  }}
                >
                  <img src={diet.imgSrc} width={"100%"} height={"100%"} />
                </Box> */}
                <CardContent>
                  <Typography variant="h4" component="div" textAlign="center">
                    {diet.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    fontSize={18}
                    color="text.secondary"
                    textAlign="center"
                    sx={{ mt: 3 }}
                  >
                    {diet.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Typography variant="h6" textAlign="center" color="text.secondary">
              No diet suggestions available for the current BMI category.
            </Typography>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default DietCards;
