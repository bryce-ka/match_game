import React from "react";
import { IconButton } from "@mui/material";
import "./Swipe_buttons.css";

const SwipeButtons = () => {
  return (
    <div className="swipe_buttons">
      <IconButton className="x">
        <i className="bi bi-x"></i>
      </IconButton>

      <IconButton className="heart">
        <i className="bi bi-heart-fill"></i>
      </IconButton>
    </div>
  );
};

export default SwipeButtons;
