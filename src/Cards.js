import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Container } from '@mui/material';
import n1 from './assets/jog.jpg'
import n2 from './assets/pull-up.webp'
import n3 from './assets/yoga.avif'
import u1 from './assets/weightlifting.png';
import u2 from './assets/planck.png';
import u3 from './assets/lunges.webp'
import ov1 from './assets/rowing.jpg';
import ov2 from './assets/hiking.jpg';
import ov3 from './assets/step.jpg';
import o1 from './assets/bodyweight.jpg'
import o2 from './assets/chair.webp'
import o3 from './assets/ellip.jpg'
import Swim from './assets/swim.jpg';
import { useContext } from "react";
import { MyContext } from "./Context";

const ResponsiveCards = () => {
  const { bmiType } = useContext(MyContext);
  const cardData = [
    {
      id: 1,
      image: bmiType === 'normal' ? n1 :
              bmiType === 'underweight' ? u1 :
              bmiType === 'overweight' ? ov1 : o1,

      title: bmiType === 'normal' ? 'Brisk Walking or Light Jogging (Cardio)' :
              bmiType === 'underweight' ? 'Weight Lifting':
              bmiType === 'overweight' ? 'Rowing Exercise' : 'Body Weighted Squats',

      description: bmiType === 'normal' ? 'Helps in maintaining cardiovascular health, burns calories, and improves endurance without overstraining the body' :
                    bmiType === 'underweight' ? 'Incorporate compound lifts like squats, deadlifts, and bench presses to stimulate muscle growth.' :
                    bmiType === 'overweight' ? 'A low-impact, full-body cardio workout that improves strength and endurance.' :
                    'Gentle squats using a chair for support help build leg strength and improve balance.',
    },

    {
      id: 2,
      image: bmiType === 'normal' ? n2 :
              bmiType === 'underweight' ? u2 :
              bmiType === 'overweight' ? ov2 : o2,

      title: bmiType === 'normal' ? 'Brisk Walking or Light Jogging (Cardio)' :
              bmiType === 'underweight' ? 'Planck':
              bmiType === 'overweight' ? 'Hiking' : 'Chair Based Exercise',

      description: bmiType === 'normal' ? 'Helps in maintaining cardiovascular health, burns calories, and improves endurance without overstraining the body' :
                    bmiType === 'underweight' ? 'Planks help build muscle mass and increase strength.' :
                    bmiType === 'overweight' ? 'Offers a fun, outdoor way to burn calories while toning leg muscles. Start with gentle slopes and gradually increase difficulty.' :
                    'Seated leg lifts, seated marches, or seated overhead presses are perfect for beginners and those with limited mobility.',
    },

    {
      id: 3,
      image: bmiType === 'normal' ? n3 :
              bmiType === 'underweight' ? u3 :
              bmiType === 'overweight' ? ov3 : o3,

      title: bmiType === 'normal' ? 'Yoga or Pilates (Flexibility & Core Strength)' :
              bmiType === 'underweight' ? 'Lunges and Weighted Lunges':
              bmiType === 'overweight' ? 'Step Aerobics' : 'Elliptical Training',

      description: bmiType === 'normal' ? 'Enhances flexibility, core strength, balance, and mental relaxation. Duration: 20-30 minutes, 2-3 times a week' :
                    bmiType === 'underweight' ? 'Lunges are a versatile lower body exercise that strengthens the legs, glutes, and core while improving balance and flexibility.' :
                    bmiType === 'overweight' ? 'Great for burning calories while strengthening the legs and improving heart health.' :
                    'This offers a full-body workout with less joint impact, helping burn calories and build endurance.',
    },
  ];

  return (
    <Container sx={{ mt: 5, }}>
      <Grid container spacing={3}>
        {cardData.map((card) => (
          <Grid item xs={12} sm={6} md={4} key={card.id}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                src={card.image}
                alt={card.title}
                sx={{objectFit: 'contain'}}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{marginTop: '12px'}}>
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ResponsiveCards;
