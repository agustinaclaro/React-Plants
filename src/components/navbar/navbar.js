import logo_white from '../../logo_white.png';
import './navbar.scss';
import { NavLink } from "react-router-dom"
import CardWidgest from '../CartWidgest/CartWidgest';





const Navbar = () => {
  return (
    <header className="container">
      <nav className="navbar" expand="lg">
    
        <ul className="ul-links">
          <li className="item-link" ><NavLink exact to="/">INICIO</NavLink></li>
          <li className="item-link"  ><NavLink to="/products"> PRODUCTOS</NavLink></li>
        </ul>
        <NavLink to={"/cart"}><CardWidgest /> </NavLink>
      </nav>
    </header>

  )
}



export default Navbar;
