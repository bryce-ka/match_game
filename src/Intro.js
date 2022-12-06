import { containerClasses } from "@mui/system";
import React from "react";
import "./Intro.css";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function Intro() {
  return (
    <div>
      <div className="container">
        <div className="cardback">
          <p>
            Why play Candy Crush when you can play on Tinder? There's something
            about the app that makes it feel like you're playing a game. You're
            disassociated with reality, anonymously choosing to like or dislike
            someone and then scoring points if they like you back. The dating
            game was already tough enough before, then Tinder came along and
            added another level.
          </p>

          <p>
            We tend to forget that there are real people with real feelings
            behind the pictures and profiles. We even use Tinder as a fun
            activity to do with friends, huddling together swiping through
            profiles and deciding who's hot and who's not. Some of you even walk
            away, letting your friends take over and make the decisions for you.
            Can you imagine if you got no matches at all? How crappy would that
            make you feel? Game over.
          </p>
        </div>
        <div className="next">
          <Link to="/tutorial">
            <IconButton className="button_arrow">
              <ArrowForwardIcon className="arrow__icon" fontSize="" />
            </IconButton>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Intro;
