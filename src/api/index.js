const cohortName = "2409-GHP-ET-WEB-PT";
const BASE_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

export function getPlayers(){
    try{
        console.long("getPlaters");
        const response = await fetch((`${BASE_URL}/players`);
        const json =await response.json();
        console.log(json);
        const result =json.data;
        return result.players; 
    }catch{
        console.log(getP)
    }

        
    }
}
function getPlayers (){
    console.log("getPlayers");
}


function addPlayer(){
console.log("addPlayers");
}
function deletePlayer (playerId){
    console.log("deletePlayers:$(playerID));
}