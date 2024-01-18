import logo from '../images/logo.png';
import './Navbar.css';
import './MobileResponsiveNav.css';
import {React, useRef, useState} from 'react';
// import './MobileResponsiveNav.css'
import { BsList } from "react-icons/bs";


function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
      setIsMenuOpen(!isMenuOpen);
    };
    const navRef = useRef();

    return(
    
      <>
      <div className="navbar">
        <img id="logo" src={logo} alt="" />
        <div className="MenuIcon">
        <BsList id='hamburger'  className='hamburger' onClick={handleMenuToggle}/>
  
        </div>
        <form className='navSearch'>
          <input type="search" action="" className="search" placeholder="Search"/>
        </form>
  
        <div className={`NavOption MenuToggle ${isMenuOpen ? '' : 'hidden'}`} >
          <ul className='NavLinks'>
            <li><a href="/#">Home</a></li>
            <li><a href="/#">English</a></li>
            <li><a href="/#">Become A seller</a></li>
            <li><a href="/#">Sign In</a></li>
          </ul>
          <button className="btn">Join</button>
        </div>
  
      </div>
      </>
      );
}

export  {Navbar};