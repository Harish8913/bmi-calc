import "./App.css";
import BMICalculator from "./BMI.js";
import NavBar from "./Navbar.js";
import ResponsiveCards from "./Cards.js";
import DietPlan from "./DietPlan.js";
import { useContext } from "react";
import { MyContext } from "./Context.js";

function App() {
  const { bmiResult } = useContext(MyContext);
  return (
    <div className="App">
      <NavBar />
      <BMICalculator />
      {bmiResult && <ResponsiveCards />}
      {bmiResult && <DietPlan />}
    </div>
  );
}

export default App;
