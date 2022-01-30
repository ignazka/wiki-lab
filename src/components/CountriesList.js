import React from "react";
import { Link, Route } from "react-router-dom";
import CountryDetails from "./CountryDetails";

function CountriesList({ data }) {
  return (
    <div className="list">
      {data.map((country) => {
        return (
          <div className="country">
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
              alt={country.name.common}
            />
            <Link to={country.alpha3Code}>{country.name.common} </Link>
          </div>
        );
      })}
    </div>
  );
}

export default CountriesList;
