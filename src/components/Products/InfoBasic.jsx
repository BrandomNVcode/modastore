import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './product.css';

import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import { addOrder } from '../../redux/features/order/orderSlice';
import { sesion } from '../../helpers/sesion';



export const InfoBasic = ({item}) => {


    const dispatch = useDispatch();
    const navegacion = useNavigate();

    const { orders } = useSelector(state => state.order);
    const incluido = orders.find(order => (order.id === item.id) && (order.for === item.for));

    const handleAddCart = () => {
        if(!incluido && sesion()) {
            dispatch(addOrder({
                id: item.id,
                for: item.for,
                category: item.category,
                name: item.name,
                price: item.price,
                color: item.types[0].color,
                img: item.types[0].img[0],
                talla: 'S',
                cant: 1
            }))
        }
    }


    const style = {
        color: '#F08080'
    }

    const styleNoInclude = {
        color: '#C5C8C8'
    }

    const styleSearch = {
        color: '#A569BD'
    }


    return (
        <div>
            <div className='info-basic rounded-xl flex justify-center items-center flex-col mx-auto relative'>

                <div className='absolute top-4 right-4 flex justify-center flex-col gap-3'>
                    <div onClick={handleAddCart} 
                        className='fav cursor-pointer p-2 bg-white shadow-lg rounded-full hover:bg-yellow-200'>
                        <FavoriteIcon fontSize='medium' style={!incluido? style : styleNoInclude}/>
                    </div>
                    <div
                        onClick={() => navegacion(`/product/${item.for}/${item.id}`)}
                        className='favSearch cursor-pointer p-2 bg-white shadow-lg rounded-full hover:bg-yellow-100'>
                        <SearchIcon fontSize='medium' style={styleSearch}/>
                    </div>
                </div>

                <span className='absolute top-4 left-4 bg-yellow-100 rounded-xl text-base font-semibold text-blue-700 px-2 shadow-lg'>${item.price.toFixed(2)}</span>
                <span className='absolute top-12 left-4 rounded-xl text-base font-semibold text-gray-500 px-2 shadow-lg line-through'>${(item.price*1.2).toFixed(2)}</span>

                <img src={item.types[0].img[0]} alt={item.name}
                     className='w-full p-2 h-full rounded-3xl'
                />

                <div className='absolute mx-8 bottom-0 mb-8 flex justify-center items-center flex-col'>
                    <h3 className='font-mono font-bold text-center text-base mb-2 text-stone-500'>{item.name}</h3>
                    {/*<button className='bg-slate-400 px-4 py-2 rounded-full text-white font-mono'>Comprar ahora</button>*/}
                </div>
            </div>
        </div>
    )
}
