import React from 'react'

const PlacesComponent = ({ places }) => {
    return (
        <>
            
                    <div className='places-container'>
                        {places.map((items) =>
                            <div className='places-items'>
                                <div className='places-images'>
                                    <img src={items.title}></img>
                                </div>
                                <div className='places-content'>
                                    <h4>{items.name}</h4>
                                    <h5>{items.price}</h5>
                                </div>
                            </div>
                        )}
                    </div>
        </>
    )
}

export default PlacesComponent
