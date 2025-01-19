export default function NewPlayerForm() {
    // New Player Form Component
    const [player, setPlayer] = useState({
        name: '',
        breed: '',
        team: '',
      });
    
    // form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPlayer((prevPlayer) => ({
      ...prevPlayer,
      [name]: value,
    }));
  };
 // form submission
 const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Player Added:', player);
    setPlayer({ name: '', breed: '', team: '' }); // Reset form AFTER SUBMIT
  };

    return (
      <div>
        <h2>NewPlayerForm Component</h2>
        <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={player.name}
            onChange={handleInputChange}
            required
          />
         </div>
        <div>
          <label htmlFor="breed">Breed:</label>
          <input
            type="text"
            id="breed"
            name="breed"
            value={player.breed}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="team">Team:</label>
          <input
            type="text"
            id="team"
            name="team"
            value={player.team}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Add Player</button>
      </form>
    </div>
  );
}