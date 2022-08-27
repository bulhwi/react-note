import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  const [show, handleShow] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener('scroll', () => {
      });
    };
  }, []);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
  }

  return (
    <nav className={`nav ${show && 'nav__black'}`}>
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/220px-Netflix_2015_logo.svg.png'
        alt='Netflix logo'
        className='nav__logo'
        onClick={() => navigate("/")}
      />

      <input type='text'
             value={searchValue}
             onChange={ handleChange }
             className="nav__input"
             placeholder="영화를 검색해 주세요."
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