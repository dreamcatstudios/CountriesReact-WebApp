import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const FetchDataContext = createContext();

const API_KEY = "77b99faf8d714626bcd2c650a082c35c";

const FetchDataProvider = (props) => {
  const [weatherData, setWeatherData] = useState([]);
  const [city, setCity] = useState("");
  const [cleanData, setCleanData] = useState({
    temp: "",
    country: "",
    description: "",
    code: "",
  });

  const getCurrentTemperature = async () => {
    try {
      const response = await axios.get(
        "https://api.weatherbit.io/v2.0/current",
        {
          params: {
            city: city,
            key: API_KEY,
          },
        }
      );
      setWeatherData(response.data);
      console.log("URL:", response.config.url); // Log the URL being used
      console.log("City:", city);
      setCleanData({
        temp: response.data.data[0].temp,
        country: response.data.data[0].country_code,
        description: response.data.data[0].weather.description,
        code: response.data.data[0].weather.code,
      });
      console.log("Clean Data:", cleanData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FetchDataContext.Provider
      value={{ weatherData, city, setCity, getCurrentTemperature, cleanData }}
    >
      {props.children}
    </FetchDataContext.Provider>
  );
};

export { FetchDataContext, FetchDataProvider };
