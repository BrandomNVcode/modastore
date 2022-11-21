import React from 'react';


export const ProductCard = () => {
    return (
        <div className="block cursor-pointer">
            <div className="flex justify-center">
                <strong className="relative h-6 bg-gray-400 px-4 text-xs uppercase leading-6 text-white">
                    -20%
                </strong>
            </div>

            <img alt="title"
                src="img/polo/03.png"
                className="-mt-3 h-[350px] w-full object-cover sm:h-[450px]"
            />

            <h3 className="mt-4 text-base text-gray-700">Limited Edition Sports Trainer</h3>

            <div className="mt-4 flex items-center justify-between font-medium">
                <div className='flex'>
                    <p className='mr-4'>$189.99</p>
                    <p className='line-through text-gray-500'>$215.99</p>
                </div>

                <p className="text-xs uppercase tracking-wide">6 Colores</p>
            </div>
        </div>
    )
}
