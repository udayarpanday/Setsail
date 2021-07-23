import React, { useState } from 'react'
import Iframe from 'react-iframe'

import Footer from '../layouts/Footer'
import MainNavBar from '../layouts/MainNavBar'
import SubFooterBar from '../layouts/SubFooterBar'
import TopNavBar from '../layouts/TopNavBar'

import Banner from '../images/about-banner.jpeg'
import Tours from '../images/tours-circle.png'
import BarImage from '../images/about-us-img-2.png'
import Video from '../images/about-video.jpeg'
import Play from '../images/play-button.png'
import ReviewSliderComponent from '../components/home/ReviewSliderComponent'

import Review1 from "../images/review-1.png"
import Review2 from "../images/review-2.png"

import Spain from '../images/Spain.jpeg'
import Tarragona from '../images/Tarragona.jpeg'
import Madrid from '../images/Madrid.jpeg'
import Barcelona from '../images/Barcelona.jpeg'
import Taiwan from '../images/Taiwan.jpeg'
import Bali from '../images/Bali.jpeg'
import Ubdu from '../images/Ubud.jpeg'
import Seminyak from '../images/Seminyak.jpeg'
import Denpasar from '../images/Denpasar.jpeg'
import Taipei from '../images/Taipei.jpeg'
import Tainan from '../images/Tainan.jpeg'
import Kaohsing from '../images/Khaiosung.jpeg'
import Paris from '../images/Paris.png'
import Slider1 from '../images/destionations-1-title.jpeg'

import HolidayComponent from '../components/home/HolidayComponent'
import { Link } from 'react-router-dom'
const About = () => {
    const [none, setnone] = useState("block")
    const reviews = [
        { title: Review1, name: "Tarragona", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing el.… ", user: "John Doe" },
        { title: Review2, name: "Temple Tour", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing el.… ", user: "Ema Copper" },
    ]
    const detail = [
        {
            title: Barcelona, name: "Barcelona", price: "$1740", childImages: [
                { image: Tarragona, subname: "Tarragona", price: "$1740" }, { image: Madrid, subname: 'Madrid', price: "$1100" }, { image: Spain, subname: 'Holland', price: "$840" }
            ]
        },
        {
            title: Taiwan, name: "Taiwan", price: "$1740", childImages: [
                { image: Tainan, subname: "Tainan", price: "$999" }, { image: Taipei, subname: 'Taipei', price: "$2130" }, { image: Kaohsing, subname: 'Kaohsiung', price: "$963" }
            ]
        },
        {
            title: Bali, name: "Bali", price: "$1740", childImages: [
                { image: Ubdu, subname: "Ubud", price: "$888" }, { image: Seminyak, subname: 'Seminyak', price: "$966" }, { image: Denpasar, subname: 'Denpasar', price: "$999" }
            ]
        },
    ]
    return (
        <section id='about-page'>
            <TopNavBar />
            <MainNavBar />
            <section className='about-banner'>
                <div className='parallax' style={{ backgroundImage: `url(${Banner})` }} >
                    <div className='section-title'>
                        <h3>Amazing</h3>
                        <h1>About Us</h1>
                    </div>
                </div>
            </section>
            <section className='popular-tours-section'>
                <div className='custom-container'>
                    <div className='tours-container'>
                        <div className='tours-items'>
                            <div className='section-title'>
                                <h2>Our Popular Tours</h2>
                                <p>Si elit omnes impedit ius, vel et hinc agam fabulas. Ut audiam invenire iracundia vim. Tn eam dimo diam ea. Piber Korem sit amet.</p>
                            </div>
                            <div className='section-content'>
                                <p>Al elit omnes impedit ius, vel et hinc agam fabulas. Ut audiam invenire iracundia vim. En eam dico similique, ut sint posse sit, eum sumo diam ea. Liber consectetuer in mei, sea in imperdiet assue verit contentio nes, an his cibo blandit tacimates. Iusto iudi cabit sim ilique id velex, in sea rebum deseruisse appellantur. Etiam rhoncus. Maec enas tempus, tellus eget condimentum rhoncus.Aliquam lorem ante, dapibus in, viverra quis, feugiat</p>
                                <button className='common-button'>Read More</button>
                            </div>
                        </div>
                        <div className='tours-items'>
                            <img src={Tours}></img>
                        </div>

                    </div>

                </div>
            </section>
            <section className='about-video-wrapper' onClick={()=>{setnone("none")}}>
                <div className='video-image'>
                    <Iframe url="https://www.youtube.com/embed/L5JORXmV_A0"
                        width="99.5%"
                        height="500px"
                        id="myId"
                        className="myClassname"
                        display="initial"
                        position="relative" />
                </div>
                <div className='play-button' style={{display:`${none}`}} >
                    <img src={Play}></img>
                </div>

            </section>
            <section className='tour-bar-wrapper' >
                <div className='custom-container'>
                    <div className='bar-container'>
                        <div className='bar-items'>
                            <div className='tour-images'>
                                <img src={BarImage}></img>
                            </div>
                        </div>
                        <div className='bar-items'>
                            <div className='progress-bar'>
                                <div className='section-title'>
                                    <h2>Our Popular Tours</h2>
                                    <p>Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem</p>
                                </div>
                                <div className='bars-title'>
                                    <p>Countryside</p>
                                    <p>60%</p>
                                </div>
                                <div className='bars'>
                                    <span style={{ width: '70%' }}></span>
                                </div>
                                <div className='bars-title'>
                                    <p>Vineyard</p>
                                    <p>80%</p>
                                </div>

                                <div className='bars'>
                                    <span style={{ width: '80%' }}></span>
                                </div>
                                <div className='bars-title'>
                                    <p>Winetasting</p>
                                    <p>55%</p>
                                </div>
                                <div className='bars'>
                                    <span style={{ width: '55%' }}></span>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </section>
            <section className='choose-holiday-wrapper'>
                <div className='custom-container zero-top'>
                    <div className='destination-container'>
                        <div className='popular-holiday'>
                            <HolidayComponent details={detail} />
                        </div>
                    </div>
                </div>
            </section>
            <ReviewSliderComponent data={reviews} slide={1} />
            <SubFooterBar />
            <Footer />

        </section>
    )
}

export default About
