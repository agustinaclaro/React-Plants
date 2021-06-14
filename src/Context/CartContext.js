import { createContext } from 'react'
import { useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    const [totalItems, setTotalItems] = useState(0)
    const [order, setOrder] = useState('')

    const addElements = (array) => array.reduce((a, b) => a + b, 0)

    const item = id => cart.find(product => product.item.id === id);

    const addItem = (products, qty) => {
      const newCart = [...cart];

      if(item(products.id)) {
        newCart[newCart.findIndex(product => product.item.id === products.id)].quantity += qty;
        setCart(newCart);
      } else {
        setCart([
          ...newCart,
          {
            item:products,
            quantity: qty
          }
        ])
      }
    
      setTotalItems(totalItems + qty);
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
            cart, addItem, removeItem, clear,
            totalPriceCart, totalItems, item
        }} >
            {children}
        </CartContext.Provider>
    )


}

