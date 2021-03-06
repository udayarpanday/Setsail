import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const links = [
        {
            title: 'Home', mainIndex: 0,
            submenu: [
                { title: 'Travel Agency' },
                { title: 'Winter Holidays' },
                { title: 'City Tours' },
                { title: 'New Year Trips' },
                { title: 'Vacation Showcase' }]
        },
        {
            title: 'Pages', mainIndex: 1,
            submenu: [
                { title: 'ATravel Agency' },
                { title: 'Winter Holidays' },
                { title: 'City Tours' },
                { title: 'New Year Trips' },
                { title: 'Vacation Showcase' }]
        },
        {
            title: 'Destination', mainIndex: 2,
            submenu: [
                { title: 'BTravel Agency' },
                { title: 'Winter Holidays' },
                { title: 'City Tours' },
                { title: 'New Year Trips' },
                { title: 'Vacation Showcase' }]
        },
        {
            title: 'Tours', mainIndex: 3,
            submenu: [
                { title: 'CTravel Agency' },
                { title: 'Winter Holidays' },
                { title: 'City Tours' },
                { title: 'New Year Trips' },
                { title: 'Vacation Showcase' }]
        },
        {
            title: 'Blog', mainIndex: 4,
            submenu: [
                { title: 'DTravel Agency' },
                { title: 'Winter Holidays' },
                { title: 'City Tours' },
                { title: 'New Year Trips' },
                { title: 'Vacation Showcase' }]
        },
        {
            title: 'Shop', mainIndex: 5,
            submenu: [
                { title: 'ETravel Agency' },
                { title: 'FWinter Holidays' },
                { title: 'City Tours' },
                { title: 'New Year Trips' },
                { title: 'Vacation Showcase' }]
        },
        {
            title: 'Elements', mainIndex: 6,
            submenu: [
                { title: 'ETravel Agency' },
                { title: 'FWinter Holidays' },
                { title: 'City Tours' },
                { title: 'New Year Trips' },
                { title: 'Vacation Showcase' }]
        },
    ]

    return (
        <>
            <ul>
                {
                    links.map((link, index) => {
                        return (
                            <li>
                                <Subdiv link={link} index={index} />

                            </li>
                        )
                    })
                }

            </ul>
        </>
    );
};

export default Navbar;

export const Subdiv = ({ link, index }) => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Link to='' onClick={() => { setOpen(!open) }}>
                {link.title}
            </Link>
            {open &&
                <div>
                    {link.submenu.map((subLink, subIndex) => {
                        if (link.mainIndex === index) {
                            return (<div className='nav-dropdown' style={{
                                backgroundColor: "white",
                                position: "absolute",
                                top: "50px",
                                padding: "10px 45px",
                                width: "150px",
                            }}>

                                <p>{subLink.title}</p>

                            </div>)
                        }


                    })}

                </div>
            }
        </>
    )
}