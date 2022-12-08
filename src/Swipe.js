import React, { useState, useMemo, useRef } from "react";
import TinderCard, { contextTypes } from "react-tinder-card";
import "./Tutorial.css";
import "./Swipe.css";
import { IconButton } from "@mui/material";
import { Await } from "react-router-dom";
// need an array for swipable peoples info

var hobby_list = [
  "3D printing",
  "Acroyoga",
  "Book discussion clubs",
  "Book restoration",
  "Bowling",
  "Brazilian jiu-jitsu",
  "Breadmaking",
  "Building",
  "Bullet journaling",
  "Butchering",
  "Calligraphy",
  "Candle making",
  "Candy making",
  "Car spotting",
  "Car fixing & building",
  "Card games",
  "Cardistry",
  "Ceramics",
  "Chatting",
  "Cheesemaking",
  "Chess",
  "Cleaning",
  "Clothesmaking",
  "Coffee roasting",
  "Collecting",
  "Coloring",
  "Communication",
  "Community activism",
  "Community Radio",
  "Computer programming",
  "Diorama",
  "Distro Hopping",
  "Diving",
  "Djembe",
  "DJing",
  "Do it yourself",
  "Drama",
  "Drawing",
  "Editing",
  "Electronic games",
  "Electronics",
  "Embroidery",
  "Engraving",
  "Entertaining",
  "Everyday carry",
  "Experimenting",
  "Fantasy sports",
  "Fashion",
  " Fashion design",
  "Feng shui decorating",
  "Filmmaking",
  "Fingerpainting",
  "Fishfarming",
  "Fishkeeping",
  "Flower arranging",
  "Fly tying",
  "Foreign language learning",
  "Furniture building",
  "Gaming",
  "Gambling",
  "Genealogy",
  "Gingerbread house making",
  "Giving advice",
  "Glassblowing",
  "Gardening",
  "Gongfu tea",
  "Graphic design",
  "Gunsmithing",
  "Hacking",
  "Hairstyle",
  "Hardware",
  "Herp keeping",
  "Home improvement",
  "Homebrewing",
  "Homing pigeons",
  "Houseplant care",
  "Meditation",
  "Memory training",
  "Metalworking",
  "Micropatriology",
  "Miniature art",
  "Minimalism",
  "Model building",
  "Modeling",
  "Model engineering",
  "Music",
  "Nail art",
  "Proofreading and editing",
  "Proverbs",
  "Public speaking",
  "Puppetry",
  "Puzzles",
  "Pyrography",
  "Quilling",
  "Quilting",
  "Quizzes",
  "Radio-controlled model playing",
  "Rail transport modeling",
  "Rapping",
  "Reading",
  "Sketching",
  "Skipping rope",
  "Slot car",
  "Soapmaking",
  "Social media",
  "Speedrunning",
  "Talking",
  "Taekwondo",
  "Tapestry",
  "Tarot",
  "Tattooing",
  "Taxidermy",
  "Telling jokes",
  "Thrifting",
  "Video making",
  "VR gaming",
  "Wargaming",
  "Watch making",
  "Watching documentaries",
  "Watching movies",
  "Watching television",
  "Wax sealing",
  "Waxing",
  "Weaving",
  "Webtooning",
  "Word searches",
  "Worldbuilding",
  "Wikipedia racing/Wikiracing",
  "Writing",
  "Writing music",
  "Yo-yoing",
  "Yoga",
  "Zumba",
];
var lifebar = (lifebar = (
  <div className="row container-fluid life">
    <div className="col-1 heart2">
      <i class="bi bi-heart-fill"></i>
    </div>
    <div className="col-1 heart2">
      <i class="bi bi-heart-fill"></i>
    </div>
    <div className="col-1 heart2">
      <i class="bi bi-heart-fill"></i>
    </div>
    <div className="col-1 heart2">
      <i class="bi bi-heart-fill"></i>
    </div>
    <div className="col-1 heart2">
      <i class="bi bi-heart-fill"></i>
    </div>
    <div className="col-1 heart2">
      <i class="bi bi-heart-fill"></i>
    </div>
    <div className="col-1 heart2">
      <i class="bi bi-heart-fill"></i>
    </div>
    <div className="col-1 heart2">
      <i class="bi bi-heart-fill"></i>
    </div>
    <div className="col-1 heart2">
      <i class="bi bi-heart-fill"></i>
    </div>
    <div className="col-1 heart2">
      <i class="bi bi-heart-fill"></i>
    </div>
  </div>
));

var current_health = 100;
var hobbies;
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

const profiles = new Array(100).fill({});

async function get_hobby() {
  hobbies = [];
  let num = getRandomIntInclusive(1, 4);
  while (num > 0) {
    let h_num = getRandomIntInclusive(0, 132);
    if (num > 1) {
      hobbies.push(hobby_list[h_num] + ", ");
    } else {
      hobbies.push(hobby_list[h_num]);
    }
    num = num - 1;
  }

  return hobbies.join(" ");
}
async function get_user() {
  const response = await fetch(
    "https://random-data-api.com/api/v2/users?size=100&is_json=true"
  ); //1
  if (!response.ok) {
    throw new Error(`Error! status: ${response.status}`);
  }

  let users = await response.json();

  for (let u = 0; u < users.length; u++) {
    let dis_hobby = await get_hobby();
    var pic =
      "https://xsgames.co/randomusers/assets/avatars/male/" +
      getRandomIntInclusive(0, 78) +
      ".jpg";
    if (u % 2 === 0) {
      pic =
        "https://xsgames.co/randomusers/assets/avatars/female/" +
        getRandomIntInclusive(0, 78) +
        ".jpg";
    }
    // let int = getRandomIntInclusive(0, 1);
    let profile = {
      id: users[u].uid,
      first_name: users[u].first_name,
      job: users[u].employment.title,
      location: users[u].address.city + ", " + users[u].address.state,
      hobby: dis_hobby,
      // match: int,
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
    let is_match = getRandomIntInclusive(0, 1);
    let match = 0;
    if (dir === "left") {
      match = 0;
    } else {
      match = 1;
    }
    if (canSwipe && currentIndex < profiles.length) {
      await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
    }
    console.log(typeof is_match, typeof match);
    console.log(is_match, match);
    if (is_match !== match) {
      console.log("you lost health");
      health(10);
    }
  };

  function health(loss_val) {
    current_health = current_health - loss_val;
    console.log(String(current_health));
    if (current_health == 100) {
      lifebar = (
        <div className="row container-fluid text-center">
          <div className="col-1 heart2">
            <i class="bi bi-heart-fill"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heart-fill"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heart-fill"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heart-fill"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heart-fill"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heart-fill"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heart-fill"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heart-fill"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heart-fill"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heartbreak"></i>
          </div>
        </div>
      );
    } else if (current_health == 90) {
      lifebar = (
        <div className="row container-fluid text-center">
          <div className="col-1 heart2">
            <i class="bi bi-heart-fill"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heart-fill"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heart-fill"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heart-fill"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heart-fill"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heart-fill"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heart-fill"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heart-fill"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heart-fill"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heartbreak"></i>
          </div>
        </div>
      );
    } else if (current_health == 80) {
      lifebar = (
        <div className="row container-fluid">
          <div className="col-1 heart2">
            <i class="bi bi-heart-fill"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heart-fill"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heart-fill"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heart-fill"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heart-fill"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heart-fill"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heart-fill"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heart-fill"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heartbreak"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heartbreak"></i>
          </div>
        </div>
      );
    } else if (current_health == 70) {
      lifebar = (
        <div className="row container-fluid">
          <div className="col-1 heart2">
            <i class="bi bi-heart-fill"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heart-fill"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heart-fill"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heart-fill"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heart-fill"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heart-fill"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heart-fill"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heartbreak"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heartbreak"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heartbreak"></i>
          </div>
        </div>
      );
    } else if (current_health == 60) {
      lifebar = (
        <div className="row container-fluid">
          <div className="col-1 heart2">
            <i class="bi bi-heart-fill"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heart-fill"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heart-fill"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heart-fill"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heart-fill"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heart-fill"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heartbreak"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heartbreak"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heartbreak"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heartbreak"></i>
          </div>
        </div>
      );
    } else if (current_health == 50) {
      lifebar = (
        <div className="row container-fluid">
          <div className="col-1 heart2">
            <i class="bi bi-heart-fill"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heart-fill"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heart-fill"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heart-fill"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heart-fill"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heartbreak"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heartbreak"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heartbreak"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heartbreak"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heartbreak"></i>
          </div>
        </div>
      );
    } else if (current_health == 40) {
      lifebar = (
        <div className="row container-fluid">
          <div className="col-1 heart2">
            <i class="bi bi-heart-fill"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heart-fill"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heart-fill"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heart-fill"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heartbreak"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heartbreak"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heartbreak"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heartbreak"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heartbreak"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heartbreak"></i>
          </div>
        </div>
      );
    } else if (current_health == 30) {
      lifebar = (
        <div className="row container-fluid">
          <div className="col-1 heart2">
            <i class="bi bi-heart-fill"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heart-fill"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heart-fill"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heartbreak"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heartbreak"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heartbreak"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heartbreak"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heartbreak"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heartbreak"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heartbreak"></i>
          </div>
        </div>
      );
    } else if (current_health == 20) {
      lifebar = (
        <div className="row container-fluid">
          <div className="col-1 heart2">
            <i class="bi bi-heart-fill"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heart-fill"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heartbreak"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heartbreak"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heartbreak"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heartbreak"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heartbreak"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heartbreak"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heartbreak"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heartbreak"></i>
          </div>
        </div>
      );
    } else if (current_health == 10) {
      lifebar = (
        <div className="row container-fluid">
          <div className="col-1 heart2">
            <i class="bi bi-heart-fill"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heartbreak"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heartbreak"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heartbreak"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heartbreak"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heartbreak"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heartbreak"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heartbreak"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heartbreak"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heartbreak"></i>
          </div>
        </div>
      );
    } else if (current_health == 0) {
      lifebar = (
        <div className="row container-fluid">
          <div className="col-1 heart2">
            <i class="bi bi-heartbreak"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heartbreak"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heartbreak"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heartbreak"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heartbreak"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heartbreak"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heartbreak"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heartbreak"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heartbreak"></i>
          </div>
          <div className="col-1 heart2">
            <i class="bi bi-heartbreak"></i>
          </div>
        </div>
      );
    }
  }

  return (
    <div>
      <div>
        <br></br>
        {lifebar}
      </div>
      {/* <div className = "card3"> */}
      <div className="row">
        <div className="col-10">
          <div className="match_card_container">
            {profiles.map((person, index, extra) => (
              <TinderCard
                ref={childRefs[index]}
                className="swipe"
                key={index}
                onSwipe={(dir) => swiped(dir, person.id, index)}
                onCardLeftScreen={() => outOfFrame(person.id, index)}
              >
                
                  <div className="card2">
                    <div className="row">
                      <div className="col-5">
                        <row>
                          <br></br>
                          <img src={person.pic} alt="profile pic"></img>
                        </row>
                        <row>
                          <h2 className="card_text name">
                            {person.first_name}
                          </h2>
                        </row>
                      </div>
                      <div className="col-7 bio">
                        <div className="row">
                          <div className="col-3 icon text-start">
                            <i className="bi bi-briefcase"></i>
                          </div>
                          <div className="col-9 icon text-star">
                            <p className="card_text text-start">{person.job}</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-3 icon text-start">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="col-9 text-start">
                            <p className="card_text text-start">
                              {person.location}
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-3 icon text-start">
                            <i className="bi bi-palette"></i>
                          </div>
                          <div className="col-9">
                            <p className="card_text text-start">
                              {person.hobby}
                            </p>
                          </div>
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
    // </div>
  );
}

export default Swipe;
