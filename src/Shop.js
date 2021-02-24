import React from "react";
import "./Shop.css";
import { useStateValue } from "./StateProvider";

function Shop({ id, title, description, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket =() => {
    // dispatch the item into the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        description: description,
        image: image,
        price: price,
        rating: rating,
      },
    })
  }

  return (
    <div className="shop">
    <div className="shop-item__front">
      <div className="top"> 
      <div className="designs"> 
      <img src={image} alt="" />
        </div>
      </div>
    </div>
    <div className="shop-item__back">
            <div className="shop-item__back__title">{title}</div>
            <div className="shop-item__back__description">{description}</div>
            <div className="shop-item__back__price">${price}</div>
            <button onClick={addToBasket}>Add to Basket</button>
            {/* <div className="shop-item__back__quantity" quantity={1} /> */}
    </div>
  </div>  
     
  );
  }

export default Shop;
