import {useState,useEffect} from 'react' ;
import {useParams,useNavigate} from "react-router-dom";
import {getPlayerDetails,removePlayer} from "../api";


export default function PlayerDetails(){
const [player, setPlayer] = useState(null)
const navigate =useNavigate()
const {id} = useParams()

useEffect(()=>{
  const getSinglePlayer =async ()=>{  
      const playerInfo = await getPlayerDetails(id)
      setPlayer(playerInfo)
    }
  getSinglePlayer();
}, [])

const handleDelete = () =>{
removePlayer(id)
alert("Player was removed ")
navigate("/")
}

  return(
    <>
    {player && (<><img src={player.imageUrl} alt={`${player.name}'s image`} />
      <h1>{player.name}</h1>
      <h2>Breed: {player.breed}</h2>
      <h2>Status: {player.status}</h2>
      {player.team && (
        <div>
          <h2>Team: {player.team.name}</h2>
          {player.team.players.map((teamPlayer) => (
            <h3 key={teamPlayer.id}>{teamPlayer.name}</h3>
          ))}
        </div>
      )}
      <button onClick={() => handleDelete()}>Delete</button>
      <button onClick={() => navigate("/")}>Back</button></>)}

    </>
  );
}



















