
import './App.css';
import logo from '../img/ ';

function App() {
  return (
    <div className="App">
      <header className="top-header">
       <p className="top-title">Taller de arte</p>
       <nav className="nav-bar">
         <img src={logo} className="logo" alt="logo site"/>
         <ul className="ul-links">
           <li className="item-link"><a href="" >Inicio</a></li>
           <li className="item-link"><a href="" >Nuestros productos</a></li>
           <li className="item-link"><a href="" >Contacto</a></li>
         </ul>
         </nav> 
        
      </header>
    </div>
  );
}

export default App;
