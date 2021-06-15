import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../Context/CartContext"
import './order.scss'


export const OrderBuy = () => {
    
    const { order } = useContext(CartContext)
   
    console.log (order)
    return(
       
        <section className="order">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="order-container">
                         <h1>&#128722;</h1>  
                         <h2>¡Gracias por tu compra! </h2>
                         <h4>Nro de orden: {order} </h4>
                         <h5>Te enviamos un email con el detalle completo</h5>
                         <div className="backHome-button">
                    <Link exact to="/"><button className="btn_backHome">Volver a la home</button></Link>
                    </div>
                    </div>
            
                    
                </div>
            </div>
        </div>
        </section>
    )


}