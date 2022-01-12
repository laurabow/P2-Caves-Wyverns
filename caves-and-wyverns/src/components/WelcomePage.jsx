import React from 'react'
import { useNavigate } from 'react-router-dom';

// import "./welcome.css";

export default function WelcomePage() {

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    // navigate to rules first?
    navigate("/characters");
  };

  return (
    <div id="welcome-page">
      <h1 id="title">Caves & Wyverns</h1>
      <h3 id="welcome">Welcome adventurer! You have arrived in the land of Gyre. Do you think you have what it takes to be a hero here? HA! I think not! You must prove yourself worthy of this place by defeating the great Moldscreamer of Wind Hollow Cave.</h3>
      <button id="choose-fighter" onClick={handleClick}>Choose your Fighter!</button>
    </div>
  )
}
