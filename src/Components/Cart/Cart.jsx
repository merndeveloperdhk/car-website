import React from "react";

const Cart = (props) => {
    // const cart = props.cart option one
  const { cart } = props;  //second option and third function props এর জায়গায় props বাদ দিয়ে {cart} লিখে দিলেই হবে।
//   console.log(cart);
  let total = 0;
  let totalShiping = 0;

  for(const car of cart){
    total = total + car.price;
    totalShiping = totalShiping + car.shiping;
    console.log(car);
}
const tax = (total * 0.07).toFixed(2);
  const grandTotal = total + totalShiping + tax;

  return (
    <div className=" sticky top-[43px] ">
      <h2 className="mb-1 font-bold text-xl bg-red-500 text-white py-1  rounded-t-lg">
        Order Summery </h2>
      <div className="text-justify px-2 space-y-2">
      <p className="sticky top-[82px]">Selected cars: {cart.length}</p>
      <p><span className="font-semibold">Cars Name:</span>{cart.name}</p>
      <p><span className="font-semibold">Total Price:</span>$ {total}</p>
      <p><span className="font-semibold">Total Shipping: </span>$ {totalShiping}</p>
      <p><span className="font-semibold">Tax:</span>$ {tax} </p>
      <p><span className="font-semibold">Grand Total:</span>$ {grandTotal} </p>
      </div>
    </div>
  );
};

export default Cart;
