import React, { Component } from 'react';
import logo from './imagenes/logo.svg';
import './css/header.css';

class Contenido extends Component {
  render() {
    return (
      <div className="Contenido">
        <h1>Hola {this.props.name}</h1>
        <p>Esto es una prueba de React</p>
        <button>{this.props.boton}</button>
      </div>
    );
  }
}



export default Contenido;

