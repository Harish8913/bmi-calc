import React, { createContext, useState } from "react";

export const MyContext = createContext();

export const AppContext = ({ children }) => {
  const [bmiResult, setBmiResult] = useState("");
  const [bmiVal, setBmiValue] = useState();
  const [bmiType, setBmiType] = useState();

  return (
    <MyContext.Provider value={{ bmiResult, setBmiResult, bmiVal, setBmiValue, bmiType, setBmiType }}>
      {children}
    </MyContext.Provider>
  );
};


