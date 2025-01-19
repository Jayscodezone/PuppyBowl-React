import SinglePlayer from "./SinglePlayer";
import {useEffect,useState} from "react";
import {fetchPlayers} from "../src/api";
import React from 'react';


export default function AllPlayers(){
const [players, setPlayers] =useState([]);

useEffect(() => {
    const getPlayers = async () => {
        try {
            const playersData = await fetchPlayers();
            setPlayers(playersData);
            console.log(playersData);
          } catch {
            console.log("Error fetching players");
          }
      };
        getPlayers();
      }, []);
    
  return (
    <div id= "AllPlayers">
      <h2>The AllPlayers Component</h2>
      <div>
        {players.map(player => (
          <div key={player.id}>
          <h4>{player.name}</h4>
            <p>ID: {player.id}</p>
            <p>Additional Info: {player.info || 'N/A'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

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


