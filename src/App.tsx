import React, { useEffect, useState } from "react";
import "./App.css";

interface icounties {
  name: string;
  capital: string;
  population: number;
  region?: string;
  altSpellings?: string[];
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
      {countries.map((country: icounties) => (
        <ShowCountry
          name={country.name}
          altSpellings={country.altSpellings}
          region={country.region}
          capital={country.capital}
          population={country.population}
        ></ShowCountry>
      ))}
    </div>
  );
}

const ShowCountry = (props: icounties) => {
  return (
    <>
      <div>
        <h1>Name :{props.name}</h1>
        <h2>Capital :{props.capital}</h2>
        <h3>Popilation :{props.population}</h3>
        <h4>Regioun :{props.region}</h4>
        <h5>
          AltSpellings :
          {props.altSpellings?.map(
            // show altSpellings if it is not undefined with a comma between them 
            (altSpellings) => altSpellings +  
            // if it is the last element of the array, don't add a comma
            (props.altSpellings?.indexOf(altSpellings) === Number(props.altSpellings?.length) - 1 ? "" : ", ")
          )}
        </h5>
      </div>
    </>
  );
};

export default App;
