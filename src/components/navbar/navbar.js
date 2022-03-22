
import './navbar.scss';
import { NavLink } from "react-router-dom"
import CardWidgest from '../CartWidgest/CartWidgest'
import logo from '../../Assets/logo_white.png'


const Navbar = () => {
  return (
    <header>
      <nav className="navbar container-fluid">
        <img src={logo} className="navbar_logo"></img>
        <ul className="ul-links">
          <li className="item-link" ><NavLink exact to="/">INICIO</NavLink></li>
          <li className="item-link" ><NavLink to="/products">PRODUCTOS</NavLink></li>
          <li className="item-link"><NavLink to="/nosotros">NOSOTROS</NavLink></li>
        </ul>
        <NavLink to={"/cart"}><CardWidgest /> </NavLink>
      </nav>
    </header>

  )
}




export default Navbar;
