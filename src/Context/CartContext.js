import { createContext } from 'react'
import { useState } from 'react'



export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    const [totalItems, setTotalItems] = useState(0)

    const addElements = (array) => array.reduce((a, b) => a + b, 0)


    const item = id => cart.find(product => product.id === id);

    const addItem = (products, qty) => {
      const newCart = [...cart]
      console.log(products)
      console.log(cart.find(product => product.id === product.id))
      if(item(products.id)) {
        console.log('entre en el if')
        console.log(newCart.findIndex(item => item.id === products.id))
        console.log(newCart.indexOf(item => item.id === products.id))
        newCart[newCart.findIndex(item => item.id === products.id)].quantity += qty;
        setCart(newCart);
      } else {
        console.log('entre en else')
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

