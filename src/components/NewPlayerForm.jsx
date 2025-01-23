import { useState, useEffect } from "react";
import { addPlayer, getTeams } from "../api";

export default function NewPlayerForm({addPlayer}) {
    // New Player Form Component
    const [name, setName] = useState("");
    const [team, setTeam] = useState("");
    const [breed, setBreed] = useState("");
    const [player,setPlayer] useState("")
    const [image, setImage] = useState(null);

  
    
    
    export default function PlayerForm({ refreshData }) {
      const [player, setPlayer] = useState({
        name: "",
        breed: "",
        imageUrl: "",
        status: "",
        teamId: "",
      });
    
      const [teams, setTeams] = useState([]);
    
      useEffect(() => {
        getTeams().then(setTeams);
      }, []);
    
      const handleChange = (e) => {
        setPlayer({ ...player, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        await addPlayer(player);
        setPlayer({ name: "", breed: "", imageUrl: "", status: "", teamId: "" });
        refreshData();
      };
    
      return (
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Name" value={player.name} onChange={handleChange} />
          <input name="breed" placeholder="Breed" value={player.breed} onChange={handleChange} />
          <input name="imageUrl" placeholder="Image URL" value={player.imageUrl} onChange={handleChange} />
          <select name="teamId" value={player.teamId} onChange={handleChange}>
            <option value="" disabled>Select a team</option>
            {teams.map((team) => (
              <option key={team.id} value={team.id}>{team.name}</option>
            ))}
          </select>
          <button type="submit">Submit</button>
        </form>
      );
    }