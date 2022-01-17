import React from 'react';
import { useNavigate } from "react-router-dom";

export default function Lose() {

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div>
      <h1 id="death-notice">YOU DIED!!!!</h1>
      <h3 id="obit">And so the intrepid adventurer’s body lies broken on the ground in Wind Hollow Cave. Unable to withstand the withering attacks of fungus and spore. Oh brave adventurer, who could not defeat some vicious mold. Oh heroic adventurer, unable to accomplish what some lysol and sponge could do in about 30 seconds. Oh strong adventurer, dead-- because of an overgrown portabello. I'd ask you how you feel about it, but you're dead in a dirty cave. Try again?</h3>
      <button id="dead-btn" onClick={handleClick}>Go to Home</button>
    </div>
  )
}
