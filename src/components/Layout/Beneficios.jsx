import React from 'react';


export const Beneficios = ({children, beneficio, desc}) => {
    return (
        <div className='flex justify-center flex-col items-center benef'>
            <div className='p-4 bg-amber-100 rounded-md hover:bg-amber-200'>
                {children}
            </div>
            <h3 className='mt-4 text-center font-mono font-semibold text-xl'>{beneficio}</h3>
            <p className='mt-2 text-center font-serif'>{desc}</p>
        </div>
    )
}
