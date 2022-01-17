import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
// import api from '../services/apiConfig';

import api3 from '../services/apiConfig/index3';

// const default_input = {
//   name: "",
// };

export default function WinOrLose() {

  const navigate = useNavigate();

  const [legends, setLegends] = useState([]);
  const [name, setName] = useState("");
  const [set, setSet] = useState(false);

  useEffect(() => {
    const fetchName = async () => {
      const res = await api3.get();
      // console.log(res.data.records);
      setLegends(res.data.records);
    }
    fetchName();
  }, [set]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const fields = legends;
    const res = await api3.post("/", { fields: {name} });
    console.log(res.data);
    setSet(prevSet => !prevSet);
    setName("");
  }

  const handleClick = async (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div>
      <h1>You Win!!! You defeated the Moldscreamer!</h1>
      <h2>Add your name to the List of Legends, so your victory will always be remembered.</h2>
      <button id="win-home" onClick={handleClick}>Go to Home</button>
      <br />
      <form
        onSubmit={handleSubmit}>
        <label id="name-label">Name: </label>
        <input id="add-name" placeholder='Add your name' value={name} onChange={(e)=> setName(e.target.value)}/>
        <button id="name-btn">Add Name</button>
      </form>
      <div id="legends">
        {legends.map((legend, index) => {
          return (
            <h3 key={index}>{legend.fields.name}</h3>
          )
        })}
      </div>
    </div>
  )
}
