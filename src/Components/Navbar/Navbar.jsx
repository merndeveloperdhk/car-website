import React from "react";

const Navbar = () => {
  return (
    <div className="menuBar sticky top-0 z-10">
      <div className="header-container flex flex-col md:flex-row justify-between items-center bg-gray-200 px-5">
        
          <a  href="">Brand logo</a>
       
        <div className="menu">
          <ul className="flex gap-3 text-xl ">
            <a className="font-semibold hover:text-red-600" href="/Home">Home</a>
          <a className="font-semibold hover:text-red-600" href="/Services">Services</a>
          <a className="font-semibold hover:text-red-600" href="/Products">Producs</a>
           <a className="font-semibold hover:text-red-600" href="/Contact us">contact us</a>
          </ul>
        </div>
        <div className="reg right flex gap-4 font-bold">
          <button>log in</button>
          <button>Registration</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
