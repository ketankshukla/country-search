import React, { useState } from "react";
import "./CountrySearch.css";
import CountryDetails from "./CountryDetails";

const getCountryData = (country) =>
  new Promise(async (resolve, reject) => {
    try {
      const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
      const data = await res.json();

      if (data.status === 404) {
        reject(`Country not found: ${country}`);
      } else {
        resolve(data[0]);
      }
    } catch (error) {
      reject(error);
    }
  });

const CountrySearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [countryData, setCountryData] = useState(null);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      getCountryData(searchTerm)
        .then((data) => setCountryData(data))
        .catch((error) => console.error("Error fetching country data:", error));
    }
  };

  return (
    <div className="wrapper">
      <div className="container">
        <h1>Country Search</h1>
        <div className="search-form">
          <div className="input-container">
            <input
              type="text"
              className="search-input"
              value={searchTerm}
              onChange={handleSearchChange}
              onKeyPress={handleKeyPress}
              placeholder="Enter country name and press Enter"
            />
          </div>
        </div>
        {countryData && <CountryDetails countryData={countryData} />}
      </div>
    </div>
  );
};

export default CountrySearch;
