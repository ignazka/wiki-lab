import React from "react";
import { useParams } from "react-router-dom";

function Countrydetails({ data }) {
  const { id } = useParams();
  console.log(data);
  const [detailedCountry] = data.filter((country) => country.alpha3Code === id);
  console.log(detailedCountry)
  return <div>{detailedCountry.name.common}</div>;
}

export default Countrydetails;
