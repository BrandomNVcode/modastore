import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Footer } from '../../components/Layout/Footer';
import { NavBar } from '../../components/Layout/NavBar';
import { CarouselProducts } from '../../components/Products/CarouselProducts';
import { InfoProduct } from '../../components/Products/InfoProduct';
import { productMujer } from '../../data/productMujer';
import { productHombre } from '../../data/products';


export const Product = () => {

    const params = useParams();
    
    const [list, setList] = useState(productMujer);

    useEffect(() => {
        if(params.gen === 'hombre') {
            setList(productHombre);
        }
    }, []);
    


    return (
        <>
            <NavBar />

            <section className='w-full mt-14 sm:mt-32'>
                <InfoProduct />
            </section>

            <section className='my-16 md:mx-16'>
                <div className='mx-12 mt-24 flex justify-between items-center flex-col md:flex-row'>
                    <h2 className="mb-8 md:mb-0 font-bold font-sans text-lg md:text-2xl text-gray-600 text-center">TE PUEDE INTERESAR</h2>
                    <Link to={`/store/${params.gen}`}>
                        <div className='bg-yellow-200 px-8 py-2 md:py-3 rounded-full btn-show'>VER MÁS</div>
                    </Link>
                </div>

                <div className='mt-12'>
                    <CarouselProducts listProd={list}/>
                </div>
            </section>

            <section>
                <Footer />
            </section>
        </>
    )
}
