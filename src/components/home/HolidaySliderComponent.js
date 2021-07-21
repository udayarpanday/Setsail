import React from 'react'
import Slider from "react-slick";
import { FaRegEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaTwitter, FaPinterest, FaFacebook, FaInstagram, FaRegUserCircle } from 'react-icons/fa'
const HolidaySliderComponent = ({ destinations }) => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
    };
    return (
        <>
            <div id='holiday-slider-wrapper'>
                <div className='custom-container'>
                    <div className='section-title'>
                            <h3>Plan The</h3>
                            <h1>Perfect Holiday</h1>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aene an commodo ligula eget dolor. Aenean massa. Cum sociis the</p>
                        </div>
                    <Slider {...settings} className='holiday-chose-slider'>
                        {destinations.map((details) => {
                            return (
                                <div className='destinations-card'>
                                    <div className='destinations-items'>
                                        <div className='destination-image'>
                                            <img src={details.title}></img>
                                        </div>
                                        <div className='destination-details'>
                                            <div className='sub-details'>
                                                <p>{details.date}</p>
                                                <p>{details.people}</p>
                                                <p>{details.place}</p>

                                            </div>
                                        </div>
                                        <div className='destination-content'>
                                            <h4>{details.name}</h4>
                                            <p>{details.description}</p>
                                            <h5>{details.price}</h5>

                                        </div>
                                    </div>
                                </div>
                            )

                        })}
                    </Slider>
                    </div>
            
            </div>
        </>
    )
}

export default HolidaySliderComponent
