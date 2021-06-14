import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/cartContext"

import "./orderBuy.scss"

export const OrderBuy = (  ) => {

    const { order } = useContext(CartContext)
   
    
    console.log ("orderID", order)
    return(
       
        <section className="order">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="order-container">
                         <h1>&#125682;</h1>  
                         <h2>¡Gracias por tu compra! </h2>
                       
                       
                         <h5>Nro de orden: {order} </h5>

                         <h6>Te enviamos un email con el detalle completo</h6>
                         <div className="backHome-button">
                    <Link exact to="/"><button>Volver a la home</button></Link>
                    
                    </div>
                    </div>
            
                    
                </div>
            </div>
        </div>
        </section>
    )


}