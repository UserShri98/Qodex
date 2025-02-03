import React from "react";

import SearchBar from "../components/SearchBar";
import WeatherDisplay from "../components/WeatherDisplay";
import Forecast from "../components/ForeCast";

const Home = () => {
  return (
    <div>
      <h1>Weather Dashboard</h1>
      <SearchBar />
      <WeatherDisplay />
      <Forecast />
    </div>
  );
};

export default Home;
