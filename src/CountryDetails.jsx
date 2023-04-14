import React from "react";

const CountryDetails = ({ countryData }) => {
  return (
    <table className="country-table">
      <tbody>
        <tr>
          <th>Name</th>
          <td>{countryData.name.common}</td>
        </tr>
        <tr>
          <th>Official Name</th>
          <td>{countryData.name.official}</td>
        </tr>
        <tr>
          <th>Capital</th>
          <td>{countryData.capital}</td>
        </tr>
        <tr>
          <th>Currencies</th>
          <td>{JSON.stringify(countryData.currencies)}</td>
        </tr>
        <tr>
          <th>Languages</th>
          <td>{JSON.stringify(countryData.languages)}</td>
        </tr>
        <tr>
          <th>Alt. Spellings</th>
          <td>{countryData.altSpellings.join(", ")}</td>
        </tr>
        <tr>
          <th>Region</th>
          <td>{countryData.region}</td>
        </tr>
        <tr>
          <th>Subregion</th>
          <td>{countryData.subregion}</td>
        </tr>
        <tr>
          <th>Population</th>
          <td>{countryData.population.toLocaleString()}</td>
        </tr>
        <tr>
          <th>Borders</th>
          <td>{countryData.borders.join(", ")}</td>
        </tr>
        <tr>
          <th>Area (sq. km)</th>
          <td>{countryData.area.toLocaleString()}</td>
        </tr>
        <tr>
          <th>Latitude and Longitude</th>
          <td>{countryData.latlng.join(", ")}</td>
        </tr>
        <tr>
          <th>Demonym</th>
          <td>{countryData.demonym}</td>
        </tr>
        <tr>
          <th>ISO 3166-1 Alpha-2</th>
          <td>{countryData.cca2}</td>
        </tr>
        <tr>
          <th>ISO 3166-1 Alpha-3</th>
          <td>{countryData.cca3}</td>
        </tr>
        <tr>
          <th>ISO 3166-1 Numeric</th>
          <td>{countryData.ccn3}</td>
        </tr>
        <tr>
          <th>Top Level Domain</th>
          <td>{countryData.tld.join(", ")}</td>
        </tr>
        <tr></tr>
      </tbody>
    </table>
  );
};

export default CountryDetails;
