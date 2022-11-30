import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { InfoBasic } from './InfoBasic';


export const CarouselProducts = ({listProd}) => {

    const [width, setWidth] = useState(window.innerWidth);
    const [nSlider, setNSlider] = useState(1);
    
    const list = listProd.filter(item => item.id < 8);



    
    useEffect(() => {
      
      const handleResize = () => {
        setWidth(window.innerWidth);
      }
      window.addEventListener('resize', handleResize);
      
      if(width <= 580) {
        setNSlider(1);
      } else if(width <= 956) {
        setNSlider(2);
      } else if(width <= 1300) {
        setNSlider(3)
      } else if(width <= 1500) {
        setNSlider(4)
      } else {
        setNSlider(5)
      }
      

    }, [width])
    


    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: nSlider,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        swipeToSlide: true,
    };


    return (
        <div className='md:mx-8'>
          <Slider {...settings}>
            {
              list.map((item) => (
                <InfoBasic key={item.id} item={item}/>
              ))
            }
          </Slider>
        </div>
    )
}
