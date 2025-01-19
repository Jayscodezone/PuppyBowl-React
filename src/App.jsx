import { BrowserRouter,Routes, Route } from "react-router-dom";
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
      <BrowserRouter>
      <div>
      <h1>Puppy Bowl React router</h1>
        <Routes>
          <Route path='/' element={<AllPlayers/>} />
          <Route path='/players/:id' element={<SinglePlayer />}/>
          <Route path='/newplayerform' element={<NewPlayerForm/>} />

        </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
