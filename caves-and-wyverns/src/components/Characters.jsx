import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";

import api from '../services/apiConfig';


export default function Characters() {

  const [characters, setCharacters] = useState([]);
  const [fighter, setFighter] = useState({});
  const { id } = useParams();

  // useEffect(() => {
  //   const fetchCharacters = async () => {
  //     const res = await api.get("/");
  //     console.log(res.data.records);
  //     setCharacters(res.data.records);
  //   }
  //   fetchCharacters();
  // }, []);

  // useEffect(() => {
  //   const fetchFighter = async () => {
  //     const res = await api.get(`/${id}`)
  //     setFighter(res.data);
  //   };
  //   fetchFighter();
  // }, []);

  return (
    <div>
      <h2>Choose your fighter! Choose wisely...</h2>
      {/* <ul>
        {characters.map((character) => {
          return (
            <li>
              <div>
                <h3>{character.fields?.name}</h3>
                <h2>{character.fields?.class}</h2>
                <p>{character.fields?.description}</p>
              </div>
            </li>
          )
        })}
      </ul> */}
    </div>
  )
}
