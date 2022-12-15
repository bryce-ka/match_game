import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import IconButton from "@mui/material/IconButton";
import "./Header.css";
import {Link} from "react-router-dom"

function Header() {
  return (
    // bem
    <div className= "front">
      <div className="header">
        <Link to = "/play?">
          <IconButton>
            <i className="leaderboard header__icon bi bi-person-square"></i>
          </IconButton>
              </Link>
              <Link to = "/">
        <h2 className="match_words">Match, Match, Match</h2>
            </Link>
        <Link to="/leaderboard?">
          <IconButton>
            <i className="leaderboard header__icon bi bi-person-lines-fill"></i>
          </IconButton>
        </Link>
      </div>
    </div>
  );
}

export default Header;
