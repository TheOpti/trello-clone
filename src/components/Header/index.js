import React from 'react';

import logo from '../../logo.svg';

import './styles.css';


function Header() {
  return (
    <header className="header">
      <img src={logo} className="header__logo" alt="logo" />
      <h1 className="header__title">Welcome to React</h1>
    </header>
  )
}

export default Header;