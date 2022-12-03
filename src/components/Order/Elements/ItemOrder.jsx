import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeOrder, updateCantOrder } from '../../../redux/features/order/orderSlice';



export const ItemOrder = ({id, img, title, price, talla, cantidad}) => {


    const dispatch = useDispatch();

    const { orders } = useSelector(state => state.order);


    const handleDeleteOrder = () => {
        dispatch(removeOrder(id));
    }



    return (
        <div className="relative flex md:flex-row justify-start items-start md:items-center  border border-gray-200 w-full">
            <div className="w-64 md:w-32">
                <img className="blocK" src={img} alt={title} />
            </div>
            <div className="flex justify-start md:justify-between items-start md:items-center  flex-col md:flex-row w-full p-2 md:px-8">
                <div className="w-full flex flex-col justify-start items-start">
                    <h3 className="text-sm md:text-xl  w-full font-semibold md:leading-5  text-gray-800">{title}</h3>
                    <div className="w-full flex flex-col justify-start items-start mt-2 gap-x-2">
                        <p className="text-sm leading-none text-gray-800">
                            Talla: <span className="text-gray-600">{talla}</span>
                        </p>
                        <div className='flex flex-row items-center gap-x-2'>
                            <p className="text-sm leading-none text-gray-800">Cantidad:</p>
                            <span className="text-gray-600">{cantidad}</span>
                            <div className='flex justify-center items-center'>
                                <button className='font-semibold w-8 bg-slate-200 rounded-l-xl border border-l-2 border-r-gray-300'
                                        onClick={() => dispatch(updateCantOrder({id,cantidad: (cantidad-1) < 1? 1 : cantidad-1}))}
                                >-</button>
                                <button className='font-semibold w-8 bg-slate-200 rounded-r-xl border border-r-2  border-l-gray-300'
                                        onClick={() => dispatch(updateCantOrder({id,cantidad: cantidad+1}))}
                                >+</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex mt-2 md:mt-0 md:justify-end items-center w-full gap-4">
                    <p className="text-base lg:text-2xl font-semibold leading-5 lg:leading-6 text-gray-400 line-through">${(price*1.2*cantidad).toFixed(2)}</p>
                    <p className="text-base lg:text-2xl font-semibold leading-5 lg:leading-6 text-gray-800">${(price*cantidad).toFixed(2)}</p>
                </div>
            </div>

            <button type='button'
                    className='absolute top-0 right-0 w-5 h-5 p-0 pb-1 bg-red-300 rounded-sm cursor-pointer'
                    onClick={handleDeleteOrder}
            >
                <p className='text-xs text-white'>x</p>
            </button>
        </div>
    )
}
