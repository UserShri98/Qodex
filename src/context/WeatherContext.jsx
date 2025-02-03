import React from "react";

import { createContext, useState } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState(localStorage.getItem("city") || "London");
  const [unit, setUnit] = useState("metric"); 

  return (
    <WeatherContext.Provider value={{ city, setCity, unit, setUnit }}>
      {children}
    </WeatherContext.Provider>
  );
};
