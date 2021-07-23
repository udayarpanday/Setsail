import React from 'react'
import { FaRegEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaTwitter, FaPinterest, FaFacebook, FaInstagram, FaRegUserCircle } from 'react-icons/fa'
import { Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const TopNavBar = () => {
    return (
        <>
            <section id='top-nav'>
                <div className=' small-container'>
                    <div className='top-nav-container'>
                        <div className='top-nav-items'>
                            <ul>
                                <FaRegEnvelope className='icon-style icon-color' />
                                <li>setsail@qode.com</li>
                                <FaPhoneAlt className='icon-style icon-color' />
                                <li> 1 562 867 5309</li>
                                <FaMapMarkerAlt className='icon-style icon-color' />
                                <li>Broadway & Morris St, New York</li>
                            </ul>
                        </div>
                        <div className='top-nav-items'>
                            <ul>
                                <FaTwitter className='icon-style' />
                                <FaPinterest className='icon-style' />
                                <FaFacebook className='icon-style' />
                                <FaInstagram className='icon-style' />
                                {/* <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        Dropdown Button
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown> */}
                                <div className='top-nav-buttons'>
                                    <button className='common-button'>English</button>
                                    <FaRegUserCircle className='login-button'  />
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TopNavBar
