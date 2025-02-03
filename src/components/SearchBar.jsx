import React from "react";

import { useContext, useState } from "react";
import { WeatherContext } from "../context/WeatherContext";
import SearchIcon from "@mui/icons-material/Search";
import styles from "../styles/SearchBar.module.css";

const SearchBar = () => {
  const { setCity } = useContext(WeatherContext);
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input.trim()) {
      setCity(input);
      localStorage.setItem("city", input);
    }
  };

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder="Enter city..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSearch}>
        <SearchIcon />
      </button>
    </div>
  );
};

export default SearchBar;
