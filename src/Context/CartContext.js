import { createContext} from 'react'
import{useState } from 'react'



export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    const [totalItems, setTotalItems] = useState(0)
    
   const addElements = (array) => array.reduce((a,b)=> a + b,0 )
    
    const item= (id) => {
        
        const findItem =cart.findIndex((item) => item.id === id ) 
        return findItem 
    }
    
    const addItem = (product, qty) => {
       
        if (item(product.id) >= 0) {
            cart[item(product.id)].quantity += qty
            item(cart)
        } else {
            setCart([...cart, {
                item:product,
                quantity: qty
              
            }])      
        }
        setTotalItems(totalItems + qty)
    }

    const removeItem = (id, qty) => {
        const newCart = cart.filter(({ item }) => item.id !== id)
        setCart(newCart)
        setTotalItems(totalItems - qty)
    }

    const clear = () => {
        setCart([])
        setTotalItems(0)
    }

    const totalPriceCart = ()=>{
        const newCartSubTotal = cart.map(({item,quantity}) => item.price * quantity)
        return addElements(newCartSubTotal)
    }


    return (
        <CartContext.Provider value={{
            cart, addItem, removeItem, clear,
            totalPriceCart, totalItems, item
        }} >
            {children}
        </CartContext.Provider>
    )


}

