import {useState} from 'react'
const ItemCounter =({stock,initial,onAdd})=>{   
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
    
        return (   
            <div>
                   <div className="buttonAddContainer">
                    <button className="buttonAdd" onClick={() => {onAdd(count)
                        setCount(1)}}>AGREGAR AL CARRITO</button>
                </div>
                <div className="btn-productDetail">
                        <input type="button" value="-" className="btn-addProduct increment" onClick={decrement}/>
                        <span className="btn-text numberCount" >{count}</span>
                        <input type="button" value="+" className="btn-addProduct decrement" onClick={increment}/>
                    </div>

             
            </div>
        )
    }


    export  default  ItemCounter;