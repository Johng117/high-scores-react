import React from "react";

const PlayerScore = (props) => {
    return (
        <tr scope="row">
            <td>{props.playerName}</td>
            <td>{props.score}</td>
        </tr>
     );
};

export default PlayerScore;