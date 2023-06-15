import React, { useState } from "react";
import { FetchDataProvider } from "./context/FetchDataContext";
import Card from "./components/Card";
import "./App.css";

function App() {
  return (
    <>
      <FetchDataProvider>
        <Card />
      </FetchDataProvider>
    </>
  );
}

export default App;
