import React from 'react';
import { useNavigate } from "react-router-dom";

export default function Rules() {

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    navigate("/battle");
  };

  return (
    <div>
      <h1>Rules of the game go here</h1>
      <h3>rules rules rules, I need to come up with the rules!</h3>
      <button onClick={handleClick}>Go to battle!</button>
    </div>
  )
}
