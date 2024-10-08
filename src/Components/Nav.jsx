import React from 'react';
import Addcart from './Addcart';
const Nav = () => {
  return (
    <>

      <nav className="flex sm:justify-around ">
        <div className="flex  sm:h-5 sm:w-1/3 sm:relative left-11">
          <img src="/src/assets/32027446_7889361.jpg" className='h-14  pl-10 mt-1' alt="" />
        </div>
        <div className="invisible sm:visible sm:flex w-2/3 m-2 justify-around items-center ">
          <span className="sm:invisible sm:h-8 sm:w-4 sm:material-symbols-outlined">
            menu
          </span>
          <div className="hidden sm:flex items-start gap-16">
            <p >Home</p>
            <p >About</p>
            <p >Products</p>
            <p >Contact</p>
          </div>
          <div className="flex gap-7 font-Saira">
            <span className="material-symbols-outlined hover:bg-gray-200 cursor-pointer hover:rounded-full" onClick={(e) => {

            }}>
              shopping_cart
            </span>
          </div>
        </div>


      </nav>

      <div
        className="h-12 sm:mt-4 sm:h-12 sm:z-0 bg-gradient-to-tr from-blue-500 from-15% via-violet-400 via-45% to-blue-400 to-90%">
        <div className='flex text-white justify-evenly pt-3 '>
          <p className='cursor-pointer'>jwalaris</p>
          <p className='cursor-pointer'>Men's Wear</p>
          <p className='cursor-pointer'>Woman's Wear</p>
          <p className='cursor-pointer'>Electronics</p>
        </div>

      </div>
    </>
  );
};

export default Nav;