import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { PieChart, Pie, Cell, Legend } from 'recharts';
import { useContext } from 'react';
import { MyContext } from './Context';

const bmiCategories = [
  { name: 'Underweight', value: 18.5 },
  { name: 'Normal weight', value: 24.9 },
  { name: 'Overweight', value: 29.9 },
  { name: 'Obesity', value: 40 },
];

const COLORS = ['#FF6347', '#3CB371', 'brown', '#FF4500'];

const BMIDonutChart = ({ bmi }) => {
  const { setBmiType } = useContext(MyContext);
  const getActiveIndex = () => {
    if (bmi < 18.5){
      setBmiType('underweight');
      return 0;
    }else if (bmi >= 18.5 && bmi < 24.9){
      setBmiType('normal');
      return 1;
    }else if (bmi >= 25 && bmi < 29.9){
      setBmiType('overweight');
      return 2;
    }else{
      setBmiType('obesity');
      return 3;
    }
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="div" fontWeight={500}>
          BMI Pie Chart
        </Typography>
        <Box sx={{ width: '100%', mt: 2 }}>
          <PieChart width={300} height={300} id='pie'>
            <Pie
              data={bmiCategories}
              cx={150}
              cy={150}
              innerRadius={70}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              activeIndex={getActiveIndex()}
              activeShape={{
                stroke: '#000',
                strokeWidth: 4,
              }}
              paddingAngle={5}
            >
              {bmiCategories.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]}  />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </Box>
        <Typography variant="h6" component="div" color="textSecondary" sx={{ mt: 2 }}>
          Your BMI is <b>{bmi.toFixed(1)}</b>
        </Typography>
        <Typography variant="h6" component="div" color="textSecondary" sx={{ mt: 1 }}>
          {bmi < 18.5 && 'Underweight'}
          {bmi >= 18.5 && bmi < 24.9 && 'Normal weight'}
          {bmi >= 25 && bmi < 29.9 && 'Overweight'}
          {bmi >= 30 && 'Obesity'}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BMIDonutChart;
