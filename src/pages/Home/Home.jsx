import React from 'react';
import '../styles.css';

import MopedIcon from '@mui/icons-material/Moped';
import { Beneficios } from '../../components/Layout/Beneficios';
import { Main } from '../../components/Layout/Main';
import { NavBar } from '../../components/Layout/NavBar';
import { CarouselProducts } from '../../components/Products/CarouselProducts';
import { Subscribete } from '../../components/Layout/Subscribete';
import { Footer } from '../../components/Layout/Footer';


export const Home = () => {
    return (
        <>
            <NavBar />

            <section>
                <Main/>
            </section>

            <section className='mx-4 my-12 md:m-16'>
                <h2 className="text-center font-bold font-sans text-2xl text-gray-600">¿Por qué deberia de escogernos?</h2>

                <div className="my-12 flex justify-around flex-wrap mx-12">
                    <div className="mt-6">
                        <Beneficios
                            beneficio={'Envio Rapido'}
                            desc={'lorem lorem lorem lorem lorem lorem lorem lorem lorem jajaja envio rapido a todo le pais'}
                        >
                            <MopedIcon fontSize="large"/>
                        </Beneficios>
                    </div>

                    <div className="mt-6">
                        <Beneficios
                            beneficio={'Envio Rapido'}
                            desc={'lorem lorem lorem lorem lorem lorem lorem lorem lorem jajaja envio rapido a todo le pais'}
                        >
                            <MopedIcon fontSize="large"/>
                        </Beneficios>
                    </div>

                    <div className="mt-6">
                        <Beneficios
                            beneficio={'Envio Rapido'}
                            desc={'lorem lorem lorem lorem lorem lorem lorem lorem lorem jajaja envio rapido a todo le pais'}
                        >
                            <MopedIcon fontSize="large"/>
                        </Beneficios>
                    </div>

                    <div className="mt-6">
                        <Beneficios
                            beneficio={'Envio Rapido'}
                            desc={'lorem lorem lorem lorem lorem lorem lorem lorem lorem jajaja envio rapido a todo le pais'}
                        >
                            <MopedIcon fontSize="large"/>
                        </Beneficios>
                    </div>
                </div>
            </section>

            <section className='my-16 md:mx-16'>
                <div className='mx-12 mt-24 flex justify-between items-center flex-col md:flex-row'>
                    <h2 className="mb-8 md:mb-0 font-bold font-sans text-lg md:text-2xl text-gray-600 text-center">DE TODO PARA HOMBRES</h2>
                    <button className='bg-yellow-200 px-8 py-2 md:py-3 rounded-full btn-show'>VER MÁS</button>
                </div>

                <div className='mt-12'>
                    <CarouselProducts />
                </div>

                <div className='mx-12 mt-24 flex justify-between items-center flex-col md:flex-row'>
                    <h2 className="mb-8 md:mb-0 font-bold font-sans text-lg md:text-2xl text-gray-600 text-center">DE TODO PARA MUJERES</h2>
                    <button className='bg-yellow-200 px-8 py-3 rounded-full btn-show'>VER MÁS</button>
                </div>

                <div className='mt-12'>
                    <CarouselProducts />
                </div>

                <div className='mx-12 mt-24 flex justify-between items-center flex-col md:flex-row'>
                    <h2 className="mb-8 md:mb-0 font-bold font-sans text-lg md:text-2xl text-gray-600 text-center">DE TODO PARA LOS MÁS PEQUEÑOS</h2>
                    <button className='bg-yellow-200 px-8 py-3 rounded-full btn-show'>VER MÁS</button>
                </div>

                <div className='mt-12'>
                    <CarouselProducts />
                </div>
            </section>

            <section className='my-20 mx-0 md:mx-6 lg:mx-20'>
                <Subscribete />
            </section>

            <section>
                <Footer />
            </section>
        </>
    )
}
