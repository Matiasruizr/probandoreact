import React, { Component } from 'react';
import logo from './imagenes/logo.svg';
import './css/header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header>
        <img src={logo} className="Logo" alt="logo" /> 
          <h1 className="Titulo">Primera aplicación en React</h1> 
         
        </header>
      
        
      </div>
    );
  }
}






export default Header;
