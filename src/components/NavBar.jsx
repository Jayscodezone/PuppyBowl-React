import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h2>The Nav Bar Component</h2>
      <ul>
        <li>
          <Link to="/">AllPlayers</Link>
        </li>
        <li>
          <Link to="/players/:id">SinglePlayers</Link>
        </li>
        <li>
          <Link to="/newplayerform">NewPlayerForm</Link>
        </li>
      </ul>
    </nav>
  );
}
