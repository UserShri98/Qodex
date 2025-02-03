import React from "react";
import { useContext } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { WeatherContext } from "../context/WeatherContext";

const API_KEY = process.env.REACT_APP_API_KEY; 

const Forecast = () => {
  const { city, unit } = useContext(WeatherContext);

  const fetchForecast = async () => {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&appid=${API_KEY}`
    );
    return res.data;
  };

  const { data, error, isLoading } = useQuery(["forecast", city, unit], fetchForecast);

  if (isLoading) return <p>Loading forecast...</p>;
  if (error) return <p>Failed to load forecast.</p>;

  return (
    <div>
      <h3>5-Day Forecast</h3>
      <div style={{ display: "flex", gap: "10px" }}>
        {data.list.slice(0, 5).map((item, index) => (
          <div key={index} style={{ border: "1px solid gray", padding: "10px" }}>
            <p>{new Date(item.dt * 1000).toLocaleDateString()}</p>
            <p>{Math.round(item.main.temp)}°{unit === "metric" ? "C" : "F"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
