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
      <h3 id="obit">YOU ARE DEAD HAHAHAHAHAHA</h3>
      <button id="dead-btn" onClick={handleClick}>Go to Home</button>
    </div>
  )
}
