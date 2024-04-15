import React from 'react'
import './style/navbar.css'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom';
const NavBar = () => {
    const scrollToBottom = () => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      };
    return (
        <>
            <div className="containere">
                <img className='logo' src={logo} />
                <div className="rightside">
                    <Link to="/" className='NavBtn1'>HOME</Link>
                    <button className='NavBtn2' onClick={scrollToBottom}>CONTACT US</button>
                    <Link to="/login" className='LoginBtn'>Login</Link>
                    <Link to="/register" className='LoginBtn'>SigneUp</Link>

                </div>
            </div>
        </>
    )
}

export default NavBar