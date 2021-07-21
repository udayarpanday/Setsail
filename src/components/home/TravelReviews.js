import React from 'react'
import Slider from "react-slick";
import Slider1 from "../../images/h1-parallax-img-2.jpeg"
const TravelReviews = ({ reviews }) => {
    console.log(reviews)
    const settings = {
        arrows: false,
        dots:true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };
    return (
        <>
            <section id='reviews-slider'>
                <div className='parallax' style={{ backgroundImage: `url(${Slider1})` }}>
                    <div className='custom-container'>
                        <div className='section-title'>
                            <h3>Read The Top</h3>
                            <h1>Travel Reviews</h1>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aene an commodo ligula eget dolor. Aenean massa. Cum sociis the</p>
                        </div>
                    <Slider {...settings} className='review-container'>
                        {reviews.map((review) => {
                            return (
                                <div className='review-items'>
                                    <div className='review-details'>
                                        <div className='review-image'>
                                            <img src={review.title}></img>
                                        </div>
                                        <div className='review-content'>
                                            <h4>{review.name}</h4>
                                            <p>{review.description}</p>
                                            <h5>{review.user}</h5>
                                        </div>
                                    <div className='review-items'>


                                    </div>
                                    </div>
                                    
                                </div>
                            )
                        })}
                    </Slider>
                </div>
                </div>

            </section>
        </>
    )
}

export default TravelReviews
