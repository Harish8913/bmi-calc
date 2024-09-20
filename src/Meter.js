import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
  Label,
  CartesianGrid,
} from 'recharts';

// BMI categories data
const data = [
  { subject: 'Underweight', A: 1, fullMark: 1 },
  { subject: 'Normal weight', A: 1, fullMark: 1 },
  { subject: 'Overweight', A: 1, fullMark: 1 },
  { subject: 'Obesity', A: 1, fullMark: 1 },
];

const getBMICategory = (bmi) => {
  if (bmi < 18.5) return 'Underweight';
  if (bmi >= 18.5 && bmi < 24.9) return 'Normal weight';
  if (bmi >= 25 && bmi < 29.9) return 'Overweight';
  return 'Obesity';
};

// Define a custom label to highlight the specific BMI category
const CustomLabel = ({ x, y, value }) => (
  <text x={x} y={y} fill="#ff0000" textAnchor="middle" dominantBaseline="middle">
    {value}
  </text>
);

const BMIMeter = ({ bmi }) => {
  const category = getBMICategory(bmi);
  
  // Positioning for the custom labels
  const categoryPosition = {
    'Underweight': { cx: '50%', cy: '20%' },
    'Normal weight': { cx: '80%', cy: '50%' },
    'Overweight': { cx: '50%', cy: '80%' },
    'Obesity': { cx: '20%', cy: '50%' },
  };

  const categoryPositionStyles = categoryPosition[category];

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6" component="div">
          BMI Category
        </Typography>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" width={400} height={300} data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 1]} />
          <Radar name="BMI" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          <Tooltip />
          <Label
            position="center"
            content={<CustomLabel x={categoryPositionStyles.cx} y={categoryPositionStyles.cy} value={category} />}
          />
        </RadarChart>
        <Typography variant="body1" component="div" color="textSecondary">
          Your BMI is categorized as: {category}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BMIMeter;
