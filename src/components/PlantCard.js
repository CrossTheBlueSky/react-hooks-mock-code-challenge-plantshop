import React from "react";

function PlantCard({plant}) {

  const [inStock, setInStock] = React.useState(true)
  function clickHandler(){
    setInStock(!inStock)
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      <div onClick={clickHandler}>
      {inStock ? (
        <button className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )
      }</div>
    </li>
  );
}

export default PlantCard;
