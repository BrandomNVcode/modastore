import React from 'react';
import { Register } from '../../components/Auth/Register';
import { Footer } from '../../components/Layout/Footer';
import { NavBar } from '../../components/Layout/NavBar';


export const RegisterScreen = () => {
    return (
        <>

            <NavBar fixed={false}/>

            <section className='w-full mt-16 mb-10 sm:mt-32 sm:mb-20 mx-auto'>
                <Register />
            </section >

            <section>
                <Footer />
            </section>
        </>
    )
}

