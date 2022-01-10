import { Routes, Route, Link } from "react-router-dom";
import Characters from "./components/Characters";
import WelcomePage from "./components/WelcomePage";
import api from "./services/apiConfig";

import './App.css';


function App() {
  
  console.log(process.env.REACT_APP_AIRTABLE_BASE);
  console.log(process.env.REACT_APP_AIRTABLE_KEY);

  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<WelcomePage />} />
        <Route path={"/characters"} element={<Characters />} />
        {/* <Route path={"/rules"} element={<div>Rules</div>} /> */}
        {/* <Route path={"/battle"} element={<div>Battle</div>} /> */}
      </Routes>
    </div>
  );
}

export default App;
