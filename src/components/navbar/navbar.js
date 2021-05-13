import logo from '../../logo.png';
import cart from  '../../cart.png';
import './navbar.scss';
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <header className="top-header">
       <nav className="nav-bar">
         <img src={logo} className="logo" alt="logo site"/>
         <ul className="ul-links">
           <li className="item-link"><Link to="/inicio">Inicio</Link></li>
           <li className="item-link"><Link to="/products">Nuestros productos</Link></li>
         </ul>
         </nav> 
         <div>
           <input type="text" placeholder="search" />
         <button id="cart-button" type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal">
               <img src={cart} className="logo-cart" alt ="logo cart" />
            </button>
         </div>
      </header>
    )
}



export default Navbar;
