import logo from '../../../img/logo.png'

export const Navbar = () => {
    return (
        <header className="top-header">
       <nav className="nav-bar">
         <img src={logo} className="logo" alt="logo site"/>
         <ul className="ul-links">
           <li className="item-link"><a href="" >Inicio</a></li>
           <li className="item-link"><a href="" >Nuestros productos</a></li>
           <li className="item-link"><a href="" >Contacto</a></li>
         </ul>
         </nav> 
      </header>
    )
}