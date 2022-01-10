import { useState, useEffect } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
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
  // useEffect(() => {
  //   const fetchMonster = async () => {
  //     const res = await api2.get("/");
  //     console.log(res.data.records);
  //     setMonster(res.data.records);
  //   }
  //   fetchMonster();
  // }, []);

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

  return (
    <div>
      <h1>Battle Arena!</h1>
      <div>
        <h4>PC picture with health bar and NPC opponent/monster go on this page</h4>
        <h4>Dice mechanics happen on this page!</h4>
        <h5>once the pc or the monster die, the game is over! Show win/lose message and then navigate back to homepage</h5>
      </div>
      <div>
        <h2 id={character.id}>{character.fields?.name}</h2>
        <img style={{ width: "200px" }} src={character.fields?.image} alt={character.fields?.name} />
      </div>
      {/* <ul>
        <div id="monster">
          {monster.map((monster) => {
            return (
              <li key={monster.id}>
                <div>
                  <h2>{monster.fields?.name}</h2>
                  <h3>{monster.fields?.class}</h3>
                  <p>{monster.fields?.description}</p>
                </div>
              </li>
            )
          })}
        </div>
      </ul> */}
      <button>Attack!</button>
      <button onClick={handleClick}>go home placeholder button</button>
    </div>
  )
}
