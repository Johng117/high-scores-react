import React from "react";
import PlayerScore from "./PlayerScore";

const HighScoreTable = (props) => {
  return (
    <div className="main-container">
      <h1>High Score Per Country</h1>
      {props.scoresByCountry.map((element) => {
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
                {element.scores.map((score) => {
                  return <PlayerScore playerName={score.n} score={score.s} />;
                })}
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
