import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Car = (props) => {
  const { name, image, price, manufacturer, ratings } = props.car;
    const handleAddToCart= props.handleAddToCart;

  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img className="w-full h-56"
            src={image}
            alt=""
          />
        </figure>
        <div className="px-2 my-2 ">
          <h2 className=" text-center text-2xl font-bold">{name}</h2>
          <h1 className="text-xl my-2">Manufacturar: {manufacturer}</h1>
          <div className="flex justify-between text-green-600 text-xl font-semibold">
            <p>$ {price}</p>
            <p>Ratings: {ratings} Star</p>
          </div>
        </div>
          <button onClick={()=>handleAddToCart(props.car)} className="btn btn-info w-full hover:bg-green-600 hover:text-white">
            Add to cart
            <FontAwesomeIcon icon={faShoppingCart} />
            </button>  
      </div>
    </div>
  );
};

export default Car;
