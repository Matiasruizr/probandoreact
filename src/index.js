import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/global/Header';
import Contenido from './components/global/Contenido';
import Footer from './components/global/Footer'; 



// 
class App extends React.Component {
  render(){
    return(
      <div className="App">
      <Header />
      <Contenido name="Matias" boton="Soy un boton"/>
      <Footer />
      </div>
    );

  }
}

export default App;

ReactDOM.render(
  <App/>,
  document.getElementById('root'));