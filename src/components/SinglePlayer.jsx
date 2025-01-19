import React from 'react';

export default function SinglePlayer({ player }) {
    function handleDelete(){
        console.log (player)
    }
  return (
    <div id= playerinfo>
      <img src={player.imageUrl} />
      <h1>Name:{player.name}</h1>
      <h2>Breed:{player.breed}</h2>
      <h2>Status: {player.status}</h2>
      <button>Delete</button>
    </div>
  );
}
