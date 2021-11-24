import React, { useState } from "react";
import PlayerScore from "./PlayerScore";

const HighScoreTable = (props) => {
  const [sortState, setSortState] = useState(0);

  const sortedScoresByCountry = props.scoresByCountry.sort((a, b) => {
    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
  });

  function sortToggle() {
    if (sortState === 0) {
      setSortState((previousValue) => previousValue + 1);
    } else if (sortState === 1) {
      setSortState((previousValue) => previousValue - 1);
    }
  }

  console.log(sortState);
  return (
    <div className="main-container">
      <h1>High Score Per Country</h1>
      <button onClick={sortToggle}>Ascending/Descending</button>
      {sortedScoresByCountry.map((element) => {
        return (
          <div className="table-container">
            <h2 className="country">High Scores: {element.name}</h2>
            <table className="table table-hover table-bordered" id="table">
              <thead>
                <tr>
                  <th scope="col" className="w-50">
                    Player
                  </th>
                  <th scope="col" className="w-50">
                    Score
                  </th>
                </tr>
              </thead>
              <tbody>
                {(sortState === 1
                  ? element.scores
                      .sort((a, b) => a.s - b.s)
                      .map((score) => {
                        return (
                          <PlayerScore playerName={score.n} score={score.s} />
                        );
                      }) : (sortState === 0
                  ? element.scores
                      .sort((a, b) => b.s - a.s)
                      .map((score) => {
                        return (
                          <PlayerScore playerName={score.n} score={score.s} />
                        );
                      })
                  : 0))}
              </tbody>
            </table>
          </div>
        );
      })}
      ;
    </div>
  );
};
export default HighScoreTable;
