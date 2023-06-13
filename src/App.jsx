import React, { useState } from "react";
import CountryCards from "./components/cards";

function App() {
  const [countriesLength, setCountriesLength] = useState(0);

  // Function to receive the countries length from Card.jsx
  const handleCountriesLength = (length) => {
    setCountriesLength(length);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-orange-400 py-8">
        <div className="text-center">
          <h1 className="text-3xl text-white font-semibold">
            World Countries Data
          </h1>
          <p className="text-lg text-gray-900 font-semibold">
            {`Currently, we have ${countriesLength} countries`}
          </p>
        </div>
      </header>
      <CountryCards countriesLength={handleCountriesLength} />
      <footer className="bg-orange-400 py-8">
        <p className="text-lg text-white text-center">
          © 2023 30 Days Of React | Designed and Built by Jatin Bhandari 🚀🧑‍💻
        </p>
      </footer>
    </div>
  );
}

export default App;
