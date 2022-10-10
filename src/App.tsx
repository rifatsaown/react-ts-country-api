import React, { useEffect, useState } from "react";
import "./App.css";

interface icounties {
  name: string;
  capital: string;
  population: number;
  region?: string;
  altSpellings?: string[];
  flags: {
    svg: string;
    png: string;
  };
}

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div className="App">
      {countries.map((country: icounties) => (
        <ShowCountry
          name={country.name}
          altSpellings={country.altSpellings}
          region={country.region}
          capital={country.capital}
          population={country.population}
          flags={country.flags}
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
            (altSpelling) =>
              altSpelling +
              (props.altSpellings?.indexOf(altSpelling) ===
              Number(props.altSpellings?.length) - 1
                ? ""
                : ", ")
          )}
        </h5>
        <img
          style={{
            width: "350px",
          }}
          src={props.flags?.svg ? props.flags?.svg : props.flags?.png}
          alt={props.name}
        />
      </div>
    </>
  );
};

export default App;
