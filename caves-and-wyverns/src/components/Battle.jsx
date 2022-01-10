import React from 'react'
import { useNavigate } from 'react-router-dom';
// import Health from './Health';

export default function Battle() {

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div>
      <h1>Battle Arena!</h1>
      <h4>PC picture with health bar and NPC opponent/monster go on this page</h4>
      <h4>Dice mechanics happen on this page!</h4>
      <h5>once the pc or the monster die, the game is over! Show win/lose message and then navigate back to homepage</h5>
      <button onClick={handleClick}>go home placeholder button</button>
    </div>
  )
}
