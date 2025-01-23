import { useEffect, useState } from "react";
import { useNavigate,useParams } from 'react-router-dom';
import { fetchPlayers } from "../api";

export default function SinglePlayer({}) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [singlePlayer, setSinglePlayer] = useState([]);
  const [error, setError]= useState (null);
  
  console.log("SinglePlayer ", singlePlayer);
  
  useEffect(() => {
    async function fetchSinglePlayer(){
      try {
        const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/player/${id}`);
        if (!response.ok) {
          throw new Error("Player not found");
        }
        const result = await response.json();
        setSinglePlayer(result); // Set the player data to the state
      } catch (error) {
        setError("Error fetching player");
        console.error("Error fetching player:", error);
      }
    }
    fetchSinglePlayer();
  }, [id]); 

 if (error) return <p>{error}</p>;
  if (singlePlayer=== null) return <p>Loading...</p>;

  return (
    <div id="SinglePlayer">
      <h1>Name: {singlePlayer.name}</h1>
      <h2>Breed: {singlePlayer.breed}</h2>
      <h2>Status: {singlePlayer.status}</h2>
      <img src={singlePlayer.imageUrl} alt={singlePlayer.name} />
      <button onClick={() => navigate('/')}>Back to All Players</button>
      {/* Uncomment and implement delete function when needed */}
      {/* <button onClick={handleDelete}>Delete</button> */}
    </div>
  );
}
