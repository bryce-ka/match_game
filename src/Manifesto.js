import React from "react";
import "./Intro.css";
function Manifesto() {
  return (
    <div>
      <div className="container">
        <div className="cardback">
          <p className="title2">Still don't think tinder is a game?</p>
          <p>
            Tinder used to utilize an "Elo score" to determine a user's desirability and match them with others accordingly.
            Tinder's use of the Elo score to determine the desirability of its users was a novel approach to online dating.
            By assigning a numerical value to each user, Tinder created a hierarchy of attractiveness and compatibility. This
            allowed users to quickly and easily sort through potential matches, and helped to create a more efficient and effective
            dating experience.
          </p>
          <p>
            Elo score's are used in a similar way for online games like Chess and Go. In these games, players are assigned a numerical value
            that reflects their skill level and overall performance. This allows players to quickly and easily match up against opponents
            of a similar skill level, ensuring that games are fair and competitive.
          </p>
          <p>
            Although they no longer use this system,
            the impact of the Elo score can still be seen in the way that Tinder operates. The use of the Elo score suggests that Tinder
            views its users as numbers, rather than individuals, and that the ultimate goal is to match people based on their perceived
            attractiveness. This way of thinking can still be seen in the way that the app is designed, with the focus being on appearances
            and the ability to quickly swipe through potential matches. While this approach may be effective in terms of matching people and
            promoting engagement on the app, it also raises questions about the potential objectification of users
            and the emphasis on superficial qualities.
          </p>
        </div>
        
      </div>
    </div>
  );
}

export default Manifesto;
