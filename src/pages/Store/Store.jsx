import React from 'react';
import { Footer } from '../../components/Layout/Footer';
import { NavBar } from '../../components/Layout/NavBar';
import { ProductCollection } from '../../components/Products/ProductCollection';



export const Store = () => {
    return (
        <>
            <NavBar />

            <section className='w-full mt-14 sm:mt-32'>
                <ProductCollection />
            </section>

            <section>
                <Footer />
            </section>
        </>
    )
}
