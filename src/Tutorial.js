import React, { useEffect, useState } from "react";
import "./Tutorial.css";
import TinderCard from "react-tinder-card";
// import "./Swipe.css";

function Tutorial() {
  const [instructions] = useState([
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
  ]);
  const onSwipe = (direction) => {
      console.log('You swiped: ' + direction);
    }  
    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
      }

  useEffect(() => {}, [instructions]);

  return (
    <div>
      <div classtext="container hide_overflow">
        <div class="row">
          <div class="col-2 side_button">
            <i class="side_button bi bi-x-circle"></i>
          </div>
          <div class="col-8">
            <div class="cardback">
              
              <div className="match_card_container">
                {instructions.map((inst) => (
                  <TinderCard
                        onSwipe={onSwipe}
                        onCardLeftScreen={() => onCardLeftScreen('fooBar')}
                    className="swipe"
                    key={inst.text}
                    // preventSwipe={["up", "down"]}
                    >
                        
                    <div className="card">
                      <h1>{inst.text}</h1>
                    </div>
                  </TinderCard>
                ))}
              </div>
              
            </div>
          </div>
          <div class="col-2 side_button">
            <i class="bi bi-heart-fill side_button"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tutorial;
