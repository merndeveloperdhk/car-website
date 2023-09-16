import Car from '../Car/car';
import './Shop.css'
import React, { useEffect, useState } from 'react';

const Shop = () => {
    const [cars, setCart] = useState([]);
    useEffect(() => {
        fetch('cars.json')
        .then(res => res.json())
        .then(data => setCart(data))
    },[])
    return (
        <div>
            <div className="shop-container mt-5 ">
                <div className="product-container grid grid-cols-1 md:grid-cols-3 gap-3 mx-16">
                    {
                        cars.map(car => <Car
                             key={car.id}
                             car = {car}
                             ></Car>)
                    }
                </div>
                <div className="cart bg-green-300">
                    <h2>Order summery</h2>
                </div>
            </div>
        </div>
    );
};

export default Shop;