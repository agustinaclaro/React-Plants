import logo_white from '../../logo_white.png';
import './navbar.scss';
import { NavLink } from "react-router-dom"
import CardWidgest from '../CartWidgest/CartWidgest';





const Navbar = () => {
  return (
    <header>
   <nav className="navbar container">
   
    <NavLink  to= '/'><img src={logo_white} className="logo_white " alt="logo site"/>pequeño respiro</NavLink>  
    
     <ul className="ul-links">
       <li className="item-link" ><NavLink exact to="/">Inicio</NavLink></li>
       <li className="item-link"  ><NavLink to="/products"> productos</NavLink></li>
       <li className="item-link" ><NavLink exact to="/category/">Cactus</NavLink></li>
       <li className="item-link" ><NavLink exact to="/category/crasas">Crasas</NavLink></li>
       <li className="item-link" ><NavLink exact to="/category/bonsai">bonsai</NavLink></li>

     </ul>
     </nav> 
     <NavLink to ={"/cart"}><CardWidgest /> </NavLink>
  </header>
   
    )
}



export default Navbar;
