import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, setPlants, setRenderedPlants}) {
 
  const allPlants = plants.map((plant)=>{
    return (
      <PlantCard key={plant.id} plant={plant} setPlants={setPlants} allPlants={plants} setRenderedPlants={setRenderedPlants}/>
    )
  })

  return (
    <ul className="cards">{allPlants}</ul>
  );
}

export default PlantList;
