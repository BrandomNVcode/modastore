import React from 'react';
import { Footer } from '../../components/Layout/Footer';
import { NavBar } from '../../components/Layout/NavBar';
import { OrderSummary } from '../../components/Order/OrderSummary';


export const Order = () => {
    return (
        <>
            <NavBar />


            <section className='w-full mt-14 sm:mt-32'>
                <OrderSummary />
            </section >
            <section>
                <Footer />
            </section>
        </>
    )
}


