import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
  <nav className="grid grid-flow-col gap-4">
    <a className="link link-hover">Home</a> 
    <a className="link link-hover">Services</a> 
    <a className="link link-hover">Products</a> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">contact us</a>
  </nav> 
  <nav>
    <div className="grid grid-flow-col gap-4">
     <a href=""> <img className='w-6' src="https://i.ibb.co/BcnMwj7/facebook.png" alt="" /></a>
      <a href=""><img className='w-6' src="https://i.ibb.co/232GcQN/twitter.png" alt="" /></a> 
      <a href=""><img className='w-6' src="https://i.ibb.co/5sh0mdm/insta.png" alt="" /></a>
      <a href=""><img className='w-6' src="https://i.ibb.co/PWb4STT/react.png" alt="" /></a>
      <a href=""><img className='w-6' src="https://i.ibb.co/VV2FGZn/nodejs.png" alt="" /></a>
     
     
    </div>
  </nav> 
  <aside>
    <p>Copyright © 2023 - All right reserved by M M Groups</p>
  </aside>
</footer>
        </div>
    );
};

export default Footer;