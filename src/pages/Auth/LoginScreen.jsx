import React from 'react';
import { Login } from '../../components/Auth/Login';
import { Footer } from '../../components/Layout/Footer';
import { NavBar } from '../../components/Layout/NavBar';


export const LoginScreen = () => {
    return (
        <>

            <NavBar fixed={false}/>

            <section className='w-full mt-16 mb-10 sm:mt-32 sm:mb-20 mx-auto'>
                <Login />
            </section >

            <section>
                <Footer />
            </section>
        </>
    )
}

