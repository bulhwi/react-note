import React, { useEffect, useState } from 'react';
import './Nav.css';

const Nav = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    }
  }, []);

  return (
    <nav className={`nav ${show && 'nav__black'}`} >
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/220px-Netflix_2015_logo.svg.png'
        alt='Netflix logo'
        className='nav__logo'
        onClick={() => window.location.reload()}
      />
      <img
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkKxFjG9OSokEaDuj4UDYJBx6ShS8Ugbt_40yQ2Qs2kUWP35d7zQz1LH5XQiYQpIP1uls&usqp=CAU'
        alt='User Logged'
        className='nav__avatar'
      />
    </nav>
  );
};

export default Nav;