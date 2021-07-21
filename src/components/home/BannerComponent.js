import React from 'react'
import Slider from "react-slick";
import Slider1 from '../../images/destionations-1-title.jpeg'
import Slider2 from '../../images/h1-parallax-img-2.jpeg'
const BannerComponent = () => {
    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        swipeToSlide: true,
        slidesToScroll: 1,
    };
    return (
        <>
             <section id='banner-slider'>
                <Slider {...settings}>
                    <div className='slider-container'>
                        <div className='slider-image'>
                            <img src={Slider1}></img>
                        </div>
                        <div className='slider-text'>
                            <h3>Come with us</h3>
                            <h1>Relax and Enjoy</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        </div>
                    </div>
                    <div className='slider-container'>
                        <div className='slider-image'>
                            <img src={Slider2}></img>
                        </div>
                        <div className='slider-text'>
                            <h3>Come with us</h3>
                            <h1>Relax and Enjoy</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        </div>
                    </div>
                </Slider>
            </section>
            
        </>
    )
}

export default BannerComponent
