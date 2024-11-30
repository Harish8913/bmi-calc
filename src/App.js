import "./App.css";
import BMICalculator from "./BMI.js";
import NavBar from "./Navbar.js";
import ExerciseCards from "./Cards.js";
import { useContext } from "react";
import { MyContext } from "./Context.js";
import DietCards from "./Diet.js";

function App() {
  const { bmiResult } = useContext(MyContext);
  return (
    <div className="App">
      <NavBar />
      <BMICalculator />
      {bmiResult && <ExerciseCards />}
      {bmiResult && <DietCards />}
    </div>
  );
}

export default App;
