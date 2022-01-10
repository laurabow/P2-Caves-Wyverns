import { Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<div>Caves & Wyverns</div>} />
        <Route path={"/characters"} element={<div>Choose your fighter!</div>} />
        <Route path={"/rules"} element={<div>Rules</div>} />
        <Route path={"/battle"} element={<div>Battle</div>} />
      </Routes>
    </div>
  );
}

export default App;
