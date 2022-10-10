import React, { useEffect, useState } from "react";
import "./App.css";

interface icounties {
  name: string;
  capital: string;
  population: number;
  region: string;
}

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  console.log(countries);
  
  return (
    <div className="App">
      {
        countries.map((country:icounties) => <h1>{country.name}</h1>)
      }
    </div>
  );
}

const ShowCountry = (props:icounties) => {

};

export default App;
