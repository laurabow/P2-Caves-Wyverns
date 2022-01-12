import React from 'react';
import { useNavigate } from "react-router-dom";

export default function Rules() {

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    navigate("/battle");
  };

  return (
    <div id="rules">
      <div id="parchment">
        <h1 id="contract">Contract: The Moldscreamer!!</h1>
        <h3><span id="help">Help needed! A monster has taken over Wind Hollow Cave! It is Gyre's only resource for precious metals and minerals. Any brave adventurer who can slay the beast will be greatly rewarded! All you need to do is go to Wind Hollow Cave and defeat the beast!</span>
          <br />
        <span id="directions">Directions: Depart for Wind Hollow Cave. Once you arrive in Wind Hollow Cave, click the "attack" button to roll your dice to take your chances against the fearsome Moldscreamer. If you roll higher than the Moldscreamer, the number you  rolled will be taken away from the Moldscreamer’s life force. Should you be unlucky and roll lower than the foul Moldscreamer, your lifeforce will be drained by the number rolled by the Moldscreamer. Ready to begin? Click "Go to battle!" below!</span></h3>
      </div>
      <button id="battle" onClick={handleClick}>Go to battle!</button>
    </div>
  )
}
