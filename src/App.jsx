import { Routes, Route,Link } from "react-router-dom"; // Use BrowserRouter for routing
import React from "react";
import AllPlayers from './components/AllPlayers';
import SinglePlayer from './components/SinglePlayer';
import './App.css';

function App() {
  return (
    <div id="container">
    <h1>🏈 Welcome to Puppy Bowl in React 🏈</h1>
    <div id="navbar">
    <ul>
        <li>
          <Link to="/">AllPlayers</Link>
        </li>
        <li>
          <Link to="/players/:id">SinglePlayers</Link>
        </li>
      </ul>
      </div>

      <div id="main-section">
        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<AllPlayers />} />  {/*All Players Component*/}
          <Route path="/players/:id" element={<SinglePlayer />} /> {/*Single Player Component*/}
        </Routes>
      </div>
      </div>
  );
}

export default App;