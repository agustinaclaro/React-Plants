import './products.scss'

export const Card= (props) => {
    const addToCartText = 'Añadir al carrito';
    return (
        <div className="card-group">
            <div id={props.id} className="card">
                <img src={props.imgUrl} className="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">{props.price}</p>
                    <button class="btn btn-primary btn-sm add-btn-js">{addToCartText}</button>
                </div>
            </div>
        </div>
        );
}

