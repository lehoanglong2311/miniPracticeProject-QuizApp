import './App.css';
import EndGame from './components/EndGame/EndGame';
import InGame from './components/InGame/InGame';
import StartGame from './components/StartGame/StartGame';
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>

        <Route path="/" element={<StartGame />}>
        </Route>
        <Route path="Ingame" element={<InGame />}/>
        {/* <Route path="EndGame" element={<EndGame />}/> */}

      </Routes>


    </div>
  );
}

export default App;
