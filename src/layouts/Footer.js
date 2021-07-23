import React from 'react'
import Logo from '../images/logo.png'
import { FaRegEnvelope, FaPhoneAlt, FaMapMarkerAlt,FaRegUserCircle } from 'react-icons/fa'
const Footer = () => {
    return (
        <>
            <section id='footer-wrapper'>
                <div className='custom-container'>
                    <div className='footer-container'>
                        <div className='footer-items'>
                            <div className='footer-logo'>
                                <img src={Logo}></img>
                            </div>
                            <div className='footer-title'>
                                <p>Lorem ipsum dolor sit ametco nsec te tuer adipiscing elitae</p>
                            </div>
                            <div className='footer-contact'>
                                <ul>
                                    <li> <FaRegEnvelope className='icon-style icon-color' />setsail@qode.com</li>
                                    <li> <FaPhoneAlt className='icon-style icon-color' />1 562 867 5309</li>
                                    <li><FaMapMarkerAlt className='icon-style icon-color' />Broadway & Morris St, New York</li>
                                </ul>
                            </div>
                        </div>
                        <div className='footer-items'>
                            <div className='footer-posts'>
                                <div className='post-title'>
                                    <h5>Our Recent Posts</h5>
                                </div>
                                <div className='post-content'>
                                    <div className='content-title'>
                                        <p>Vist Bali, Thailand, China</p>
                                    </div>
                                    <div className='content-date'>
                                        <p>Vist Bali, Thailand, China</p>
                                    </div>
                                </div>
                                <div className='post-content'>
                                    <div className='content-title'>
                                        <p>Vist Bali, Thailand, China</p>
                                    </div>
                                    <div className='content-date'>
                                        <p>Vist Bali, Thailand, China</p>
                                    </div>
                                </div>
                                <div className='post-content'>
                                    <div className='content-title'>
                                        <p>Vist Bali, Thailand, China</p>
                                    </div>
                                    <div className='content-date'>
                                        <p>Vist Bali, Thailand, China</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='footer-items'>
                            <div className='newsletter-title'>
                                <h5>Subscribe to our Vewsletter</h5>
                            </div>
                            <div className='newsletter-subtext'>
                                <p>Etiam rhoncus. Maecenas temp us, tellus eget condimentum rho </p>
                            </div>
                            <div className='newsletter-inputs'>
                                <FaRegUserCircle className='input-icon'></FaRegUserCircle>
                                <input placeholder='Name'></input>
                            </div>
                            <div className='newsletter-inputs'>
                                <FaRegEnvelope className='input-icon'/>
                                <input placeholder='Email'></input>
                            </div>
                            <div className='newsletter-inputs'>
                                <button className='common-button'>SUBSCRIBE</button>
                            </div>

                        </div>
                        <div className='footer-items'>
                        <div className='newsletter-title'>
                                <h5>Our Instagram</h5>
                            </div>
                            <div className='newsletter-subtext'>
                                <p>Etiam rhoncus. Maecenas temp us, tellus eget condimentum rho</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Footer
