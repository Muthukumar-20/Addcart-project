import React, { useState, useEffect } from 'react';

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
                    image: props.image
                }]);
            }
        };

        addKeyValue();

    }, [props.id, props.title, props.price, props.image]);

    // create increment and decrement functionality for product quantity 

    useEffect(() => {
        console.log(data);  // Logs the updated data
    }, [data]); 
    return (
        <>

            <div className='Addcart fixed  z-20 w-96 h-[100vh] right-0 border border-black bg-white overflow-scroll'>
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
                                            <p className='text-xl text-green-700'>{item.price}</p>
                                        </p>
                                        <div className='flex justify-center mt-2 gap-6'>
                                            <button className='border border-black bg-gray-300 rounded-xl w-16 active:bg-gray-200 hover:shadow-xl hover:bg-gray-400'>+</button>

                                            <button className='border border-black bg-gray-300 rounded-xl w-16  active:bg-gray-200 hover:shadow-xl hover:bg-gray-400'>-</button>
                                        </div>
                                    </div>
                                </p>
                            </div>


                        </div>
                    </div>

                ):null
            ))}

            </div>



        </>
    )
}

export default Addcart;

