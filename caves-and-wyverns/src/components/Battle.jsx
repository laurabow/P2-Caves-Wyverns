import { useState, useEffect } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import Dice from "react-dice-roll";
import api from '../services/apiConfig';
import api2 from '../services/apiConfig/index2';
import Roller from './Roller';
// import Health from './Health';

export default function Battle(props) {

  const [monster, setMonster] = useState([]);
  const [character, setCharacter] = useState({});
  const [characterHealth, setCharacterHealth] = useState(50);
  const [monsterHealth, setMonsterHealth] = useState(50);
  const { id } = useParams();

  const navigate = useNavigate();

  // substitue in a funciton that checks player and monster health:
  const handleClick = async (e) => {
    e.preventDefault();
    navigate("/");
  };


  useEffect(() => {
    const fetchMonster = async () => {
      const res = await api2.get();
      console.log(res.data);
      setMonster(res.data.records);
      setMonsterHealth(res.data.records[0].fields.health);
    }
    fetchMonster();
    const setInitialMonsterHealth = () => {
      
    }
    setInitialMonsterHealth();
  }, []);
  console.log(monsterHealth);

  // fetches the character chose by the player:
  useEffect(() => {
    const fetchCharacter = async () => {
      const res = await api.get("/");
      const character = res.data.records.find((record) => {
        return record.id === props.chosenCharacter;
      })
      setCharacter(character);
      setCharacterHealth(character.fields.health);
    }
    fetchCharacter();
  }, [props.chosenCharacter]);

  // check health goes here?

  // returns the image & name of the chosen character
  return (
    <div>
      <h1>Wind Hollow Cave</h1>
      <div id="body-div">
        <div>
          <h2 className="battle-name" id={character.id}>{character.fields?.name}</h2>
          <img className="battle-pic" style={{ width: "200px" }} src={character.fields?.image} alt={character.fields?.name} />
          <h3 id="pc-health">Life Force: {characterHealth}</h3>
        </div>

        <div id="roller-div">
          <Roller
            monsterHealth={monsterHealth}
            setMonsterHealth={setMonsterHealth}
            characterHealth={characterHealth}
            setCharacterHealth={setCharacterHealth} />
        </div>

        {/* if only one monster, don't need to map */}
          <div>
            {monster.map((monster) => {
              return (
                
                  <div key={monster.id}>
                    <h2 id="monster-name">{monster.fields?.name}</h2>
                    <img className="monster-pic" id={monster.id} style={{width: "200px"}} src={monster.fields?.image} alt={monster.fields?.name} />
                  <h3 className="monster-class">{monster.fields?.class}</h3>
                  <h3 className="monster-health">{monsterHealth}</h3>
                    <p className="monster-description">{monster.fields?.description}</p>
                  </div>
                )
              })}
          </div>
        <button onClick={handleClick}>go home placeholder button</button>
      </div>
    </div>
  )
}
