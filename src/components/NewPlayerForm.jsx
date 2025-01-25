import { useState, useEffect } from "react";
import { addNewPlayer, fetchTeams } from "../api";
import { useNavigate } from "react-router-dom";

export default function PlayerForm() {
  const [player, setPlayer] = useState({
    name: "",
    breed: "",
    imageUrl: "",
    teamId: "",
  });

  const [teams, setTeams] = useState([]);
  const navigate= useNavigate()

  useEffect(() => {
    fetchTeams().then(setTeams);
  }, []);

  const handleChange = (e) => {
    setPlayer({ ...player, [e.target.name]: e.target.value })
  };

  const handleSubmit = async (e) => {
  //  e.preventDefault();
    await addNewPlayer(player.name,player.breed,player.imageUrl,player.teamId);
    setPlayer({ name: "", breed: "", imageUrl: "", teamId: "" });
    navigate("/")
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Name"
        value={player.name}
        onChange={handleChange}
      />
      <input
        name="breed"
        placeholder="Breed"
        value={player.breed}
        onChange={handleChange}
      />
      <input
        name="imageUrl"
        placeholder="Image URL"
        value={player.imageUrl}
        onChange={handleChange}
      />
      <select name="teamId" value={player.teamId} onChange={handleChange}>
        <option value="" disabled>
          Select a team
        </option>
        {teams.map((team) => (
          <option key={team.id} value={team.id}>
            {team.name}
          </option>
        ))}
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}
