import React, { useEffect, useState } from 'react'
import Slider from "react-slick";


const ReviewSliderComponent = ( props ) => {

   
    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: props.slide,
        slidesToScroll: 1,
    };
    return (
        <>
            <div className='review-slider'>
                <div className='custom-container'>
                    <Slider {...settings}>
                        {
                            props.data.map((items) => {
                                return (
                                    <div className='slider-items'>
                                        <div className='slider-image'>
                                            <img src={items.title}></img>
                                        </div>
                                        <div className='slider-text'>
                                            <p>{items.description}</p>
                                            <h3>{items.user}</h3>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>

                </div>
            </div>
        </>
    )
}

export default ReviewSliderComponent
