import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({toggleMobile}) => {

    const [MobileMenu, setMobileMenu] = useState(false);


    return (
        <>
            <header className="header">
                <div className="container d_flex">
                    <div className={MobileMenu ? "categories d_flex categorieslink-active" : "categories d_flex"} onClick={toggleMobile}> 
                        <span className="fa-solid fa-border-all"></span>
                        <h4>Categories <i className="fa-solid fa-chevron-down"></i></h4>
                    </div>
                    <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
                        {
                            MobileMenu ? <i className="fa-solid fa-xmark close home-btn"></i> : <i className="fa-solid fa-bars open"></i>
                        }
                    </button>

                    <div className={MobileMenu ? "navlink navlink-active" : "navlink"}>
                        <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/pages'>Pages</Link></li>
                            <li><Link to='/user'>User Account</Link></li>
                            <li><Link to='/vendor'>Vendor Account</Link></li>
                            <li><Link to='/track'>Track my order</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar