import cart from  '../../cart.png';



const CardWidgest =(props)=>{
    return (
        <div className="nav-cart">
           <input type="text" id="input-navbar" className="in-navbar" placeholder="buscar" />
           <button id="cart-button" className="btn-cart" data-toggle="modal">
               <a><img src={cart} className="logo-cart" alt ="logo cart" /></a>
               <p className="numberCountCart">{props.count}</p>
            </button>
         </div>
    )
}
export default CardWidgest;