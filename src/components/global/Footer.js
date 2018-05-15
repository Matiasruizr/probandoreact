import React, { Component } from 'react';
import logo from './imagenes/logo.svg';
import './css/header.css';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <header>
        <img src={logo} className="Logo" alt="logo" /> 
          <h1 className="Titulo">Hasta luego!</h1> 
         
        </header>
      
        
      </div>
    );
  }
}



export default Footer;
