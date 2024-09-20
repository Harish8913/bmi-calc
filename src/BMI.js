import React, { useState } from 'react';
import { Card, CardContent, TextField, Button, Grid, Radio, RadioGroup, FormControlLabel, Typography, FormHelperText, FormControl, FormLabel, Box } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import BMIGauge from './Circular';
import ImageSection from './ImgSection';
import { useContext } from 'react';
import { MyContext } from './Context';

const BMICalculator = () => {
  const [feet, setFeet] = useState('');
  const [inches, setInches] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [error, setError] = useState({});
  const { bmiResult, setBmiResult } = useContext(MyContext)
  const { bmiVal, setBmiValue } = useContext(MyContext)
  
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  const calculateBMI = () => {
    const heightInMeters = ((parseInt(feet) * 12) + parseInt(inches)) * 0.0254;
    const bmi = (parseFloat(weight) / (heightInMeters * heightInMeters)).toFixed(2);
    setBmiValue(bmi);
    return bmi;
  };

  const handleSubmit = () => {
    let tempError = {};
    if (!feet || !inches || !weight || !age || !gender) {
      if (!feet) tempError.feet = 'Feet is required';
      if (!inches) tempError.inches = 'Inches is required';
      if (!weight) tempError.weight = 'Weight is required';
      if (!age) tempError.age = 'Age is required';
      if (!gender) tempError.gender = 'Gender is required';
      setError(tempError);
      return;
    }
    setError({});
    
    const bmi = calculateBMI();

    let interpretation = '';
    if (gender === 'male') {
      interpretation = <div><p>Your BMI is {bmi}. </p> <small>For males, a normal BMI ranges between 18.5 and 24.9.</small></div>;
    } else if (gender === 'female') {
      interpretation = <div><p>Your BMI is {bmi}. </p> <small>For females, a normal BMI ranges between 18.5 and 24.9.</small></div>;
    }

    setBmiResult(interpretation);
  };

  return (
    <div id='container'>
    
    <Card style={{ maxWidth: '600px', margin: 'auto', marginTop: '20px', padding: '20px' }}>
      <CardContent>
        <Typography variant="h5" gutterBottom fontWeight={500}>
          BMI Calculator
        </Typography>

        <Grid container spacing={isSmallScreen ? 2 : 4}>
          <Grid item xs={6}>
            <TextField
              label="Height (Feet)"
              value={feet}
              onChange={(e) => setFeet(e.target.value)}
              fullWidth
              error={!!error.feet}
              helperText={error.feet}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label="Height (Inches)"
              value={inches}
              onChange={(e) => setInches(e.target.value)}
              fullWidth
              error={!!error.inches}
              helperText={error.inches}
              type='number'
              inputProps={{
                min: 1,
                max: 12
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Weight (kg)"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              fullWidth
              error={!!error.weight}
              helperText={error.weight}
            />
          </Grid>

          <Grid container item xs={12} spacing={2} justifyContent="space-between">
            <Grid item xs={isSmallScreen ? 12 : 6}>
              <TextField
                label="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                fullWidth
                error={!!error.age}
                helperText={error.age}
                inputProps={{ min: 2, max: 120 }}
              />
            </Grid>

            <Grid item xs={isSmallScreen ? 12 : 6}>
              <FormControl error={!!error.gender}>
                <FormLabel>Gender</FormLabel>
                <RadioGroup row value={gender} onChange={(e) => setGender(e.target.value)}>
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                </RadioGroup>
                <FormHelperText>{error.gender}</FormHelperText>
              </FormControl>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" color="primary" sx={{padding: '12px'}} fullWidth onClick={handleSubmit}>
              Calculate BMI
            </Button>
          </Grid>
        </Grid>

        {bmiResult && (
          <Box mt={3}>
            <Typography variant="h6" color="textPrimary">
              {bmiResult}
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>

    {bmiResult ? 
      <BMIGauge bmi={parseFloat(bmiVal)}/> : 
      <ImageSection />}
    </div>
  );
};

export default BMICalculator;
