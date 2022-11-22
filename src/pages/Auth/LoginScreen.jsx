import React from 'react';
import { Login } from '../../components/Auth/Login';
import { Footer } from '../../components/Layout/Footer';
import { NavBar } from '../../components/Layout/NavBar';


export const LoginScreen = () => {
    return (
        <>

            <NavBar fixed={false}/>

            <section className='w-full mt-16 mb-10 sm:mt-32 sm:mb-20 mx-auto px-8'>
                <div className='w-full md:w-3/5 xl:w-1/3 mx-auto'>
                    <Login />
                </div>
            </section >

            <section>
                <Footer />
            </section>
        </>
    )
}

