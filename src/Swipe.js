import React, { useEffect, useState } from 'react';
import TinderCard from "react-tinder-card";
import './Swipe.css'
// need an array for swipable peoples info 
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

function Swipe() {
   
    const [people, setPeople] = useState([
        {
            name: "Jane ", 
            url:  "https://xsgames.co/randomusers/assets/avatars/female/"+getRandomIntInclusive(0,78)+".jpg"
            // bio:  
            // age:
            // position:
        },
        {
            name: "Randonew", 
            url:  "https://xsgames.co/randomusers/assets/avatars/female/"+getRandomIntInclusive(0,78)+".jpg"
        },
        {
            name: "Rando", 
            url:  "https://xsgames.co/randomusers/assets/avatars/male/"+getRandomIntInclusive(0,78)+".jpg"
        },
        {
            name: "Rando1", 
            url:  "https://xsgames.co/randomusers/assets/avatars/female/"+getRandomIntInclusive(0,78)+".jpg"
        },
        {
            name: "Rando2", 
            url:  "https://xsgames.co/randomusers/assets/avatars/male/"+getRandomIntInclusive(0,78)+".jpg"
        },
        {
            name: "Rando2", 
            url:  "https://xsgames.co/randomusers/assets/avatars/male/"+getRandomIntInclusive(0,78)+".jpg"
        }

    ]);
    useEffect(() => {

    }, [people]);
    // setPeople([..people, "sonny", "quais"])
    // people is variable set people is modifier 
  return (
    <div>
        {/* <h1> swipe</h1> */}
        <div className= "match_card_container">

            {people.map((person) => (
                <TinderCard
                className = "swipe"
                key = {person.name}
                preventSwipe = {['up', 'down']}
                >
                    
                    <div 
                    style = {{ backgroundImage: `url(${person.url})` }}
                    className = "card"
                    >
                    <h1>{person.name}</h1>
                    </div>
                </TinderCard>
        
            ))}
        </div>
    </div>
  );
}

export default Swipe
