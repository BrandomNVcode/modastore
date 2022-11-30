import React from 'react';
import { useNavigate } from 'react-router-dom';


export const ProductCard = ({id, name, img, price, nColor, gen}) => {

    const navegacion = useNavigate();

    return (
        <div className="block cursor-pointer" onClick={() => navegacion(`/product/${gen}/${id}`)}>
            <div className="flex justify-center">
                <strong className="relative h-6 bg-gray-400 px-4 text-xs uppercase leading-6 text-white">
                    -20%
                </strong>
            </div>

            <img alt={name}
                src={img}
                className="-mt-3 h-[350px] w-full object-cover sm:h-[450px]"
            />

            <h3 className="mt-4 text-base text-gray-700">{name}</h3>

            <div className="mt-4 flex items-center justify-between font-medium">
                <div className='flex'>
                    <p className='mr-4'>${price.toFixed(2)}</p>
                    <p className='line-through text-gray-500'>${(price*1.2).toFixed(2)}</p>
                </div>

                <p className="text-xs uppercase tracking-wide">{nColor} Colores</p>
            </div>
        </div>
    )
}
