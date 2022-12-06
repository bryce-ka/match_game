import React, { useEffect, useState, useMemo, useRef } from "react";
import "./Tutorial.css";
import TinderCard from "react-tinder-card";
import "./Swipe.css";
import { IconButton } from "@mui/material";
import "./Swipe_buttons.css";

const db = [
  {
    text: "How much can your heart take?",
    match: 5,
  },
  {
    text: "Be careful, If you loose too much health you'll die of heartbreak.",
    match: 5,
  },
  {
    text: "fail to make the same choice as the other user and you'll loose health.",
    match: 5,
  },

  {
    text: "But dont be fooled, theyre swiping on you too!",
    match: 5,
  },

  {
    text: "Swipe right (or click the heart) to match. Swipe left (or click the X) to not match.",
    match: 5,
  },
  {
    text: "This is a card.",
    match: 5,
  },
];

function Tutorial() {
  console.log("type: " + typeof(db))
  console.log(db)
  const [currentIndex, setCurrentIndex] = useState(db.length - 1);
  const [lastDirection, setLastDirection] = useState();
  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex);

  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canGoBack = currentIndex < db.length - 1;

  const canSwipe = currentIndex >= 0;

  // set last direction and decrease current index
  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
  };

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
  };

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < db.length) {
      await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
    }
  };

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };

  useEffect(() => {}, [db]);

  return (
    <div>
      <center>
        <h2 className="tut">Tutorial</h2>
      </center>
      <div text="container hide_overflow">
        <div className="row">
          <div className="col-10">
            <div className="match_card_container">
              {db.map((inst, index) => (
                <TinderCard
                  ref={childRefs[index]}
                  className="swipe"
                  key={index}
                  onSwipe={(dir) => swiped(dir, inst.name, index)}
                  onCardLeftScreen={() => outOfFrame(inst.name, index)}
                >
                  <div>
                    <div className="card2">
                      <h2 className="card_text">{inst.text}</h2>
                    </div>
                  </div>
                </TinderCard>
              ))}
            </div>
            <div className="swipe_buttons">
              <IconButton className="x" onClick={() => swipe("left")}>
                <i className="bi bi-x"></i>
              </IconButton>

              <IconButton className="heart" onClick={() => swipe("right")}>
                <i className="bi bi-heart-fill"></i>
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tutorial;
