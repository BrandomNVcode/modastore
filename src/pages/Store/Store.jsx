import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Footer } from '../../components/Layout/Footer';
import { NavBar } from '../../components/Layout/NavBar';
import { ProductCollection } from '../../components/Products/ProductCollection';
import { products } from '../../data/dataset';
import { productMujer } from '../../data/productMujer';
import { productHombre } from '../../data/products';



export const Store = () => {

    const params = useParams();

    const [list, setList] = useState(products);

    useEffect(() => {
        if(params.gen === 'hombre') {
            setList(productHombre);
        } else if(params.gen === 'mujer') {
            setList(productMujer);
        } else {
            setList(products);
        }
        console.log(list)
    }, [params]);


    return (
        <>
            <NavBar />

            <section className='w-full mt-14 sm:mt-32'>
                <ProductCollection listProduct={list}/>
            </section>

            <section>
                <Footer />
            </section>
        </>
    )
}
