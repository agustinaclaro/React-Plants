import './ItemCount.scss'
import {useState} from 'react'

const ItemCounter =({stock,initial,})=>{   

    const [count, setCount] = useState(initial)
        
        const increment = () =>  { if (count < stock) {
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

             
            </div>
        )
    }


    export  default  ItemCounter;