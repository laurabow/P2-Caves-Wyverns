import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from "react-router-dom";

import api from '../services/apiConfig';


export default function Characters(props) {
  const navigate = useNavigate();

  const [characters, setCharacters] = useState([]);
  // const [fighter, setFighter] = useState({});
  const { id } = useParams();

  // this fetches the characters from the api for the player to choose from
  useEffect(() => {
    const fetchCharacters = async () => {
      const res = await api.get("/");
      console.log(res.data.records);
      setCharacters(res.data.records);
    }
    fetchCharacters();
  }, []);


  // this function navigates to the next page and puts the 
  // character chosen by the player onto the battle page
  const handleClick = async (e) => {
    props.setChosenCharacter(e.target.id);
    console.log(e.target.id);
    navigate("/rules");
  };

  // return the character options for the player to choose from
  return (
    <div>
      <h1>Choose your fighter! Choose wisely...</h1>
        <ul>
          {characters.map((character) => {
            return (
              <li key={character.id}>
                {/* <Link to={'/rules'}> */}
                <div id={character.id} onClick={handleClick}>
                    <h2 className="name" id={character.id}>{character.fields?.name}</h2>
                    <img className="picture" id={character.id} style={{width: "200px"}} src={character.fields?.image} alt={character.fields?.name} />
                    <h3 className="class" id={character.id}>{character.fields?.class}</h3>
                    <p className="description" id={character.id}>{character.fields?.description}</p>
                  </div>
                {/* </Link> */}
              </li>
            )
          })}
        </ul>
    </div>
  )
}
