import React, { useRef } from 'react'
import Maps from '../images/sidearea-img.jpeg'
import { Link } from 'react-router-dom'
import { BiBasket } from 'react-icons/bi'
import { FiSearch } from 'react-icons/fi'
import { FaRegEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaTwitter, FaPinterest, FaFacebook, FaInstagram, FaRegUserCircle } from 'react-icons/fa'
import Navbar from './NavBar'

const MainNavBar = () => {
    const show = useRef(null)
    const showSideBar=() =>{
        
    }
    return (
        <>
            <section id='main-nav'>
                <div className='custom-container nav-padding'>
                    <div className='navigation-container'>
                        <div className='navigation-items'>
                            <div className='main-logo'>
                                <img src='images/logo.png'></img>
                            </div>
                        </div>
                       
                         <div className='navigation-items'>
                             <Navbar/>
                            {/*<ul>
                                <li>
                                    <Link to='/'>Home</Link>
                                    {/* <div className='sub-nav' ref={show}>
                                        <ul>
                                            <li>Home</li>
                                            <li>About</li>
                                            <li>Blog</li>
                                            <li>Home</li>
                                            <li>Home</li>
                                            <li>Home</li>
                                        </ul>

                                    </div> 
                                <li>
                                    <Link to='/'>Pages</Link>
                                </li>
                                <li>
                                    <Link to='/'>Destination</Link>
                                </li>
                                <li>
                                    <Link to='/'>Tours</Link>
                                </li>
                                <li>
                                    <Link to='/'>Blog</Link>
                                </li>
                                <li>
                                    <Link to='/'>Shop</Link>
                                </li>
                                <li>
                                    <Link to='/'>Elements</Link>
                                </li>
                            </ul>
                            */}

                        </div> 
                        <div className='navigation-items'>
                            <div className='nav-buttons'>
                                <BiBasket className='navbar-icons' />
                                <FiSearch className='navbar-icons' />
                                <div className='nav-bars' >
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <div className='sidenav'>
                                    <div className='sidenav-top' >
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <div className='sidenav-container'>
                                        <div className='logo'>
                                        <img src='images/logo.png'></img>
                                            <h3>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aene an commodo ligula eget dolor. Aenean massa. Cum sociis the</h3>
                                        </div>
                                        <div className='sidenav-maps'>
                                            <img src={Maps}></img>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipis cing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis theme natoque</p>
                                        </div>
                                        <div className='search-bar'>
                                            <div className='section-title'>
                                                <h5>Find your Destination</h5>
                                                <div className='search-fields'>
                                                    <input></input>
                                                    <button className='common-button'>
                                                        <FiSearch />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='social-icons'>
                                            <div className='section-title'>
                                                <h5>Follow Me</h5>
                                                <div className='icons-items'>
                                                    <FaTwitter className='icon-style' />
                                                    <FaPinterest className='icon-style' />
                                                    <FaFacebook className='icon-style' />
                                                    <FaInstagram className='icon-style' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default MainNavBar
