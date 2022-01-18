import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Characters from "./components/Characters";
import WelcomePage from "./components/WelcomePage";
import Rules from "./components/Rules";
import Battle from "./components/Battle";
import Roller from "./components/Roller";
import Win from "./components/Win";
import Lose from "./components/Lose";
// import api from "./services/apiConfig";

import './App.css';


function App() {

  const [chosenCharacter, setChosenCharacter] = useState({});

  // console.log(process.env.REACT_APP_AIRTABLE_BASE);
  // console.log(process.env.REACT_APP_AIRTABLE_KEY);
  // console.log(process.env.REACT_APP_AIRTABLE_BASE2);
  // console.log(process.env.REACT_APP_AIRTABLE_KEY2);

  return (
    <div className="body">
      <div className="App">
        <Routes>
          <Route path={"/"} element={<WelcomePage />} />
          <Route path={"/characters"} element={<Characters setChosenCharacter={setChosenCharacter} />} />
          <Route path={"/rules"} element={<Rules />} />
          <Route path={"/battle"} element={<Battle chosenCharacter={chosenCharacter} />} />
          <Route path={"/roller"} element={<Roller />} />
          <Route path={"/win"} element={<Win />} />
          <Route path={"/lose"} element={<Lose />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
