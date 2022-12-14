import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './layout.css';
import { SliderScreen } from './SliderScreen';



export const Main = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true
    };

    return (
        <main className='w-full mt-14 sm:mt-24'>
            <Slider {...settings}>
                <div>
                    <SliderScreen key={0}
                        title='Ropa para mujeres'
                        desc='Aprovecha todas nuestras ofertas en blusas y polos'
                        img1={'img/smujer3.png'}
                        img2={'img/smujer.png'}
                        link={'/store/mujer'}
                    />
                </div>
                <div>
                    <SliderScreen key={3}
                        title='Ropa para hombres'
                        titleBtn='Ir a la tienda'
                        desc='Ofertas en polos, jeans y shorts'
                        img1={'img/shombre.png'}
                        img2={'img/shombre3.jpg'}
                        link={'/store/hombre'}
                    />
                </div>
            </Slider>
        </main>
    )
}
