import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPlayers } from "../api";
import NewPlayerForm from "./NewPlayerForm";
import SearchBar from "./SearchBar";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const[filteredPlayers,setFilteredPlayers]= useState (null);
  

  useEffect(() => {
  const getAllPlayers =async ()=>{  
    const playerList = await getPlayers()
    setPlayers(playerList)
  }
getAllPlayers();
  }, []);

  useEffect(()=>{
if (searchTerm){ 
  setFilteredPlayers(players.filter((player)=>player.name.toLowerCase().includes(searchTerm.toLowerCase())))
}else{
  setFilteredPlayers(null);
}
  },[searchTerm,players])


  // Handle selecting a player
  const handlePlayerClick = (id) => {
    navigate(`/players/${id}`);
  };

  if (error) {
    return <div>{error}</div>; // Display error message
  }

  return (
    <div>
      <div>
        <h1>All Players</h1>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <ul>
          {filteredPlayers ? filteredPlayers.map((player) => (
            <li key={player.id} onClick={() => handlePlayerClick(player.id)}>
              {player.name}
            </li>
          )) : players.map((player) => (
            <li key={player.id} onClick={() => handlePlayerClick(player.id)}>
              {player.name}
            </li>
          ))} 
        </ul>
       < NewPlayerForm/>
      </div>
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
