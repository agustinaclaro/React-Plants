import { createContext} from 'react'
import{useState } from 'react'



export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [totalItems, setTotalItems] = useState(0)
    
    const getCartItem=() =>{
        return cart
    } 
    console.log(cart)
    
    const addElements = (array) => {
        return array.reduce((a, b) => a + b, 0)
    }
    
    const isInCart= (id) => {
        
        const findItem =cart.findIndex((product) => product.id === id ) 
        return findItem 
    }
    
    const addItem = (item, qty) => {
       
        if (isInCart(item.id) >= 0) {
            cart[isInCart(item.id)].quantity += qty
            setCart(cart)
        } else {
            setCart([...cart, {
                item:item,
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

    const totalPriceCart = () => {
        const newCartSubTotal = cart.map(({ item, quantity }) => item.price * quantity)
        return addElements(newCartSubTotal)
    }

    return (
        <CartContext.Provider value={{
            cart, addItem,isInCart, removeItem, clear,
            totalPriceCart, totalItems, getCartItem
        }} >
            {children}
        </CartContext.Provider>
    )


}

