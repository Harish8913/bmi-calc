import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import hero from './assets/hero.svg'

const ImageSection = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
      <Card sx={{ maxWidth: 500 }}>
        <CardMedia
          component="img"
          alt="Your Image Description"
          height="300"
          image={hero}// Replace with your image URL
          title="Image Title"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Understanding the Importance of BMI (Body Mass Index)
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{textAlign: 'justify'}}>
          The <b>Body Mass Index (BMI)</b> is a widely recognized and valuable tool used to assess a person's body weight relative to their height. It provides a simple, quick, and non-invasive way to categorize individuals into various weight categories, such as underweight, normal weight, overweight, and obesity. These categories are essential for identifying potential health risks associated with body weight.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ImageSection;
