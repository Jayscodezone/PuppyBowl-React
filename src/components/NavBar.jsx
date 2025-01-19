import React from "react";
import { Link } from 'react-router-dom';


export default function NavBar() {
  <nav>
    <h2>The Nav Bar Component</h2>
    <ul>
      <li>
        <Link to="/"> Home</Link>
      </li>
      <li>
        <Link to="/players/:id">Players</Link>
      </li>
    </ul>
  </nav>
};
