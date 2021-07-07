import './ProductDetail.scss'
import { useState, useEffect, useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import ItemCounter from '../ItemCount/ItemCount.js';


const ProductDetail = ({product}) => {
    const { addItem } = useContext(CartContext)
    const [finishAdd,setFinishAdd] = useState(true)
    const [quantity, setQuantity] = useState(0)
    
    const onAdd = (quantity) => {
        setQuantity(quantity)

    }
    const toPay = (qtyandItem)=> {
        addItem(product,qtyandItem)
        setQuantity(0)
    }
    useEffect(() => {
        if (quantity !== 0) {
            setFinishAdd(false)
        } 
    
    }, [quantity])
   
    return (

        <div  className="card-pd container">
            <div className="card-body-pd">
                <h5 className="card-title-pd">{product.title}</h5>
                <p className="card-text-pd">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente iste iure deserunt accusamus bland iste iure deserunt accusamus blanditiis a provident dolorem fugiat laborum ipsum modi amet, quod suscipit veniam. !</p>
                <p className="card-price-pd">precio $:{product.price}</p>

                    { finishAdd  ? 
                < ItemCounter stock={product.stock} initial={1} onAdd={onAdd} />
              :
                       <div className="finishBuy">
                    <button className="btn-finishBuy"onClick={()=>toPay(quantity)}  >terminar la compra</button>
                </div>  
                }
                {(product.stock === 0) && <p className="outOfStock">Sin stock</p>}
            
                    
            </div>
        
            <img src={product.imgUrl} className="card-img-top-pd" alt="..." />


        </div>
    )
};

export default ProductDetail;
