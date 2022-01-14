import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import api3 from '../services/apiConfig/index3';

export default function WinOrLose() {

  const navigate = useNavigate();

  // const [legends, setLegends] = useState();

  // useEffect(() => {
  //   const fetchName = async () => {
  //     const res = await api3.get("/");
  //     console.log(res.data.records);
  //     setLegends(res.data.records);
  //   }
  //   fetchName();
  // }, []);

  const handleClick = async (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div>
      <h1>You Win!!! You defeated the Moldscreamer!</h1>
      <h2>Add your name to the List of Legends, so your victory will always be remembered.</h2>
      <button onClick={handleClick}>Go to Home</button>
      <form>
        <label>Name: </label>
        <input id="name" placeholder='Add your name' />
      </form>
      {/* <div id="legends">
        {legends.map((legend) => {
          return (
            <h3>{legend.fields.name}</h3>
          )
        })}
      </div> */}
    </div>
  )
}
