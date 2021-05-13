import logo from '../../logo.png';

import './navbar.scss';
import { Link } from "react-router-dom"
import CardWidgest from '../CartWidgest/CartWidgest';


const Navbar = () => {
    return (
        <header className="top-header container">
       <nav className="nav-bar">
         <img src={logo} className="logo" alt="logo site"/>
         <ul className="ul-links">
           <li className="item-link"><Link to="/inicio">Inicio</Link></li>
           <li className="item-link"><Link to="/products">Nuestros productos</Link></li>
         </ul>
         </nav> 
         <CardWidgest/>
      </header>
    )
}



export default Navbar;
