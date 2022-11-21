import React from 'react';
import { Descripcion } from './Elements/Descripcion';
import { Estrella } from './Elements/Estrella';
import { ImagesProduct } from './Elements/ImagesProduct';
import { FormShop } from './FormShop';


export const InfoProduct = () => {
    return (
        <div>
            <div className="relative mx-auto max-w-screen-xl px-4 py-8">
                <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">

                    <ImagesProduct img={['img/polera/34.png', 'img/polera/35.png', 'img/polera/35.png']}/>

                    <div className="sticky top-0">

                        <strong className="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600">
                            Pre Order
                        </strong>

                        <div className="mt-8 flex justify-between">
                            <div className="max-w-[35ch]">
                                <h1 className="text-2xl font-bold">
                                    Fun Product That Does Something Cool
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
                            <Descripcion />
                        </div>

                        <div className="mt-8">
                            <FormShop />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
