import { useState } from "react"
import { Form } from "../form/form"
import { Cart } from "../Cart/Cart"
import './CartContainer.scss'



export const CartContainer = ( ) => {
  

    const [showForm, setShowForm] = useState(false)

    
    return (

 
        <section className="cart">
            <div className="container">
                <div className="colum">
                  
                   { showForm ? 
                    
                        <Form/> :
                        <Cart showForm={showForm} setShowForm={setShowForm} /> 
                        
                   }
                   
               </div> 
            </div>
        </section>

    )

}