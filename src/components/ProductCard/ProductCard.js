
import './products.scss';


const ProductCard = (props) => { 
    let addToCartText= "AÑADIR"

  
    return (
        <div id={props.id} className="card">
            <img src={props.imgUrl} onClick={props.onImageClick} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.price}</p>
                <input
                    type="button"
                    className="btn-card"
                    value={addToCartText}
    
                />   
                
            </div>
        </div>
    )
};
export default ProductCard;
