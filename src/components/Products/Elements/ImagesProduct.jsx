import React from 'react';
import '../product.css';


export const ImagesProduct = ({img = []}) => {
    
    return (
        <>
        {
            img.length > 0 &&
            <div className={`grid ${img.length !== 1? 'grid-cols-2' : 'grid-cols-1'} gap-4 md:grid-cols-1`}>

                <img alt=""
                    src={img[0]}
                    className="aspect-square w-full rounded-xl object-cover"
                />

                {
                    img.length !== 1 &&

                    <div className="flex justify-around items-center flex-wrap lg:mt-4 gap-4">
                        {
                            img.map((image, index) => (
                                index !== 0 &&
                                <div key={index} className={`${img.length <= 2? 'w-full' : 'img-info'}`}>
                                    <img alt=""
                                        src={image}
                                        className="w-fit aspect-square rounded-xl object-cover m-auto img-object"
                                    />
                                </div>
                            ))
                        }
                    </div>
                }
            </div>
        }
        </>
    )
}
