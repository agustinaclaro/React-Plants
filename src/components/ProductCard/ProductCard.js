import { useState} from 'react';
import './products.scss';


const ProductCard = (props) => {
    const [addToCartText, setAddtoCartText] = useState('AÑADIR');   
     function changeBtnColor() {
        if(addToCartText == 'AÑADIR'){
            setAddtoCartText('REMOVE')
        document.getElementsByClassName('btn-card').style.backgroundColor = "red";
    } else {  
        setAddtoCartText('AÑADIR')
        document.getElementsByClassName('btn-card').style.backgroundColor ="#1ca704";
    }
}
  
    return (
        <div id={props.id} className="card">
            <img src={props.imgUrl} onClick={props.onImageClick} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.price}</p>
                <button
                    className="btn-card"
                    value={addToCartText}
                    onClick={changeBtnColor}
                >   
                </button>
            </div>
        </div>
    )
};
export default ProductCard;
