import { createRoot } from 'react-dom/client';
import App from "./App.jsx";



const cohortName = "2409-GHP-ET-WEB-PT";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

export async function getPlayers(){
  try{
    const response = await fetch (`${API_URL}/players`,);
    const json = await response.json();
    const result = json.data;
    return result.players;
  } catch{
    console.error("Error Fetching players");
  }
  }



  export async function getPlayerDetails(id) {
    try {
      const response = await fetch(`${API_URL}/players/${playerid}`);
      const json = await response.json();
      const result = json.data;
      return result.player;
    } catch (error) {
      console.error("Error fetching player details");
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
    } catch (err) {
      console.error("Error in adding a new player:", err);
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
        throw new Error(`Unable to delete player due to HTTP Error ${response.status}`);
      }
  
      console.log(`Player #${playerId} has been removed successfully from roster.`);
      return await response.json();
    } catch (error) {
      console.error(`Whoops, trouble removing player #${playerId} from the roster!`, error);
    }
  };
 
 export const fetchTeams =  async () => {
    try {
    
      const promise = await fetch(`${API_URL}/teams`);
      const response = await promise.json();
      if (!response.success) {
        throw new Error("Failed to fetch players");
      }
      import { createRoot } from 'react-dom/client';
      import App from "./App.jsx";
      
      
      
      const cohortName = "2409-GHP-ET-WEB-PT";
      const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;
      
      export async function getPlayers(){
        try{
          const response = await fetch (`${API_URL}/players`,);
          const json = await response.json();
          const result = json.data;
          return result.players;
        } catch{
          console.log(error);
        }
        }
      
        export async function getPlayerDetails(id) {
          try {
            const response = await fetch(`${API_URL}/players/${playerid}`,);
            const json = await response.json();
            const result = json.data;
            return result.player;
          } catch (error) {
            console.log(error);
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
          } catch (err) {
            console.error("Error in adding a new player:", err);
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
              throw new Error(`Unable to delete player due to HTTP Error ${response.status}`);
            }
        
            console.log(`Player #${playerId} has been removed successfully from roster.`);
            return await response.json();
          } catch (error) {
            console.error(`Whoops, trouble removing player #${playerId} from the roster!`, error);
          }
        };
       
       export const fetchTeams =  async () => {
          try {
          
            const promise = await fetch(`${API_URL}/players`);
            const response = await promise.json();
            if (!response.success) {
              throw new Error("Failed to fetch players");
            }
            state.players = response.data.players;
            return response.data.players;
          } catch (error) {
            console.log("Uh oh, trouble fetching players!");
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