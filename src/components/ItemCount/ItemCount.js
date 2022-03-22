import './ItemCount.scss'
import {CartContext} from '../../Context/CartContext'
import {useState, useContext} from 'react'


const ItemCounter =({stock,initial,onAdd})=>{   
    const { addItem } = useContext(CartContext)
    const [count, setCount] = useState(initial)
        
        const increment = ({}) =>  { if (count < stock) {
            setCount(count + 1)
            stock =- 1
        }
        }
        const decrement = () =>  { if (count > initial)  {
            setCount(count - 1) 
            stock =+ 1
        } else {
            setCount(1)
        }
        }
        const disabledButtonAdd = () => count === 0
    
        return (   
            <div>
                <div className="btn-productDetail">
                        <input type="button" value="-" className="btn-addProduct increment" disabled={disabledButtonAdd()} onClick={decrement}/>
                        <span className="btn-text numberCount" >{count}</span>
                        <input type="button" value="+" className="btn-addProduct decrement"disabled={disabledButtonAdd()} onClick={increment}/>
                    </div>
                    <div className="buttonAddContainer">
                    <button className="buttonAdd" onClick={() => {onAdd(count)}} > Agregar al carrito </button>
                </div>

             
            </div>
        )
    }


    export  default  ItemCounter;