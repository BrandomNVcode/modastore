import React from 'react';



export const ItemOrder = () => {
    return (
        <div className="flex md:flex-row justify-start items-start md:items-center  border border-gray-200 w-full">
            <div className="w-64 md:w-32">
                <img className="blocK" src="https://i.ibb.co/wWp4m6W/Rectangle-8.png" alt="girl-in-red-dress" />
            </div>
            <div className="flex justify-start md:justify-between items-start md:items-center  flex-col md:flex-row w-full p-2 md:px-8">
                <div className="w-full flex flex-col justify-start items-start">
                    <h3 className="text-sm md:text-xl  w-full font-semibold md:leading-5  text-gray-800">Premium Quaility Red Dress</h3>
                    <div className="w-full flex flex-col justify-start items-start mt-2 gap-x-2">
                        <p className="text-sm leading-none text-gray-800">
                            Talla: <span className="text-gray-600">S</span>
                        </p>
                        <div className='flex flex-row items-center gap-x-2'>
                            <p className="text-sm leading-none text-gray-800">Cantidad:</p>
                            <span className="text-gray-600">1</span>
                            <div className='flex justify-center items-center'>
                                <button className='font-semibold w-8 bg-slate-200 rounded-l-xl border border-l-2 border-r-gray-300'>-</button>
                                <button className='font-semibold w-8 bg-slate-200 rounded-r-xl border border-r-2  border-l-gray-300'>+</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex mt-2 md:mt-0 md:justify-end items-center w-full gap-4">
                    <p className="text-base lg:text-2xl font-semibold leading-5 lg:leading-6 text-gray-400 line-through">$28.00</p>
                    <p className="text-base lg:text-2xl font-semibold leading-5 lg:leading-6 text-gray-800">$28.00</p>
                </div>
            </div>
        </div>
    )
}
