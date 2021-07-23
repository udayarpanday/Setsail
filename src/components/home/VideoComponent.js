import React from 'react'
import VideoImage from '../../images/h1-video-button-img.jpeg'
import PlayButton from '../../images/play-button.png'
import Icon1 from '../../images/icon-1.png'
import Icon2 from '../../images/icon-2.png'
import Icon3 from '../../images/icon-3.png'
import Icon4 from '../../images/icon-4.png'
const VideoComponent = () => {
    return (
        <>
                 <section className='video-wrapper'>
                <div className='parallax'>
                    <div className='custom-container'>
                        <div className='section-title'>
                            <h3>Go & Discover</h3>
                            <h1>Breathtaking Cities</h1>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aene an commodo ligula eget dolor. Aenean massa. Cum sociis the</p>
                        </div>
                        <div className='video-image' >
                            <img src={VideoImage}></img>
                            <div className='play-button'>
                                <img src={PlayButton}></img>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className='todo-container'>
                        <div className='todo-items'>
                            <div className='todo-image'>
                                <img src={Icon1} ></img>
                            </div>
                            <div className='todo-content'>
                            <h4>Restaurants</h4>
                                <p>Aenean commodo ligula eget dolor. Lorem ipsum</p>
                            </div>
                        </div>
                        <div className='todo-items'>
                            <div className='todo-image'>
                            <img src={Icon2} ></img>
                            </div>
                            <div className='todo-content'>
                            <h4>Sightseeing</h4>
                                <p>Aenean commodo ligula eget dolor. Lorem ipsum</p>
                            </div>
                        </div>
                        <div className='todo-items'>
                            <div className='todo-image'>
                            <img src={Icon3} ></img>
                            </div>
                            <div className='todo-content'>
                            <h4>Shops & Boutiques</h4>
                                <p>Aenean commodo ligula eget dolor. Lorem ipsum</p>
                            </div>
                        </div>
                        <div className='todo-items'>
                            <div className='todo-image'>
                            <img src={Icon4} ></img>
                            </div>
                            <div className='todo-content'>
                                <h4>Where to Stay</h4>
                                <p>Aenean commodo ligula eget dolor. Lorem ipsum</p>
                            </div>
                        </div>
                    </div>
            </section>
       
        </>
    )
}

export default VideoComponent
