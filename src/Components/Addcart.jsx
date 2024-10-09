import React, { useState, useEffect } from 'react';
import Nav from './Nav';
const Addcart = (props) => {

    const [data, setdata] = useState([]);
    const [isPresent, setisPresent] = useState(false);


    useEffect(() => {
        const addKeyValue = () => {
            const foundItem = data.find(item => item.id === props.id);

            if (foundItem) {
                alert("already present");
                setisPresent(true);
            } else {
                console.log("product added");
                setisPresent(false);
                setdata(prevData => [...prevData, {
                    id: props.id,
                    title: props.title,
                    price: props.price,
                    image: props.image,
                    quantity: 1
                }]);
            }
        };

        addKeyValue();

    }, [props.id, props.title, props.price, props.image]);

    function updatequantuity(newQuantity, itemid) {
        let updatedData = data.map((object) => {
            if (object.id === itemid) {
                return { ...object, quantity: newQuantity };
            }
            return object;
        })
        setdata(updatedData);
    }


    function incrementquan(itemid) {
        const targetObject = data.find(object => object.id === itemid)

        let newQuantity = targetObject.quantity + 1
        updatequantuity(newQuantity, itemid)
    }
    function decrementquan(itemid) {
        const targetObject = data.find(object => object.id === itemid)
        if (targetObject.quantity > 1) {
            let newQuantity = targetObject.quantity - 1
            updatequantuity(newQuantity, itemid)
        }

    }





    // create increment and decrement functionality for product quantity 

    useEffect(() => {
        console.log(data);  // Logs the updated data
    }, [data]);

    for (let i = 0; i < data.length; i++) {



    }


    return (
        <>
            <div className='Addcart fixed z-20 w-96 h-[100vh] right-0 invisible border border-black bg-white overflow-scroll'>
                {data.map((item, index) => (
                    item.id && item.title && item.image && item.price ? (
                        <div key={index} className=''>
                            <div className='grid m-2 gap-4 '>
                                <div className="shadow-xl h-32">
                                    <p className='flex gap-6'>
                                        <img src={item.image} class="h-28 w-28" alt="" />
                                        <div>
                                            <p>{item.title}</p>

                                            <p className='flex justify-center '>
                                                <p className='text-xl text-green-700'>${item.price}</p>
                                            </p>
                                            <div className='flex justify-center mt-2 gap-6'>


                                                <button className='border border-black bg-gray-300 rounded-xl w-16  active:bg-gray-200 hover:shadow-xl hover:bg-gray-400'
                                                    onClick={() => {
                                                        decrementquan(item.id)
                                                    }}

                                                >-</button>
                                                <p>{item.quantity}</p>
                                                <button className='border border-black bg-gray-300 rounded-xl w-16 active:bg-gray-200 hover:shadow-xl hover:bg-gray-400'
                                                    onClick={() => {
                                                        incrementquan(item.id)

                                                    }}
                                                >+</button>
                                            </div>
                                        </div>
                                    </p>
                                </div>

                                {/* <div class="shadow-xl h-32 cart">
                                    <p class="flex gap-6">
                                        <img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" class="h-28 w-28" alt="" />
                                        <div>
                                            <div className='flex gap-5'>
                                                <p>Mens Cotton Jacket</p>
                                                <button className='border hover:bg-red-500 rounded-full w-7' onClick={() => {
                                                    const card = document.querySelector(".cart")
                                                    card.remove()
                                                }}>x</button>
                                            </div>

                                            <p class="flex justify-center ">
                                                <p class="text-xl text-green-700">55.99</p>
                                            </p>
                                            <div class="flex justify-center mt-2 gap-6">
                                                <button class="border border-black bg-gray-300 rounded-xl w-16  active:bg-gray-200 hover:shadow-xl hover:bg-gray-400">-</button>
                                                <button class="border border-black bg-gray-300 rounded-xl w-16 active:bg-gray-200 hover:shadow-xl hover:bg-gray-400">+</button>
                                            </div>
                                        </div>
                                    </p>
                                </div>*/}


                            </div>


                        </div>

                    ) : null
                ))}

            </div>



        </>
    )
}

export default Addcart;

