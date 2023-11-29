import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = React.useState([])
  const [renderedPlants, setRenderedPlants] = React.useState([])
  
  React.useEffect(()=>getPlants(), [])

  function getPlants(){
    fetch("http://localhost:6001/plants")
    .then(r=>r.json())
    .then(data=>{
      setPlants(data)
      setRenderedPlants(data)
    })
  }

  return (
    <main>
      <NewPlantForm plants={plants} setPlants={setPlants} setRenderedPlants={setRenderedPlants}/>
      <Search plants={plants} setRenderedPlants={setRenderedPlants}/>
      <PlantList plants={renderedPlants} setPlants={setPlants} setRenderedPlants={setRenderedPlants}/>
    </main>
  );
}

export default PlantPage;
