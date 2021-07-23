import React from 'react'

const HolidayComponent = ({ details }) => {
    console.log(details)

    return (
        <>
            {details && details.map((items) => {
                return (
                    <>
                        <div className='destination'>
                            <div className='destination-items'>
                                <div className='destination-country'>
                                    <div className='country-tile'>
                                        <img className='country-tile' src={items.title}></img>
                                    </div>
                                    <div className='country-name'>
                                        <h4>{items.name}</h4>
                                        <h4>{items.price}</h4>
                                    </div>

                                </div>
                            </div>
                            {
                                items.childImages.map((child) =>
                                    <div className='destination-items'>
                                    
                                            <div className='places-images'>
                                                <img src={child.image}></img>
                                            </div>
                                            <div className='places-details'>
                                                <h4>{child.subname}</h4>
                                                <div className='details-item'>
                                                    <div className='rating'>
                                                        <p>{child.rating}</p>
                                                    </div>
                                                    <div className='price'>
                                                        <h4>{child.price}</h4>
                                                    </div>
                                                </div>
                                            </div>


                                    </div>
                                )
                            }
                        </div>
                    </>
                )
            })}

        </>
    )
}

export default HolidayComponent
