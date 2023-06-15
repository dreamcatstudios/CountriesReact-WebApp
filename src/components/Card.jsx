import React, { useContext } from "react";
import { FetchDataContext } from "../context/FetchDataContext";

function Card() {
  const { weatherData, city, setCity, getCurrentTemperature, cleanData } =
    useContext(FetchDataContext);
  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getCurrentTemperature();
  };

  // Map weather codes to emoji characters
  // Map weather codes to emoji characters
  const emojiMap = {
    200: "⛈️", // Thunderstorm with light rain
    201: "⛈️", // Thunderstorm with rain
    202: "⛈️", // Thunderstorm with heavy rain
    230: "⛈️", // Thunderstorm with light drizzle
    231: "⛈️", // Thunderstorm with drizzle
    232: "⛈️", // Thunderstorm with heavy drizzle
    233: "⛈️", // Thunderstorm with Hail
    300: "🌧️", // Light Drizzle
    301: "🌧️", // Drizzle
    302: "🌧️", // Heavy Drizzle
    500: "🌧️", // Light Rain
    501: "🌧️", // Moderate Rain
    502: "🌧️", // Heavy Rain
    511: "🌧️", // Freezing rain
    520: "🌧️", // Light shower rain
    521: "🌧️", // Shower rain
    522: "🌧️", // Heavy shower rain
    600: "❄️", // Light snow
    601: "❄️", // Snow
    602: "❄️", // Heavy Snow
    610: "❄️", // Mix snow/rain
    611: "❄️", // Sleet
    612: "❄️", // Heavy sleet
    621: "❄️", // Snow shower
    622: "❄️", // Heavy snow shower
    623: "❄️", // Flurries
    700: "🌫️", // Mist
    711: "🌫️", // Smoke
    721: "🌫️", // Haze
    731: "🌫️", // Sand/dust
    741: "🌫️", // Fog
    751: "🌫️", // Freezing Fog
    800: "☀️", // Clear sky
    801: "🌤️", // Few clouds
    802: "⛅️", // Scattered clouds
    803: "🌥️", // Broken clouds
    804: "☁️", // Overcast clouds
    900: "❓", // Unknown Precipitation
  };

  // Function to get emoji character for a given code
  const getEmojiForCode = (code) => {
    const emojiCharacter = emojiMap[code];
    return emojiCharacter ? (
      <span style={{ fontSize: "5rem" }}>{emojiCharacter}</span>
    ) : (
      "🌦️"
    ); // Default to partly cloudy emoji
  };

  return (
    <div className="w-full h-full">
      <div className="bg-[#FFFFFF] rounded shadow-lg flex flex-col m-5 items-center md:p-24 p-24 md:m-12 ">
        <div>
          <h1 className="md:text-3xl text-2xl text-center">
            Weather Data Supaafast ⚡️🌦️
          </h1>
        </div>
        <div className="m-5">
          <input
            className="border-2 border-black rounded-lg p-5"
            type="text"
            placeholder="Type Your City Name.."
            value={city}
            onChange={handleChange}
          />
        </div>

        <div>
          <button
            onClick={onSubmit}
            className="px-5 py-3 bg-black rounded-lg text-white"
          >
            Get Data 🚀
          </button>
        </div>

        {weatherData.length !== 0 && (
          <div className="flex flex-col space-y-2 mt-10">
            <p className="font-semibold text-center">{`Current temperature is ${cleanData.temp}°C`}</p>
            <p className="font-semibold text-center">{`The Country is ${cleanData.country}`}</p>
            <p className="font-semibold text-center">{`It feels like ${cleanData.description}`}</p>
            <p className="font-semibold text-center">
              <span style={{ fontSize: "2rem" }}>
                {getEmojiForCode(cleanData.code)}
              </span>
            </p>
          </div>
        )}
      </div>
      <div class="bottom-0 w-full">
        <p className="font-light text-center pt-5 pb-2 w-full">
          Weather App ⛅️ made by Jatin Bhandari 🧑‍💻 with ❤️
        </p>
      </div>
    </div>
  );
}

export default Card;
