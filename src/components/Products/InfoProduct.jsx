import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { products } from '../../data/dataset';
import { Descripcion } from './Elements/Descripcion';
import { Estrella } from './Elements/Estrella';
import { ImagesProduct } from './Elements/ImagesProduct';
import { FormShop } from './FormShop';


export const InfoProduct = () => {

    const navegacion = useNavigate();
    const {gen, id} = useParams();

    const [infoProduct, setInfoProduct] = useState(false);
    const [colorSelect, setcolorSelect] = useState(false);
    const [images, setImages] = useState([]);



    useEffect(() => {
        
        const prod = products.find(prod => prod.id === parseInt(id) && prod.for === gen);

        if(prod) {
            setInfoProduct(prod);
            setImages(prod.types[0].img);
            setcolorSelect(prod.types[0].color);
        } else {
            navegacion('/store');
        }

    }, [gen, id])


    useEffect(() => {
        if(colorSelect) {
            const typesImg = infoProduct.types.findIndex(item => item.color === colorSelect);
            setImages(infoProduct.types[typesImg].img);
            setcolorSelect(infoProduct.types[typesImg].color);
        }
    }, [colorSelect])
    
    
    

    return (
        <>
            {
                infoProduct &&
                <div>
                    <div className="relative mx-auto max-w-screen-xl px-4 py-8">
                        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">

                            {   infoProduct.types.length > 0 && 
                               <ImagesProduct img={images}/>
                            }

                            <div className="sticky top-0">

                                <strong className="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600">
                                    Pre Order
                                </strong>

                                <div className="mt-8 flex justify-between">
                                    <div className="max-w-[35ch]">
                                        <h1 className="text-2xl font-bold">
                                            {infoProduct.name}
                                        </h1>

                                        <p className="mt-0.5 text-sm">Highest Rated Product</p>

                                        <div className="mt-2 -ml-0.5 flex">
                                            <Estrella />
                                            <Estrella />
                                            <Estrella />
                                            <Estrella />
                                            <Estrella yes={false}/>
                                        </div>
                                    </div>

                                    <p className="text-lg font-bold">$119.99</p>
                                </div>

                                <div>
                                    <Descripcion desc={infoProduct.desc}/>
                                </div>

                                <div className="mt-8">
                                    <FormShop typesColor={infoProduct.types} setColorSelect={setcolorSelect} colorSelect={colorSelect}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }

        </>
    )
}
