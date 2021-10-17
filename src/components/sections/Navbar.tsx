import { useState, useEffect } from 'react';
import HamburgerMenu from 'react-hamburger-menu'
import { Link } from 'react-scroll';
import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock';

import logo from '../../res/logo.png';
import "../../styles/default.min.css";
import '../../styles/navbar.min.css';

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) {
      let menu: HTMLElement = document.querySelector(".menu-hamburger") as HTMLElement
      disableBodyScroll(menu)
    }
    else {
      clearAllBodyScrollLocks()
    }
  })

  return(
    <div className='navbar'>
      <div className="logo">
        <img src={logo} />
        <h1>NOODLES</h1>
      </div>
      <nav>
        <ul>
          <Link to="section-projects" smooth={"easeOutQuint"} offset={-150}>
            <li className="nav-item" id="nav-projects">Projects</li>
          </Link>
          <Link to="about-section" smooth={"easeOutQuint"} offset={-200}>
            <li className="nav-item">About Me</li>
          </Link>
          <Link to="contact" smooth={"easeOutQuint"}>
            <li className="nav-item">Contact</li>
          </Link>
        </ul>
      </nav>
      
      <div className='hamburger'>
        <HamburgerMenu
          isOpen={open}
          menuClicked={() => setOpen(!open)}
          width={26}
          height={17}
          strokeWidth={2}
          color='white'
          borderRadius={10}
          animationDuration={0.5}              
        />
      </div>
      {open && (
        <div className="menu-hamburger">
          <ul>
            <Link to="section-projects" smooth={"easeOutQuint"} offset={-150} onClick={() => setOpen(false)}>
              <li className="nav-item">Projects</li>
            </Link>
            <Link to="about-section" smooth={"easeOutQuint"} offset={-200} onClick={() => setOpen(false)}>
              <li className="nav-item">About Me</li>
            </Link>
            <Link to="contact" smooth={"easeOutQuint"} onClick={() => setOpen(false)}>
              <li className="nav-item">Contact</li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  )
}