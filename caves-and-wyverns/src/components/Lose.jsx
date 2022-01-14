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
      <h1>YOU DIIIIED</h1>
      <h3>YOU ARE DEAD HAHAHAHAHAHA</h3>
      <button onClick={handleClick}>Go to Home</button>
    </div>
  )
}
