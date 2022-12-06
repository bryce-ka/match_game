import React, { useEffect, useState, useMemo, useRef } from "react";
import TinderCard from "react-tinder-card";
import "./Tutorial.css";
import "./Swipe.css";
import { IconButton } from "@mui/material";
import { Await } from "react-router-dom";
// need an array for swipable peoples info


var is_match;
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

const profiles = new Array(100).fill({});

// profiles.push({id: "2173y029",
//   first_name: "Zendaya",
//   job: "Actor",
//   location: "Undisclosed",
//   gender: "Female",
//   pic: "https://media.allure.com/photos/5d8d2863b083230008715f01/4:3/w_2396,h_1797,c_limit/zendaya-beauty-lede.jpg",
// })

async function get_user() {
  const response = await fetch(
    "https://random-data-api.com/api/v2/users?size=100&is_json=true"
  ); //1
  if (!response.ok) {
    throw new Error(`Error! status: ${response.status}`);
  }

  let users = await response.json();

  for (let u = 0; u < users.length; u++) {
    var pic =
      "https://xsgames.co/randomusers/assets/avatars/male/" +
      getRandomIntInclusive(0, 78) +
      ".jpg";
    if (u % 2 == 0) {
      pic =
        "https://xsgames.co/randomusers/assets/avatars/female/" +
        getRandomIntInclusive(0, 78) +
        ".jpg";
    }
    let int = getRandomIntInclusive(0, 1);
    let profile = {
      id: users[u].uid,
      first_name: users[u].first_name,
      job: users[u].employment.title,
      location: users[u].address.city + ", " + users[u].address.state,
      match: int,
      pic: pic,
    };
    profiles[u] = profile;
  }
  return profiles;
}

get_user();

function Swipe() {
  // goal create an array of 100 people
  //get array data from api
  //      https://random-data-api.com/api/v2/users?size=100
  //use function ot get each users data/
  //
  //append each user to an array
  //use array as db for match game. (max 100 or 158)

  const [currentIndex, setCurrentIndex] = useState(profiles.length - 1);
  const [lastDirection, setLastDirection] = useState();
  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex);

  const childRefs = useMemo(
    () =>
      Array(profiles.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canGoBack = currentIndex < profiles.length - 1;

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
    let match;
    if (dir == "left") {
      match = 0;
    } else {
      match = 1;
    }
    if (canSwipe && currentIndex < profiles.length) {
      await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
    }
    console.log(typeof(is_match), typeof(match))
    console.log(is_match, match)
    if (is_match !== match) {
      console.log("you lost health")
      health(10);
    }
  };
  function health(loss_val) {}

  useEffect(() => {}, [profiles]);

  return (
    <div>
      <div className="progress container-fluid col-8 ">
      <div class="progress-bar-striped bg-success w-50 healthBar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
        </div>
      <div className="row">
        <div className="col-10">
          <div className="match_card_container">
            {profiles.map((person, index) => (
              <TinderCard
                ref={childRefs[index]}
                className="swipe"
                key={index}
                onSwipe={(dir) => swiped(dir, person.id, index)}
                onCardLeftScreen={() => outOfFrame(person.id, index)}
              >
                <div className="card2">
                  {(is_match = person.match)}
                  <div className="row">
                    <div className="column-sm-6 pro_pic">
                      <img src={person.pic} alt="profile pic"></img>
                    </div>
                    <div className="column-sm-6">
                      <div className="row">
                        <h2 className="card_text">{person.first_name}</h2>
                      </div>
                      <div className="row">
                        <p className="card_text">{person.job}</p>
                      </div>
                      <div className="row">
                        <p className="card_text">{person.location}</p>
                      </div>
                    </div>
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
  );
}

export default Swipe;
