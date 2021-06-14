import { useState } from "react"
import { Form } from "../form/Form"
import { Cart } from "./CartList"

import "./cart.scss"


export const CartContainer = ( ) => {
  

    const [showForm, setShowForm] = useState(false)

    
    return (

 
        <section className="cart">
            <div className="container">
                <div className="row">
                  
                   { showForm ? 
                    
                        <Form/> :
                        <Cart showForm={showForm} setShowForm={setShowForm} /> 
                        
                   }

                   
               </div> 
            </div>
        </section>

    )

}