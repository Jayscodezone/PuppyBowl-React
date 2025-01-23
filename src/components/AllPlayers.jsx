import React, { useEffect, useState } from 'react';
import {useEffect,useState} from "react";
import { getPlayerDetails } from "../api"; // Assuming this API call is correct
import { deletePlayer } from "./index"; // Assuming delete function is needed
import NewPlayerForm from ./components/NewPlayerForm.jsx

export default function AllPlayers(){
const [players, setPlayers] =useState([]);
const [selectedPlayer, setSelectedPlayer] = useState(null); 
const [error, setError] = useState(null);

useEffect(() => {
 const getPlayers = async () => {
     try {
   const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/players");
     if (!response.ok) {
     throw new Error("Failed to fetch players");
        }
   const result = await response.json();
    setPlayers(result);
     } catch (error) {
      setError("Error fetching players");
       console.error("Error fetching players", error);
     }
   };

  getPlayers();
  }, []);


   // Handle selecting a player
   const handlePlayerClick = (playerId) => {
    const player = players.find((p) => p.id === playerId);
    setSelectedPlayer(player); // Set the selected player
  };

  // Handle going back to the list of players
  const handleBackClick = () => {
    setSelectedPlayer(null); // Deselect the player
  };

  if (error) {
    return <div>{error}</div>; // Display error message
  }

  return (
    <div>
      {selectedPlayer ? (
        <div>
          <h2>{selectedPlayer.name}</h2>
          <p>{selectedPlayer.details}</p>
          <button onClick={handleBackClick}>Back to All Players</button>
        </div>
      ) : (
        <div>
          <h1>All Players</h1>
          <ul>
            {players.map((player) => (
              <li key={player.id} onClick={() => handlePlayerClick(player.id)}>
                {player.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
          
//useEffect(() => {
    //async function getData() {
       // const playerData = await getPlayers(); // Fetch player data
       // setPlayers(playerData); // Update state
       
    //    console.log(playerData);    
 //  }catch (error){
   //     console.error("Error fetching players");
   // }
//}

  //  getData(); // Call the function
//},[]);

//return (
  //  players.map(player =>{
    //}

      //  <SinglePlayer player ={players[0]}/>
     //   <SinglePlayer player ={players[1]}/>
     //   <SinglePlayer player ={players[2]}/>
 //   );


