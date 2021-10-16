import React, { Component, Props } from 'react';
import HamburgerMenu from 'react-hamburger-menu'
import { Link, animateScroll as scroll } from 'react-scroll';

import logo from '../../res/logo.png';
import '../../styles/navbar.min.css';

export default function Navbar() {
  return(
    <div className='navbar'>
      <div className="logo">
        <img src={logo} />
        <h1>NOODLES</h1>
      </div>
      <nav>
        <ul>
          <li>Projects</li>
          <li>About Me</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  )
}