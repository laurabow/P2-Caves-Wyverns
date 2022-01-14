import { useState, useEffect, useRef } from 'react';
import Dice from 'react-dice-roll';
import api from '../services/apiConfig';
import api2 from '../services/apiConfig/index2';
// import MonsterRoller from './MonsterRoller';

export default function Roller(props) {

  const diceRef = useRef(null);
  const diceRef2 = useRef(null);

  const [roll, setRoll] = useState({ dice1: null, dice2: null });
  const [monster, setMonster] = useState([]);
  const [character, setCharacter] = useState({});
  const [roll1Toggle, setroll1Toggle] = useState(false);
  const [roll2Toggle, setroll2Toggle] = useState(false);
  

  useEffect(() => {
    const fetchMonster = async () => {
      const res = await api2.get();
      console.log(res.data);
      setMonster(res.data.records);
    }
    fetchMonster();
  }, []);

  useEffect(() => {
    const fetchCharacter = async () => {
      const res = await api.get("/");
      const character = res.data.records.find((record) => {
        return record.id === props.chosenCharacter;
      })
      setCharacter(character);
    }
    fetchCharacter();
  }, [props.chosenCharacter]);

  const onRoll = (value) => {
    if (diceRef && diceRef.current) {
      console.log(diceRef.current.style.pointerEvents);
      diceRef.current.style.pointerEvents = "auto";
      diceRef.current.children[0].click();
      diceRef.current.style.pointerEvents = "none";
      // console.log(value);
    } 
    if (diceRef2 && diceRef2.current) {
      console.log(diceRef2.current.style.pointerEvents);
      diceRef2.current.style.pointerEvents = "auto";
      diceRef2.current.children[0].click();
      diceRef2.current.style.pointerEvents = "none";
      // console.log(value);
    }
    setToggle(prevToggle => !prevToggle);
  };

  useEffect(() => {
    // if (roll.dice1 && roll.dice2) {
    //   compare();
    // }
  }, [roll]);

  const roller = (value, currentDice) => {
    setRoll((prevState) => ({ ...prevState, [currentDice]: value }));
    if (currentDice === "dice1") {
      setroll1Toggle(true);
    } else {
      setroll1Toggle(true);
    }
  }


  function compare() {
    console.log(roll.dice1);
    console.log(roll.dice2);
    if (roll.dice1 >= roll.dice2) {
      props.setMonsterHealth(props.monsterHealth - roll.dice1)
      
      // return (

        // console.log("hit")
        
      //   // health decrement function goes here?
      // )
      // handleMonsterHealth();
    } else {
      // return (
        // console.log("miss")
        
      //   // health decrement function goes here?
      // )
      // handleCharacterHealth();
    }
  }
  // console.log(monsterHealth);

  return (
    <div>
      <h1>Dice Roller</h1>
      <button id="attack-btn" onClick={onRoll}>Attack!</button>
      <div ref={diceRef} className="test" style={{ pointerEvents: "none" }}>
        <Dice size="70" onRoll={(value) => roller(value, "dice1")}/>
        
      </div>
      <div ref={diceRef2} className="test" style={{ pointerEvents: "none" }}>
      <Dice size="70" onRoll={(value) => roller(value, "dice2")}/>
        </div>
    </div>
  )
}


