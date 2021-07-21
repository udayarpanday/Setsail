import React from 'react'
import TopNavBar from '../../layouts/TopNavBar'
import MainNavBar from '../../layouts/MainNavBar'

import Spain from '../../images/Spain.jpeg'
import Tarragona from '../../images/Tarragona.jpeg'
import Madrid from '../../images/Madrid.jpeg'
import Barcelona from '../../images/Barcelona.jpeg'
import Taiwan from '../../images/Taiwan.jpeg'
import Bali from '../../images/Bali.jpeg'
import Ubdu from '../../images/Ubud.jpeg'
import Seminyak from '../../images/Seminyak.jpeg'
import Denpasar from '../../images/Denpasar.jpeg'
import Taipei from '../../images/Taipei.jpeg'
import Tainan from '../../images/Tainan.jpeg'
import Kaohsing from '../../images/Khaiosung.jpeg'
import Paris from '../../images/Paris.png'

import Corfu from '../../images/cofru.jpeg'
import VaticanCity from '../../images/vaticancity.jpeg'
import Rome from '../../images/rome.jpeg'
import Milan from '../../images/milan.jpeg'
import WinterAction from '../../images/winter-action.jpeg'
import MagicItaly from '../../images/magicofitaly.jpeg'
import SnowSurfing from '../../images/snowsurfing.jpeg'

import Valencia from '../../images/Valencia.jpeg'

import Review1 from "../../images/review-1.png"
import Review2 from "../../images/review-2.png"
import Review3 from "../../images/review-3.png"
import Review4 from "../../images/review-4.png"
import Review5 from "../../images/review-5.png"

import HomeBlog1 from "../../images/home-blog-1.jpeg"
import HomeBlog2 from "../../images/home-blog-2.jpeg"
import BlogBanner from "../../images/home-banner-blog.jpeg"

import PostMark1 from "../../images/postmark.jpeg"
import PostMark2 from "../../images/postmark-2.jpeg"
import PostMark3 from "../../images/postmark-1.jpeg"
import PostMark4 from "../../images/postmark-3.jpeg"
import PostMark5 from "../../images/postmark-4.jpeg"
import PostMark6 from "../../images/postmark-5.jpeg"


import HolidayComponent from '../../components/home/HolidayComponent';
import BannerComponent from '../../components/home/BannerComponent';
import VideoComponent from '../../components/home/VideoComponent'
import HolidaySliderComponent from '../../components/home/HolidaySliderComponent'
import ReviewSliderComponent from '../../components/home/ReviewSliderComponent'
import PlacesComponent from '../../components/home/PlacesComponent'
import TravelReviews from '../../components/home/TravelReviews'


const Home = () => {
    const detail = [
        {
            title: Spain, name: "Spain", childImages: [
                { image: Tarragona, subname: "Tarragona", rating: "5.0 Good", price: "$1740" }, { image: Madrid, subname: 'Madrid', rating: "7.0 Superb", price: "$1100" }, { image: Barcelona, subname: 'Barcelona', rating: "5.3 Good", price: "$840" }
            ]
        },
        {
            title: Taiwan, name: "Taiwan", childImages: [
                { image: Tainan, subname: "Tainan", rating: "7.3 Superb", price: "$999" }, { image: Taipei, subname: 'Taipei', rating: "5.0 Good", price: "$2130" }, { image: Kaohsing, subname: 'Kaohsiung', rating: "8.0 Superb", price: "$963" }
            ]
        },
        {
            title: Bali, name: "Bali", childImages: [
                { image: Ubdu, subname: "Ubud", rating: "6.0 Good", price: "$888" }, { image: Seminyak, subname: 'Seminyak', rating: "9.0 Superb", price: "$966" }, { image: Denpasar, subname: 'Denpasar', rating: "6.7 Good", price: "$999" }
            ]
        },
    ]
    const destinations = [
        { title: Corfu, name: "Corfu", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing el.… ", price: "$966", date: '1', people: '13+', place: "Europe" },
        { title: VaticanCity, name: "Vatican City", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing el.… ", price: "$860", date: '1', people: '13+', place: "Europe" },
        { title: Rome, name: "Rome", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing el.… ", price: "$2300", date: '1', people: '13+', place: "Europe" },
        { title: Milan, name: "Milan", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing el.… ", price: "$1230", date: '1', people: '13+', place: "Europe" },
        { title: WinterAction, name: "WinterAction", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing el.… ", price: "$960", date: '1', people: '13+', place: "Skiing" },
        { title: MagicItaly, name: "MagicItaly", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing el.… ", price: "$1000", date: '1', people: '13+', place: "Skiing" },
        { title: SnowSurfing, name: "SnowSurfing", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing el.… ", price: "$720", date: '1', people: '13+', place: "Skiing" }
    ]
    const places = [
        { title: Valencia, name: "Valencia", price: "$1966" },
        { title: Seminyak, name: "Varadoro", price: "$2300" },
        { title: VaticanCity, name: "Italy", price: "$2500" },
    ]
    const mustVisit = [
        { title: Valencia, name: "Valencia"  },
        { title: Seminyak, name: "Varadoro"  },
        { title: VaticanCity, name: "Italy" },
    ]
    const reviews = [
        { title: Review1, name: "Tarragona", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing el.… ", user: "John Doe" },
        { title: Review2, name: "Temple Tour", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing el.… ", user: "Ema Copper" },
        { title: Review3, name: "Taipei", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing el.… ", user: "Susan Day" },
        { title: Review4, name: "Varadoro", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing el.… ", user: "Roger Brooks" },
        { title: Review5, name: "Italy", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing el.… ", user: "James Fischer" },
    ]
    const postmark = [
        { title: PostMark1, name: "India",   },
        { title: PostMark2, name: "Japan", },
        { title: PostMark3, name: "Taipei"},
        { title: PostMark4, name: "Ubud", },
        { title: PostMark5, name: "Italy", },
        { title: PostMark6, name: "Venice", },
    ]
    return (
        <div>
            <TopNavBar />
            <MainNavBar />
            <BannerComponent />
            <section id='search-form'>
                <div className='custom-container'>
                    <div className='search-input'>
                        <input></input>
                        <select></select>
                        <select name="travel" id="traveltyoe">
                            <option value="Europe">Europe</option>
                            <option value="Latest">Latest</option>
                            <option value="NY">NY</option>
                            <option value="Skiing">Skiing</option>
                        </select>
                        <button>FIND NOW</button>
                    </div>
                </div>
            </section>
            <section id='choose-holiday-wrapper'>
                <div className='custom-container zero-padding'>
                    <div className='section-title'>
                        <h3>Choose Your</h3>
                        <h1>Perfect Holiday</h1>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aene an commodo ligula eget dolor. Aenean massa. Cum sociis the</p>
                    </div>
                    <div className='destination-container'>
                        <HolidayComponent details={detail} />
                    </div>
                </div>
            </section>
            <section id='paris-banner'>
                <div className='custom-container'>
                    <div className='banner-image'>
                        <img src={Paris}></img>
                    </div>
                </div>
            </section>
            <VideoComponent />
            <HolidaySliderComponent destinations={destinations} />
            <ReviewSliderComponent  data={reviews} slide={1}/>
            <section id='common-places-section'>
                <div className='custom-container'>
                    <div className='section-title'>
                        <h3>The Unforgettable</h3>
                        <h1>Mediterranean</h1>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aene an commodo ligula eget dolor. Aenean massa. Cum sociis</p>
                    </div>
                    <PlacesComponent places={places} />
                </div>
            </section>
            <TravelReviews reviews={reviews} />
            <section id='home-blog-wrapper'>
                <div className='custom-container'>
                    <div className='blog-container'>
                        <div className='blog-items'>
                            <div className='section-title'>
                                <h2>From Our Blog</h2>
                                <p style={{ fontSize: '17px' }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aene an commodo ligula eget dolor. Aenean massa. Cum sociis the</p>
                            </div>
                            <div className='blogs-section'>
                                <div className='items-image'>
                                    <img src={HomeBlog1}></img>
                                </div>
                                <div className='items-content'>
                                    <h4>Amazing Tour</h4>
                                    <p>Al alit emnos lnipedit ius, vel et hinc agam fabulas. Ut audiam invenire iracundia vim. An eam dico similique, ut sint posse sit,</p>
                                    <div className='items-details'>
                                        <h5>September 11, 2016</h5>
                                        <h5>1 Comment</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='blogs-section'>
                                <div className='items-image'>
                                    <img src={HomeBlog2}></img>
                                </div>
                                <div className='items-content'>
                                    <h4>Amazing Tour</h4>
                                    <p>Al alit emnos lnipedit ius, vel et hinc agam fabulas. Ut audiam invenire iracundia vim. An eam dico similique, ut sint posse sit,</p>
                                    <div className='items-details'>
                                        <h5>September 11, 2016</h5>
                                        <h5>1 Comment</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='blog-items'>
                            <div>
                                <div className='blog-banner-image'>
                                    <img src={BlogBanner}></img>
                                </div>
                                <div className='blog-banner'>
                                    <h3>travel.com</h3>
                                    <h2>Sale upto 70%</h2>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

            </section>
            <section id='common-places-section'>
                <div className='custom-container'>
                    <div className='section-title'>
                        <h3>Choose Your</h3>
                        <h1>Destination</h1>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aene an commodo ligula eget dolor. Aenean massa. Cum sociis</p>
                    </div>
                    <div className='vacation-container'>
                        <PlacesComponent places={mustVisit}  />
                    </div>
                </div>
            </section>
            <section id='slider-wrapper'>
                <div className='custom-container'>
                    <div className='section-title'>
                        <h3>Get Ready</h3>
                        <h1>Pack Up and Go</h1>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aene an commodo ligula eget dolor. Aenean massa. Cum sociis</p>
                    </div>
                </div>
                <ReviewSliderComponent data={postmark} slide={4} />
            </section>
        </div>
    )
}

export default Home
