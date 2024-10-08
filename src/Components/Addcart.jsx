import React, { useState, useEffect } from 'react';

const Addcart = (props) => {
    const [data, setdata] = useState([false]);
    const [isPresent, setisPresent] = useState(true);

    useEffect(() => {
        const addKeyValue = (isPresent) => {

            for (let i = 0; i < data.length; i++) {
                if (data[i].id === props.id) {
                    console.log(data[i].id + " " + props.id);
                    setisPresent(true);
                    alert("Already have a product");
                    break;
                }
                else {
                    setisPresent(false);
                }
            }
            console.log(isPresent);
            console.log(typeof (isPresent));

            if (isPresent === false) {
                setdata(data => [...data, {
                    id: props.id,
                    title: props.title,
                    price: props.price,
                    image: props.image,

                }],
                )
            } else if (isPresent === true) {
                setisPresent(false);
            }
            console.log(data);
        }

        addKeyValue(isPresent);

    }, [props.id])

    return (
        <>

            <div className='Addcart fixed  z-20 w-96 h-[100vh] right-0 border border-black bg-white overflow-scroll'>
                {data.map((item, index) => (

                    <div key={index} className=''>
                        <div className='grid m-2 gap-4 '>
                            <div className="shadow-xl h-32">
                                <p className='flex gap-6'>
                                    <img src={item.image} class="h-28 w-28" alt="" />
                                    <div>
                                        <p>{item.title}</p>
                                        <p className='flex justify-center '>
                                            <p className='text-xl text-green-700'>{item.price}</p>
                                        </p>
                                        <div className='flex justify-center mt-2 gap-6'>
                                            <button className='border border-black bg-gray-300 rounded-xl w-16 active:bg-gray-200 hover:shadow-xl hover:bg-gray-400'>+</button>

                                            <button className='border border-black bg-gray-300 rounded-xl w-16  active:bg-gray-200 hover:shadow-xl hover:bg-gray-400'>-</button>
                                        </div>
                                    </div>
                                </p>
                            </div>

                            {/* <div class="shadow-xl h-32"><p class="flex gap-6">
                                <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" class="h-28 w-28" alt="" />
                                <div><p>Mens Casual Premium Slim Fit T-Shirts </p>
                                    <p class="flex justify-center "><p class="text-xl text-green-700">22.3</p></p>
                                    <div class="flex justify-center mt-2 gap-6">
                                        <button class="border border-black bg-gray-300 rounded-xl w-16 active:bg-gray-200 hover:shadow-xl hover:bg-gray-400">+</button>
                                        <button class="border border-black bg-gray-300 rounded-xl w-16  active:bg-gray-200 hover:shadow-xl hover:bg-gray-400">-</button>
                                    </div>
                                </div>
                            </p>
                            </div> */}

                        </div>
                    </div>

                ))}

            </div>



        </>
    )
}

export default Addcart;

