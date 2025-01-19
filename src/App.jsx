import { Routes, Route } from "react-router-dom";
import React from "react";
import AllPlayers from './components/AllPlayers';
import NewPlayerForm from './components/NewPlayerForm';
import SinglePlayer from './components/SinglePlayer';
import NavBar from './components/NavBar';
import './App.css'

function App() {
  <div>
    <h1> The Component </h1>
    <NavBar/>
    <AllPlayers />
    <NewPlayerForm />
    <SinglePlayer />
  </div>

  return (
    <>
      <div>
       
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>


      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AllPlayers/>} />
          <Route path='/players/:id'element={<SinglePlayer />}/>
        </Routes>
      </BrowserRouter>
    
  );
}

export default App
