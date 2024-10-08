import React from 'react';
import Addcart from './Addcart';
const Nav = () => {
  return (
    <>

      <nav className="flex sm:justify-around ">
        <div className="flex  sm:h-5 sm:w-1/3 sm:relative left-11">
        </div>
        <div className="invisible sm:visible sm:flex w-2/3 m-2 justify-around items-center ">
          <span className="sm:invisible sm:h-8 sm:w-4 sm:material-symbols-outlined">
            menu
          </span>
          <div className="hidden sm:flex items-start gap-16">
            <p >Home</p>
            <p >About</p>
            <p >Coures</p>
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
      </div>
    </>
  );
};

export default Nav;