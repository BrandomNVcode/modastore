import React from 'react'

export const Subscribete = () => {
    return (
        <div className="newsletter-area">
            <div className="w-full px-4 h-full text-center relative">
                <h4 className='text-white font-bold font-mono text-2xl'>
                    Subscribete a nosotros y recibe ofertas semanalmente
                </h4>
                <p className="mt-4 text-sm text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, voluptas!
                </p>

                <div className='mx-auto w-4/5 md:w-3/6 mt-4 flex justify-center items-center flex-row'>
                    <input
                        type="text"
                        placeholder="Ingrese su email.."
                        className='w-full py-2 pl-5 rounded-l-full text-yellow-700 cursor-pointer'
                    />
                    <button className="bg-yellow-500 py-2 px-3 rounded-r-full text-white">Enviar</button>
                </div>
            </div>
        </div>
    )
}
