

const cohortName = "2409-GHP-ET-WEB-PT";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

export async function getPlayers() {
  try {
    const response = await fetch(`${API_URL}/players`);
    const json = await response.json();
    return json.data.players;
  } catch (error) {
    console.error("Error fetching players:", error);
  }
}

export async function getPlayerDetails(id) {
  try {
    const response = await fetch(`${API_URL}/players/${id}`);
    const json = await response.json();
    return json.data.player;
  } catch (error) {
    console.error(`Error fetching details for player #${id}:`, error);
  }
}

export const addNewPlayer = async (name, breed, url, team) => {
  try {
    const response = await fetch(`${API_URL}/players`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        breed: breed,
        imageUrl: url,
        teamId: team
      }),
    }); 

    if (!response.ok) {
      throw new Error(`Failed to add player: ${response.status}`);
    }

    const result = await response.json();
    console.log("New player added:", result);
    return result;
  } catch (error) {
    console.error("Error adding a new player");
  }
};

export const removePlayer = async (playerId) => {
  try {
    const response = await fetch(`${API_URL}/players/${playerId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Unable to delete player due to HTTP error ${response.status}`);
    }

    console.log(`Player #${playerId} has been removed successfully from roster.`);
    return await response.json();
  } catch (error) {
    console.error(`Error removing player #${playerId}:`, error);
  }
};

export const fetchTeams = async () => {
  try {
    const response = await fetch(`${API_URL}/teams`);
    const json = await response.json();
    if (!json.success) {
      throw new Error("Failed to fetch teams");
    }
    return json.data.teams;
  } catch (error) {
    console.error("Error fetching teams:", error);
  }
};


 
  
//export function getPlayers(){
  //  try{
     //   console.long("getPlaters");
      //  const response = await fetch((`${BASE_URL}/players`);
      //  const json =await response.json();
      //  console.log(json);
       // const result =json.data;
       // return result.players; 
   // }catch{
       // console.log(getP)
  //  }

        
    //}
//}
//function getPlayers (){
   // console.log("getPlayers");
//}


////function addPlayer(){
//console.log("addPlayers");
//}
//function deletePlayer (playerId){
  //  console.log("deletePlayers:$(playerID));
//}