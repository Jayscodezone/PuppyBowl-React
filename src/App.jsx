import { Routes, Route,Link } from "react-router-dom"; // Use BrowserRouter for routing
import AllPlayers from './components/AllPlayers';
import PlayerDetails from './components/PlayerDetails.jsx';
import './App.css';
import React from 'react';

function App() {
  return (
    <div id="container">
    <h1>🏈 Welcome to Puppy Bowl in React 🏈</h1>
    <div id="navbar">
    <ul>
        <li>
          <Link to="/">All Players</Link>
        </li>
      </ul>
      </div>

      <div id="main-section">
        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<AllPlayers />} />  {/*All Players Component*/}
          <Route path="/players/:id" element={<PlayerDetails />} /> {/*Player Details  Component*/}
        </Routes>
      </div>
      </div>
  );
}

export default App;