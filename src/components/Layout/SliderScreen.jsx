import React from 'react';
import { Link } from 'react-router-dom';


export const SliderScreen = ({title, desc, titleBtn='Comprar ahora', img1, img2, link}) => {
    return (
        <div className='content w-full sm:h-96 flex justify-center flex-col sm:flex-row items-center relative bg-slate-100'>
            <div className='hidden lg:flex justify-center w-full h-full sm:w-1/2 lg:w-1/3'>
                <div className='w-full h-full flex justify-center items-center flex-wrap'>
                    <img src={img1} alt={title} className='w-auto h-full'/>
                </div>
            </div>
            <div className='maindesc flex justify-center flex-col items-center w-full h-full absolute sm:relative sm:w-1/2 lg:w-1/3'>
                <h2 className='text-center'>{title}</h2>
                <p className='mt-3 mx-8 font-semibold font-mono text-lg text-slate-800 text-center'>
                    {desc}
                </p>
                <Link to={link}>
                    <div className='mt-6 font-light text-lg text-black bg-slate-400 px-5 py-2 rounded-lg'>
                        {titleBtn}
                    </div>
                </Link>
            </div>
            <div className='flex justify-center w-full h-full sm:w-1/2 lg:w-1/3'>
                <div className='w-full h-full flex justify-center items-center flex-wrap'>
                    <img src={img2} alt={title} className='w-full md:w-auto h-full'/>
                </div>
            </div>
        </div>
    )
}
