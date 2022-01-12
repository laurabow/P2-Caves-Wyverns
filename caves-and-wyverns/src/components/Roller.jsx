import React from 'react'
import Dice from 'react-dice-roll';
import api from '../services/apiConfig';
import api2 from '../services/apiConfig/index2';

export default function Roller() {



  return (
    <div>
      <h1>Dice Roller</h1>
      <Dice size="70" onRoll={(value) => console.log(value)} />
    </div>
  )
}
