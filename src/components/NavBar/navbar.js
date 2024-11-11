import React, { useState } from 'react'; 
import { Link as RouterLink } from 'react-router-dom';
import './navbar.css';
import logo from '../../assets/ShellehMark.png';
import contactImg from '../../assets/contact.png';
import menu from '../../assets/menu.png';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className='logo' />
      <div className="desktopMenu">
        <RouterLink to="/" className="desktopMenuListItem">Home</RouterLink>
        <RouterLink to="/about" className="desktopMenuListItem">About</RouterLink>
        <RouterLink to="/works" className="desktopMenuListItem">Projects</RouterLink>
        <RouterLink to="/services" className="desktopMenuListItem">Services</RouterLink>
      </div>
      <button className="desktopMenuBtn">
        <RouterLink to="/contact">
          <img src={contactImg} alt="Contact" className="desktopMenuImg" /><span>Contact Us</span>
        </RouterLink>
      </button>

      <img src={menu} alt="Menu" className='mobMenu' onClick={() => setShowMenu(!showMenu)} />
      <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
        <RouterLink to="/" onClick={() => setShowMenu(false)} className="listItem">Home</RouterLink>
        <RouterLink to="/about" onClick={() => setShowMenu(false)} className="listItem">About</RouterLink>
        <RouterLink to="/works" onClick={() => setShowMenu(false)} className="listItem">Projects</RouterLink>
        <RouterLink to="/services" onClick={() => setShowMenu(false)} className="listItem">Services</RouterLink>
        <RouterLink to="/contact" onClick={() => setShowMenu(false)} className="listItem">Contact</RouterLink>
      </div>
    </nav>
  );
};

export default Navbar;
