import logo from '../../logo.png';
import './navbar.scss';
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <header className="top-header">
       <nav className="nav-bar">
         <img src={logo} className="logo" alt="logo site"/>
         <ul className="ul-links">
           <li className="item-link"><Link to="/">Inicio</Link></li>
           <li className="item-link"><Link to="/products">Nuestros productos</Link></li>
         </ul>
         </nav> 
      </header>
    )
}



export default Navbar;
