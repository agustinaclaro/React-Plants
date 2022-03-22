
import './item.scss';
import {CartContext} from '../../Context/CartContext'
import{useContext, useState,useEffect } from 'react'
import {Link} from 'react-router-dom'
import ItemCounter from '../ItemCount/ItemCount.js';

const Item = ({item}) => {
  
  const { addItem } = useContext(CartContext)
  const [finishAdd,setFinishAdd] = useState(true)
  const [quantity, setQuantity] = useState(0)
  
  const onAdd = (quantity) => {
      setQuantity(quantity)

  }
  const toPay = (qtyandItem)=> {
      addItem(item,qtyandItem)
      setQuantity(0)
  }
  useEffect(() => {
      if (quantity !== 0) {
          setFinishAdd(false)
      } 
  
  }, [quantity])
    
    return (
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
            <div className="card">
            <Link to= {`/products/${item.id}`}>
                <img src={item.imgUrl} onClick={item.onImageClick} className="card-img-top" alt="..." />
                </Link>
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.price}</p>
                    
                    { finishAdd  ? 
                < ItemCounter stock={item.stock} initial={1} onAdd={onAdd} />
              :
                       <div className="finishBuy">
                    <button className="btn-finishBuy"onClick={()=>toPay(quantity)}  >terminar la compra</button>
                </div>  
                }
                {(item.stock === 0) && <p className="outOfStock">Sin stock</p>}
                
                    </div>
            </div>
        </div>    
    )
};
export default Item;
