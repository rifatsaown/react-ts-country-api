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
      {countries.map((country: icounties,index: number) => (
        <ShowCountry
          key={index}
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
      <div className="countries">
        <div>
        <img
          style={{
            width: "70%",
          }}
          src={props.flags?.svg ? props.flags?.svg : props.flags?.png}
          alt={props.name}
        />
        </div>
        <div>
        <h3>Name :{props.name}</h3>
        <h3>Capital :{props.capital}</h3>
        <p>Popilation :{props.population}</p>
        <p>Regioun :{props.region}</p>
        <p>
          AltSpellings :
          {props.altSpellings?.map(
            (altSpelling) =>
              altSpelling +
              (props.altSpellings?.indexOf(altSpelling) === Number(props.altSpellings?.length) - 1 ? "" : ", ")
          )}
        </p>
        </div>
      </div>
    </>
  );
};

export default App;
