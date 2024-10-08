import Addcart from './Addcart';
import React, { useEffect, useState } from 'react';
import "./CompA.css"


const Homepage = () => {
  const [data, setdata] = useState([""]);
  const [price, setPrice] = useState(0);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [id, setId] = useState(0)
  // async function apicall() {

  //   const result=await

  function AddCartUpdate(listid, newtitle, newImage, newPrice) {
    if (!listid || !newtitle || !newImage || !newPrice) {
      console.warn("Incomplete item data passed to AddCartUpdate");
      return; // Skip if any required data is missing
    }
    setId(listid)
    setTitle(newtitle)
    setImage(newImage)
    setPrice(newPrice)

  }



  function apicall() {

    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(json => setdata(json))
      .catch(error => (error))
    // console.log(data)
  }


  useEffect(() => {
    apicall();
    // console.log(data);

  }, [])


  const increment = (id, quantity) => {
    setdata(curval => {
      return curval.map((res))
      if (res.id === id) {
        return { ...res, quantity: (res.quantity + 1 || quantity + 1) }

      }
    })
  }

  return (
    <>
      { }


      <Addcart price={price} id={id} image={image} title={title} />
      <div className='flex justify-center relative'>
        <div className='grid sm:grid-cols-4 gird-cols-1 gap-12 place-content-center'>

          {data.map((list, index) => (

            <div key={index} className="border p-2 h-96 w-72 shadow-xl grid gap-1 font-Righteous place-content-center">
              <div className='flex justify-center'>
                <img src={list.image} className="h-40 w-fit flex bg-cover" />
              </div>
              <p className="text-base">{list.title}</p>
              <span className='flex'>
                <p className='text-lg'>$</p>
                <p className="text-green-800 text-xl">{list.price}</p>
              </span>
              <p className='text-lg font-bold'>{list.category}</p>
              <div className='flex justify-center'>
                {/* // add to cart button here*/}
                <button onClick={() => {
                  AddCartUpdate(list.id, list.title, list.image, list.price,);
                }}
                  className='w-40 h-8 bg-yellow-400 rounded-lg active:bg-white active:text-yellow-500'>ADD TO CART</button>
              </div>
            </div>

          ))}

        </div>
      </div>

    </>
  );

}
export default Homepage;