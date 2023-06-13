import React, { useState, useEffect } from "react";
import axios from "axios";

function CountryCards({ countriesLength }) {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    setCountries(response.data);
    console.log(response.data.length);
    countriesLength(response.data.length);
  };

  const countriesSorting = (a, b) => {
    const nameA = a.name.common.toUpperCase();
    const nameB = b.name.common.toUpperCase();

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCountries = countries.filter((country) => {
    const countryName = country.name.common.toLowerCase();
    return countryName.includes(searchTerm.toLowerCase());
  });

  return (
    <>
      <div class="flex items-center justify-center w-[100%] p-10">
        <input
          class="border-2 border-black rounded-lg pl-3 pr-64 p-5 text-gray-500 font-semibold"
          type="text"
          value={searchTerm}
          placeholder="Search countries..."
          onChange={handleSearch}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        {filteredCountries.sort(countriesSorting).map((value) => (
          <div
            key={value.name.common}
            className="rounded-lg shadow-lg flex flex-col justify-center items-center mt-10 p-10 m-10"
          >
            <div className="rounded-lg shadow-lg shadow-gray-500 w-[50%]">
              <img src={value.flags.png} alt={`Flag of ${value.name.common}`} />
            </div>
            <div>
              <h1 className="text-orange-500 font-semibold text-2xl p-10">{`Country: ${value.name.common}`}</h1>
            </div>
            <div className="flex flex-col items-start justify-start w-[100%]">
              <p className="text-xl">
                <span className="font-semibold text-xl">Capital: </span>
                {`${value.capital}`}
              </p>
              <p className="text-xl">
                <span className="font-semibold text-xl">Language: </span>
                {value.languages ? Object.values(value.languages)[0] : ""}
              </p>
              <p className="text-xl">
                <span className="font-semibold text-xl">Population: </span>
                {`${value.population}`}
              </p>
              <p className="text-xl">
                <span className="font-semibold text-xl">Currency: </span>
                {value.currencies
                  ? Object.values(value.currencies)[0].name
                  : "Unknown"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default CountryCards;
