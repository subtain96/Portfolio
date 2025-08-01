import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/profile.png'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  return (
    <div className='navbar'>
      <img src={logo} alt="" className='profile-picture'/>
      <img 
        src={menu_open} 
        onClick={toggleMenu} 
        alt="" 
        className="nav-mob-open" 
        style={{ display: isMenuOpen ? 'none' : 'block' }}
      />
      <ul 
        ref={menuRef} 
        className={`nav-menu ${isMenuOpen ? 'active' : ''}`}
      >
        <img 
          src={menu_close} 
          onClick={closeMenu} 
          alt="" 
          className="nav-mob-close" 
        />
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#Home' onClick={() => { setMenu("Home"); closeMenu(); }}>
            <p>Home</p>
          </AnchorLink>
          {menu==="Home"?<img src={underline} alt='' />:<></>}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#About Me' onClick={() => { setMenu("About Me"); closeMenu(); }}>
            <p>About Me</p>
          </AnchorLink>
          {menu==="About Me"?<img src={underline} alt='' />:<></>}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#Services' onClick={() => { setMenu("Services"); closeMenu(); }}>
            <p>Services</p>
          </AnchorLink>
          {menu==="Services"?<img src={underline} alt='' />:<></>}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#Portfolio' onClick={() => { setMenu("Portfolio"); closeMenu(); }}>
            <p>Portfolio</p>
          </AnchorLink>
          {menu==="Portfolio"?<img src={underline} alt='' />:<></>}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#Contact' onClick={() => { setMenu("Contact"); closeMenu(); }}>
            <p>Contact</p>
          </AnchorLink>
          {menu==="Contact"?<img src={underline} alt='' />:<></>}
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className='anchor-link' offset={50} href='#Contact'>
          Connect With Me 
        </AnchorLink>
      </div>
    </div>
  )
}

export default Navbar