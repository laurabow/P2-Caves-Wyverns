import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function WelcomePage() {

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    // navigate to rules first?
    navigate("/characters");
  };

  return (
    <div>
      <h1>Caves & Wyverns Welcome Page</h1>
      <p>Welcome adventurer! You have embarked on your perilous journey through the land of CoolFantasyName! Do you really think you have what it takes!? HA! I think not! You must battle the infamous CoolMonsterName in order to survive your journey!</p>
      {/* change button to how to play? */}
      <button onClick={handleClick}>Choose your Fighter!</button>
    </div>
  )
}
