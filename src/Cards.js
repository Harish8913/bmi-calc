import React, { useContext, useEffect, useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Container,
  Box,
} from "@mui/material";
import under1 from "./assets/under1.jpg";
import under2 from "./assets/under2.png";
import under3 from "./assets/under3.webp";

import normal1 from './assets/normal1.jpg'
import normal2 from './assets/normal2.webp'
import normal3 from './assets/normal3.avif'

import over1 from './assets/over1.jpg'
import over2 from './assets/over2.jpg'
import over3 from './assets/over3.jpg'

import obesity1 from './assets/obesity1.webp'
import obesity2 from './assets/obesity2.webp'
import obesity3 from './assets/obesity3.jpg'

import severe1 from './assets/severe1.jpg'
import severe2 from './assets/severe2.webp'
import severe3 from './assets/severe3.jpg'

import vsevere1 from './assets/vsevere1.webp'
import vsevere2 from './assets/vsevere2.jpg'
import vsevere3 from './assets/vsevere3.jpg'

import { MyContext } from "./Context";

const exerciseData = {
  underweight: [
    {
      imgSrc: under1,
      title: "Weight Lifting",
      description:
        "Focus on compound lifts like squats, deadlifts, and bench presses. 3-4 sets of 8-12 reps.",
    },
    {
      imgSrc: under2,
      title: "Plank",
      description:
        "Hold for 30-60 seconds. Do 3 sets to improve core strength.",
    },
    {
      imgSrc: under3,
      title: "Lunges",
      description: "Perform 12 reps per leg for 3 sets to build leg muscles.",
    },
  ],
  "normal weight": [
    {
      imgSrc: normal1,
      title: "Brisk Walking",
      description: "Walk at a moderate pace for 30 minutes daily.",
    },
    {
      imgSrc: normal2,
      title: "Push-Ups",
      description:
        "Perform 3 sets of 12-15 reps to maintain upper body strength.",
    },
    {
      imgSrc: normal3,
      title: "Yoga",
      description:
        "Practice for 20-30 minutes, 3 times a week for flexibility.",
    },
  ],
  "overweight": [
    {
      imgSrc: over1,
      title: "Rowing Machine",
      description: "Do a 20-minute session for full-body cardio.",
    },
    {
      imgSrc: over2,
      title: "Hiking",
      description: "Start with flat terrain and increase difficulty gradually.",
    },
    {
      imgSrc: over3,
      title: "Step Aerobics",
      description: "Perform for 15-20 minutes to burn calories and tone legs.",
    },
  ],
  obesity: [
    {
      imgSrc: obesity1,
      title: "Chair Squats",
      description: "Perform 10 reps for 3 sets to improve leg strength.",
    },
    {
      imgSrc: obesity2,
      title: "Seated Leg Lifts",
      description: "Do 12 reps per leg for 2 sets to improve mobility.",
    },
    {
      imgSrc: obesity3,
      title: "Elliptical Trainer",
      description:
        "Use for 15-20 minutes to burn calories with low joint impact.",
    },
  ],
  "severe obesity": [
    {
      imgSrc: severe1,
      title: "Wall Push-Ups",
      description: "Do 3 sets of 10-15 reps for upper body strength.",
    },
    {
      imgSrc: severe2,
      title: "Chair Marches",
      description: "March in place for 2 minutes for gentle cardio.",
    },
    {
      imgSrc: severe3,
      title: "Resistance Band Rows",
      description: "Perform 12 reps for 3 sets to strengthen back muscles.",
    },
  ],
  "very severe obesity": [
    {
      imgSrc: vsevere1,
      title: "Chair-Assisted Squats",
      description: "Perform 8-10 reps for 3 sets to build leg strength.",
    },
    {
      imgSrc: vsevere2,
      title: "Standing Overhead Press",
      description:
        "Use light weights for 12 reps for 3 sets to improve arm strength.",
    },
    {
      imgSrc: vsevere3,
      title: "Slow Walking",
      description: "Walk for 10-15 minutes daily to improve mobility.",
    },
  ],
};

const ExerciseCards = () => {
  const { bmiType } = useContext(MyContext);
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const normalizedBmiType =
      typeof bmiType === "string" ? bmiType.toLowerCase() : null;
    const newExercises = exerciseData[normalizedBmiType] || [];
    setExercises(newExercises);
  }, [bmiType]);

  return (
    <Container maxWidth="xl" sx={{ mt: 4 }}>
      <Grid container spacing={8} justifyContent={'space-evenly'}>
        {exercises.length > 0 ? (
          exercises.map((exercise, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ height: 500 }}>
                <Box
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
                  <img src={exercise.imgSrc} width={"100%"} height={"100%"} />
                </Box>
                <CardContent>
                  <Typography variant="h6" component="div" textAlign="center">
                    {exercise.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    textAlign="center"
                    sx={{ mt: 1 }}
                  >
                    {exercise.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Typography variant="h6" textAlign="center" color="text.secondary">
              No exercises available for the current BMI category.
            </Typography>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default ExerciseCards;
