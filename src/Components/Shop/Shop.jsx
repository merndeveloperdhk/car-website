import Car from '../Car/car';
import Cart from '../Cart/Cart';
import './Shop.css'
import React, { useEffect, useState } from 'react';


const Shop = () => {
    const [cars, setCars] = useState([]);
    const [cart, setCart] = useState([]);
    

    useEffect(() => {
        fetch('cars.json')
        .then(res => res.json())
        .then(data => setCars(data))
    },[])
    //   handle button add to cart
const handleAddToCart = (car) => {
    const newCart = [...cart, car];
    setCart(newCart)
    
}

    return (
        <div>
            <div className="shop-container mt-5   ">
                <div className="product-container grid grid-cols-1 md:grid-cols-3 gap-3 mx-8">
                    {
                        cars.map(car => <Car
                             key={car.id}
                             car = {car}
                             handleAddToCart ={handleAddToCart}
                             

                             ></Car>)
                    }
                </div>
                {/* Right side cart section */}
                <div className="cart bg-sky-300 min-h-full rounded-lg ">
                   <Cart 
                   cart = {cart}
                   
                   ></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;