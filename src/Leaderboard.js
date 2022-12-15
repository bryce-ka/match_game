import React from "react";
// import PersonIcon from "@mui/icons-material/Person";
// import ForumIcon from "@mui/icons-material/Forum";
// import IconButton from "@mui/material/IconButton";
// import {Link} from "react-router-dom"
// Import the "myVariable" variable from the "myFile.js" file
import { scores } from "./Swipe.js";
import "./Leaderboard.css";
// Use the imported variable in our code
// console.log("score: " , score)

// console.log("initial " , scores)
// scores[9] = ["bac", 11]
// let ten = scores[9]
// console.log("updated ", scores)
// console.log(scores[9][1])

// potentially update leaderboard with new info
// if (scores[9][1] < score) {
//     // console.log("updating....")
//     for (var i = 0; i < scores.length; i++) {
//         if (scores[i][1] < score) {
//             console.log(scores[i])
//             scores.splice(i, 0, [initials, score])
//             scores.pop()
//             break
//         }
//     }

// }

console.log("all", scores);

function Leaderboard() {
  return (
    <div className="container background">
      <h2 className="title">Leaderboard</h2>
      <div className="row">
            <div className="col cards">
            <div className="row box_sizing">
                <div className="col-2 number">1</div>
                <div className="col-5 intitials">{scores[0][0]}</div>
                <div className="col-4 score_num">{scores[0][1]}</div>
            </div>
            </div>
            <div className="col cards">
            <div className="row box_sizing">
                <div className="col-2 number">2</div>
                <div className="col-5 intitials">{scores[1][0]}</div>
                <div className="col-4 score_num">{scores[1][1]}</div>
            </div>
            </div>
          </div>
          <div className="row">
            <div className="col cards">
            <div className="row box_sizing">
                <div className="col-2 number">3</div>
                <div className="col-5 intitials">{scores[2][0]}</div>
                <div className="col-4 score_num">{scores[2][1]}</div>
            </div>
            </div>
            <div className="col cards">
            <div className="row box_sizing">
                <div className="col-2 number">4</div>
                <div className="col-5 intitials">{scores[3][0]}</div>
                <div className="col-4 score_num">{scores[3][1]}</div>
            </div>
            </div>
          </div>
          <div className="row">
            <div className="col cards">
            <div className="row box_sizing">
                <div className="col-2 number">5</div>
                <div className="col-5 intitials">{scores[4][0]}</div>
                <div className="col-4 score_num">{scores[4][1]}</div>
            </div>
            </div>
            <div className="col cards">
            <div className="row box_sizing">
                <div className="col-2 number">6</div>
                <div className="col-5 intitials">{scores[5][0]}</div>
                <div className="col-4 score_num">{scores[5][1]}</div>
            </div>
            </div>
          </div>
          <div className="row">
            <div className="col cards">
            <div className="row box_sizing">
                <div className="col-2 number">7</div>
                <div className="col-5 intitials">{scores[6][0]}</div>
                <div className="col-4 score_num">{scores[6][1]}</div>
            </div>
            </div>
            <div className="col cards">
            <div className="row box_sizing">
                <div className="col-2 number">8</div>
                <div className="col-5 intitials">{scores[7][0]}</div>
                <div className="col-4 score_num">{scores[7][1]}</div>
            </div>
            </div>
          </div>
          <div className="row">
            <div className="col cards">
            <div className="row box_sizing">
                <div className="col-2 number">9</div>
                <div className="col-5 intitials">{scores[8][0]}</div>
                <div className="col-4 score_num">{scores[8][1]}</div>
            </div>
            </div>
            <div className="col cards">
            <div className="row box_sizing">
                <div className="col-2 number">10</div>
                <div className="col-5 intitials">{scores[9][0]}</div>
                <div className="col-4 score_num">{scores[9][1]}</div>
            </div>
            </div>
        </div>
    </div>
  );
}

export { scores };
export default Leaderboard;
