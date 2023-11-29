import React from "react";

function PlantCard({plant, setPlants, allPlants, setRenderedPlants}) {

  const [inStock, setInStock] = React.useState(true)
  const [price, setPrice] = React.useState(plant.price)
  

 
  function clickHandler(){
    setInStock(!inStock)
  }

  function priceChange(e){
    e.preventDefault()
    setPrice(e.target["new-price"].value)
    plant.price = e.target["new-price"].value

    const patchObj ={
      price : e.target["new-price"].value
    }

    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "PATCH",
      headers:{
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(patchObj)
    })


    e.target["new-price"].value = ""


  }

  function deleteHandler(){
    const afterDelete = allPlants.filter((ele) => {
     return  ele.id !== plant.id
    })

    fetch(`http://localhost:6001/plants/${plant.id}`,{
      method: "DELETE"
    })
    setPlants(afterDelete)
    setRenderedPlants(afterDelete)


  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <div>
      <p>Price: {price}</p>
      <form onSubmit={priceChange}>
        <input name="new-price" placeholder="New Price"/>
      <button >Confirm New Price</button>
      </form>
      </div>
      <div onClick={clickHandler}>
      {inStock ? (
        <button className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )
      }</div>
      <div>
        <button onClick={deleteHandler}>Delete Plant?</button>
      </div>
    </li>
  );
}

export default PlantCard;
