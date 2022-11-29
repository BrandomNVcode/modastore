import React from 'react';


export const Beneficios = ({children, beneficio, desc}) => {
    return (
        <div className='flex justify-center flex-col items-center benef'>
            <div className='p-4 bg-amber-50 rounded-md hover:bg-amber-100'>
                {children}
            </div>
            <h3 className='mt-4 text-center font-mono font-semibold text-base'>{beneficio}</h3>
            <p className='mt-2 text-center font-serif text-sm'>{desc}</p>
        </div>
    )
}
