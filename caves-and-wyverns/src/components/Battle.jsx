import { useState, useEffect } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import Dice from "react-dice-roll";
import api from '../services/apiConfig';
import api2 from '../services/apiConfig/index2';
// import Health from './Health';

export default function Battle(props) {

  const [monster, setMonster] = useState([]);
  const [character, setCharacter] = useState({});
  const { id } = useParams();

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    navigate("/");
  };

  // need to ad .post for player character selection somewhere

  // this is coming up as undefined...
  useEffect(() => {
    const fetchMonster = async () => {
      const res = await api2.get();
      console.log(res.data);
      setMonster(res.data.records);
    }
    fetchMonster();
  }, []);

  // fetches the character chose by the player:
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

  // const onRoll = () => {
  //   if ()
  // }

  // returns the image & name of the chosen character
  return (
    <div>
      <h1>Wind Hollow Cave</h1>

      <div>
        <h2 className="battle-name" id={character.id}>{character.fields?.name}</h2>
        <img className="battle-pic" style={{ width: "200px" }} src={character.fields?.image} alt={character.fields?.name} />
        <h3>Life Force: {character.fields?.health}</h3>
      </div>

      {/* <div id="player-dice">
        <Dice size="70" onRoll={(value) => console.log(value)} />
      </div>
      <div id="monster-dice">
        <Dice onRoll={(value) => console.log(value)} />
      </div> */}

      {/* if only one monster, don't need to map */}
        <div>
          {monster.map((monster) => {
            return (
              
                <div key={monster.id}>
                  <h2 id="monster-name">{monster.fields?.name}</h2>
                  <img className="monster-pic" id={monster.id} style={{width: "200px"}} src={monster.fields?.image} alt={monster.fields?.name} />
                <h3 className="monster-class">{monster.fields?.class}</h3>
                <h3>{monster.fields?.health}</h3>
                  <p className="monster-description">{monster.fields?.description}</p>
                </div>
              )
            })}
        </div>
{/* potential new button to roll dice on click: */}
      {/* <button id="attack-btn" onRoll={onRoll}>Attack!</button> */}
      <button id="attack-btn">Attack!</button>
      <button onClick={handleClick}>go home placeholder button</button>
    </div>
  )
}
