import React, { useRef } from 'react'
import Logo from '../images/logo.png'
import Maps from '../images/sidearea-img.jpeg'
import { Link } from 'react-router-dom'
import { BiBasket } from 'react-icons/bi'
import { FiSearch } from 'react-icons/fi'

const MainNavBar = () => {
    const show = useRef(null)
    return (
        <>
            <section id='main-nav'>
                <div className='custom-container nav-padding'>
                    <div className='navigation-container'>
                        <div className='navigation-items'>
                            <div className='main-logo'>
                                <img src={Logo}></img>
                            </div>
                        </div>
                        <div className='navigation-items'>
                            <ul>
                                <li>
                                    <Link to='/' className=''>Home</Link>
                                </li>
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
                                            <img src={Logo}></img>
                                            <h3>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aene an commodo ligula eget dolor. Aenean massa. Cum sociis the</h3>
                                        </div>
                                        <div className='sidenav-maps'>
                                            <img src={Maps}></img>
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
