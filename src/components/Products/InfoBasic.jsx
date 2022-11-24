import React from 'react';
import './product.css';

import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';



export const InfoBasic = ({item}) => {


    const style = {
        color: '#F08080'
    }

    const styleSearch = {
        color: '#A569BD'
    }


    return (
        <div>
            <div className='info-basic rounded-xl flex justify-center items-center flex-col mx-auto relative'>

                <div className='absolute top-4 right-4 flex justify-center flex-col gap-3'>
                    <div className='fav cursor-pointer p-2 bg-white shadow-lg rounded-full hover:bg-yellow-200'>
                        <FavoriteIcon fontSize='medium' style={style}/>
                    </div>
                    <div className='favSearch cursor-pointer p-2 bg-white shadow-lg rounded-full hover:bg-yellow-100'>
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
