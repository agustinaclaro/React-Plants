  
import { Fragment, useContext, useEffect, useState } from "react"
import { Input } from "../input/input"
import { CartContext } from "../../Context/CartContext"
import { getFirestore } from "../../firebase"
import firebase from 'firebase/app'
import { Link } from "react-router-dom"
import './form.scss'

export const Form = () => {

    const { cart,  setCart,  totalPriceCart, setOrder, clear } = useContext(CartContext)

    const [form, setForm] = useState ({
        name: '', surname: '', email:'', phone: ''
    })

    const [isDisabled, setIsDisabled] = useState(true)
   
    const formFields = [
        {
            id: 'name',
            label: 'Nombre',
            value: form.name,
            type: "text",
            placeholder: "Nombre"
          
        },
        {
            id: 'surname',
            label: 'Apellido',
            value: form.surname,
            type: "text",
            placeholder: "Apellido"
        },
        {
            id: 'email',
            label: 'Correo Electrónico',
            value: form.email,
            type: "email",
            placeholder: "Email"
          
        },
        {
            id: 'phone',
            label: 'Teléfono',
            value: form.phone,
            type: "text",
            placeholder: "Teléfono"
          
        }

    ]

    const stockUpdate = async () => {
        const db = getFirestore()
        const batch = db.batch()

        cart.forEach((product) => {
            const productRef = db.collection('products').doc(product.id)
            batch.update(productRef, { stock: product.stock - product.quantity})
        })

        batch.commit().then( (r) => console.log(r)  )

         setCart([])
    }

    const { name, surname, phone, email } = form

    const handleForm = (id, value) => {
       
        const newForm = { ...form, [id]: value }
        setForm(newForm)
    }
   

    const orderCart = () => {
        
        const db = getFirestore()
        const ordersCollection = db.collection("orders").add( { 
            
            buyer: {name, surname, email, phone},
          cart,
        
            total: totalPriceCart()

           
        }).then(({id})=> {
            setOrder(id) ;
            clear();
            
        
        }).catch((error) => {
            console.log('Hubo un error al crear la orden', error);
        }).finally(stockUpdate())
       
            
    }



    useEffect ( () => {

      let patternName = /^[a-zA-Z- ]*$/
      let patternEmail = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
      let patternPhone = /^[0-9- ]{8,15}$/
      const disableButton = (!patternName.test(name) || !patternName.test(surname) || !patternEmail.test(email) || !patternPhone.test(phone) || [name.trim(), surname.trim(), email.trim(), phone.trim()].includes(''))

        setIsDisabled(disableButton)
      
    },[form])

    return (
        <Fragment>
        <div className="cart-form-container ">  
            <div className="cart-total">            
                <h5>Total: ${totalPriceCart()} </h5> 
            </div>
            <div className="text-cart-form">
                <p>Completá tus datos para confirmar tu compra</p>
            </div>
            <form className="form">
               
                 {formFields.map(({ id, label, value, type, placeholder }) => (
                        <Input 
                            key={id} id={id} label={label} value={value} type={type} onChange={handleForm} placeholder={placeholder}
                        />  
                  ) )} 
                    
            </form> 
            <div className="button-finish-container">
           
            <Link to="/cartCheckOut">
           <button type="submit" className="btn_submit" onClick={orderCart} disabled={isDisabled}>CONFIRMAR COMPRA</button>
           </Link>
            </div>    
        </div>          
        </Fragment>
               

    )
 }