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
                    />
                </div>
                <div>
                    <SliderScreen key={2}
                        title='Ropa para los más pequeños de casa'
                        desc='Todo tipo de ropa para bebes y niños'
                        titleBtn='Ver productos'
                        img1={'img/sbebe.jpg'}
                        img2={'img/sbebe2.jpg'}
                    />
                </div>
                <div>
                    <SliderScreen key={3}
                        title='Ropa para hombres'
                        titleBtn='Ir a la tienda'
                        desc='Ofertas en polos, jeans y shorts'
                        img1={'img/shombre.png'}
                        img2={'img/shombre3.jpg'}
                    />
                </div>
            </Slider>
        </main>
    )
}
