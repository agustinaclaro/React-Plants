import logo from '../../logo.png';
import './navbar.scss';
import {NavLink} from "react-router-dom"
import CardWidgest from '../CartWidgest/CartWidgest';





const Navbar = () => {
    return (
        <header className="top-header container">
       <nav className="nav-bar">
         <img src={logo} className="logo" alt="logo site"/>
         <ul className="ul-links">
           <li className="item-link" ><NavLink exact to="/">Inicio</NavLink></li>
           <li className="item-link"><NavLink to="/products">Nuestros productos</NavLink></li>
         </ul>
         </nav> 
         <NavLink to ={"/cart"}><CardWidgest /></NavLink>
      </header>
    )
}



export default Navbar;
