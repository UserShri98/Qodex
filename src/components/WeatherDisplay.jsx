import { useQuery } from "react-query";
import axios from "axios";
import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

const API_KEY = process.env.REACT_APP_API_KEY; 

export const useWeatherData = () => {
  const { city, unit } = useContext(WeatherContext);
  
  const fetchWeather = async () => {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${API_KEY}`
    );
    return res.data;
  };

  return useQuery(["weatherData", city, unit], fetchWeather, {
    refetchInterval: 30000, 
  });
};
