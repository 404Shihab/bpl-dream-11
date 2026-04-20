import React from 'react';
import dollarImg from '../../assets/Currency.png'
import logo from '../../assets/logo.png'

const NavBar = ({coin}) => {
    return (

  <div className="navbar bg-base-100 shadow-sm container mx-auto">
  <div className="flex-none">
  </div>
  <div className="flex-1">
    <a className="">
      <img src={logo} alt="" />
    </a>
  </div>
  <div className="flex-none">
    <button className="flex justify-between items-center gap-2 font-bold text-xl">
        {coin} Coin
        <img src={dollarImg} alt="" />
    </button>
  </div>
</div>
    );
};

export default NavBar;