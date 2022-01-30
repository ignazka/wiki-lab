import "./App.css";
import NavBar from "./components/NavBar.js";
import jsonData from "./countries2.json";
import React from "react";
import CountriesList from "./components/CountriesList";
import { Route } from "react-router-dom";
import CountryDetails from "./components/CountryDetails";
import Axios from "axios";

const api = Axios.create({
  baseURL: "https://ih-countries-api.herokuapp.com/countries",
});

function App() {
  const [countriesData, setCountriesData] = React.useState(jsonData);

  async function getCountries() {
    const { data } = await api.get();
    setCountriesData(data);
  }

  React.useEffect(() => {
    getCountries();
  }, []);

  return (
    <div className="App">
      <NavBar />
      <div className="country-container">
        <CountriesList data={countriesData} />
        <Route path="/:id">
          <CountryDetails data={countriesData} />
        </Route>
      </div>
    </div>
  );
}

export default App;
