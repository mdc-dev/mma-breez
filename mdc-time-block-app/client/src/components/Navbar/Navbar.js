import React, { useState } from 'react'
import './Navbar.scss'

const Navbar = () => {
    const [loggedIn, toggleLoggedIn] = useState(false);
  return (
    <div className="nav-cont">
        <div className="left">
            <h1>TB</h1>
            <ul className="page-nav">
                <li className="pages">What we do.</li>
                <li className="pages">Resources</li>
                <li className="pages">About</li>
            </ul>
        </div>
        <div className="right">
            {loggedIn ? null : <ul className="nav-items">
                <li className="item">Login</li>
                <li id="get-started" className="item">Get Started</li>
            </ul>}
        </div>
    </div>
  )
}

export default Navbar