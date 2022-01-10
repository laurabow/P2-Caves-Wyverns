import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from "react-router-dom";

import api from '../services/apiConfig';


export default function Characters() {
  const navigate = useNavigate();

  const [characters, setCharacters] = useState([]);
  // const [fighter, setFighter] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchCharacters = async () => {
      const res = await api.get("/");
      console.log(res.data.records);
      setCharacters(res.data.records);
    }
    fetchCharacters();
  }, []);

  // useEffect(() => {
  //   const fetchFighter = async () => {
  //     const res = await api.get(`/${id}`)
  //     console.log(res.data);
  //     setFighter(res.data);
  //   };
  //   fetchFighter();
  // }, []);

  const handleClick = async (e) => {
    e.preventDefault();
    navigate("/rules");
  };

  return (
    <div>
      <h1>Choose your fighter! Choose wisely...</h1>
      <form onClick={handleClick}>
        <ul>
          {characters.map((character) => {
            return (
              <li key={character.id}>
                <Link to={'/rules'}>
                  <div>
                    <h2>{character.fields?.name}</h2>
                    <img style={{width: "200px"}} src={character.fields?.image} alt={character.fields?.name} />
                    <h3>{character.fields?.class}</h3>
                    <p>{character.fields?.description}</p>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </form>
    </div>
  )
}
