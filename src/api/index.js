const cohortName = "2409-GHP-ET-WEB-PT";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

export const fetchPlayers = async () => {
    try {
      const response = await fetch('https://api.example.com/players');
      if (!response.ok) {
        throw new Error('Failed to fetch players');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching players:', error);
      return [];
    }
  };

  export const fetchSinglePlayer = async (id) => {
    try {
      const response = await fetch(`https://api.example.com/players/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch player');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching player:', error);
      return null;
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