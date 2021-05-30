import {createContext, useState} from 'react'

export const CartContext= React.createContext()


export const CartProvider = ()=>{

    const [cart, setCart]= useState([])
    const [totalItems, setTotalItems] = useState(0)




    return (
        <CartContext.Provider value={{cart,addItem,removeItem,clear,
                                totalPriceCart,totalItems}} > 
            {children}
        </CartContext.Provider>
    )


}


