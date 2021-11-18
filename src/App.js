import React from "react";
import HighScoreTable from "./HighScoreTable";
import allCountryScores from "./scores";
import "./App.css";

function App() {
  return (
    <div className="App">
      <HighScoreTable scoresByCountry={allCountryScores}/>
    </div>
  );
}

export default App;
