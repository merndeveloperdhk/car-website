import React from "react";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-10">
      <div className="header-container flex flex-col md:flex-row justify-between items-center bg-sky-300 px-5">
        
          <a  href="">Brand logo</a>
       
        <div className="menu">
          <ul className="flex gap-4 text-xl">
            <a href="/Home">Home</a>
          <a href="/Services">Services</a>
          <a href="/Products">Producs</a>
           <a href="/Contact us">contact us</a>
          </ul>
        </div>
        <div className="right flex gap-4">
          <button>log in</button>
          <button>Registration</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
