import React from "react";

function Search({plants, setRenderedPlants}) {

const [query, setQuery] = React.useState("")


  function changeHandler(e){
    setQuery(e.target.value)
    const newList = plants.filter((plant)=>{
      return plant.name.toLowerCase().includes(e.target.value.toLowerCase()) || query === ""
    })

    setRenderedPlants(newList)

  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        value={query}
        placeholder="Type a name to search..."
        onChange={changeHandler}
      />
    </div>
  );
}

export default Search;
