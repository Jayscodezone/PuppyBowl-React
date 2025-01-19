import React from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import { fetchSinglePlayer } from '../API';

export default function SinglePlayer({ player }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [player, setPlayer] = useState(null);
  useEffect(() => {
    const getPlayer = async () => {
      const playerData = await fetchSinglePlayer(id);
      setPlayer(playerData);
    };
    getPlayer();
  }, [id]);
    //function handleDelete(){
        //console.log (player)
    }
  return (
    <div id= "player">
      <h1>Name:{player.name}</h1>
      <h2>Breed:{player.breed}</h2>
      <h2>Status: {player.status}</h2>
      <img src={player.imageUrl} />
      <button onClick={() => navigate('/')}>Back to All Players</button>
      //<button>Delete</button>
    </div>
  );

