import React from 'react';
import { Footer } from '../../components/Layout/Footer';
import { NavBar } from '../../components/Layout/NavBar';
import { CarouselProducts } from '../../components/Products/CarouselProducts';
import { InfoProduct } from '../../components/Products/InfoProduct';


export const Product = () => {
    return (
        <>
            <NavBar />

            <section className='w-full mt-14 sm:mt-32'>
                <InfoProduct />
            </section>

            <section className='my-16 md:mx-16'>
                <div className='mx-12 mt-24 flex justify-between items-center flex-col md:flex-row'>
                    <h2 className="mb-8 md:mb-0 font-bold font-sans text-lg md:text-2xl text-gray-600 text-center">TE PUEDE INTERESAR</h2>
                    <button className='bg-yellow-200 px-8 py-2 md:py-3 rounded-full btn-show'>VER MÁS</button>
                </div>

                <div className='mt-12'>
                    <CarouselProducts />
                </div>
            </section>

            <section>
                <Footer />
            </section>
        </>
    )
}
