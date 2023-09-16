import React from "react";

const Car = (props) => {
  console.log(props);
  const { name, image, price, manufacturer, ratings } = props.car;
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img className="w-full h-56"
            src={image}
            alt=""
          />
        </figure>
        <div className=" ">
          <h2 className=" text-center text-2xl font-bold">{name}</h2>
          <h1 className="text-xl">Manufacturar: {manufacturer}</h1>
          <div className="flex justify-between text-green-600 text-xl font-semibold">
            <p>$ {price}</p>
            <p>Ratings: {ratings}</p>
          </div>
        </div>
        <button className="btn btn-info w-full hover:bg-green-600">Add to cart</button>
      </div>
    </div>
  );
};

export default Car;
