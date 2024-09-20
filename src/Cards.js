import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Container } from '@mui/material';
import Jog from './assets/jog.jpg'
import PullUp from './assets/pull-up.webp'
import Yoga from './assets/yoga.avif'

const cardData = [
  {
    id: 1,
    image: Jog,
    title: 'Brisk Walking or Light Jogging (Cardio)',
    description: 'Helps in maintaining cardiovascular health, burns calories, and improves endurance without overstraining the body',
  },
  {
    id: 2,
    image: PullUp, // Replace with actual image URL
    title: 'Bodyweight Strength Training',
    description: 'Builds and tones muscles, improves metabolism, and maintains a balanced physique.',
  },
  {
    id: 3,
    image: Yoga, // Replace with actual image URL
    title: ' Yoga or Pilates (Flexibility & Core Strength)',
    description: 'Enhances flexibility, core strength, balance, and mental relaxation. Duration: 20-30 minutes, 2-3 times a week',
  },
];

const ResponsiveCards = () => {
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
