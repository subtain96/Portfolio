import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
const Navbar = () => {
  const [menu , setMenu] = useState("Home");
  return (
    <div className='navbar'>
        <img src={logo} alt="" />
        <ul className="nav-menu">
          <li><p onClick={()=>setMenu("Home")}>Home</p>{menu==="Home"?<img src={underline} alt=''  />:<></>}</li>
          <li><p onClick={()=>setMenu("About Me")}>About Me</p>{menu==="About Me"?<img src={underline} alt=''  />:<></>}</li>
          <li><p onClick={()=>setMenu("Services")}>Services</p>{menu==="Services"?<img src={underline} alt=''  />:<></>}</li>
          <li><p onClick={()=>setMenu("Portfolio")}>Portfolio</p>{menu==="Portfolio"?<img src={underline} alt=''  />:<></>}</li>
          <li><p onClick={()=>setMenu("Contact")}>Contact</p>{menu==="Contact"?<img src={underline} alt=''  />:<></>}</li>
        </ul>
      <div className="nav-connect">
        Connect With Me
      </div>
    </div>
  )
}

export default Navbar
