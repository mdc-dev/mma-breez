import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {
    const [loggedIn, toggleLoggedIn] = useState(false);
  return (
    <div className="nav-cont">
        <div className="left">
            <h1><Link style={{textDecoration: 'none', color: 'inherit'}} to='/'>TimeBlocker</Link></h1>
            <ul className="page-nav">
                <li className="pages"><a style={{textDecoration: 'none', color: 'inherit'}} href="#what-we-do">How It Works</a></li>
                <li className="pages"><a style={{textDecoration: 'none', color: 'inherit'}} href="#testimonials">Testimonials</a></li>
                <li className="pages"><a style={{textDecoration: 'none', color: 'inherit'}} href="#who-we-are">Who We Are</a></li>
            </ul>
        </div>
        <div className="right">
            {loggedIn ? null : <ul className="nav-items">
                <li className="item"><Link style={{textDecoration: 'none', color: 'inherit'}} to='/login'>Sign In</Link></li>
                <li id="get-started" className="item"><Link style={{textDecoration: 'none', color: 'inherit'}} to='/register'>Get Started</Link></li>
            </ul>}
        </div>
        <div className="hamburger"><i class="fa-solid fa-bars"></i></div>
    </div>
  )
}

export default Navbar