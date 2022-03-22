import './nosotros.scss'
import agus from '../../Assets/agus.jpg';
import { Link } from 'react-router-dom';


export const Nosotros = () => {
    return (
        <div className="nosotros_div">
   
                <div className="nosotros_text">
                    <p>Hola, mi nombre es Agustina. <br></br> Desarrolle este proyecto durante el curso se Coder de React. <br></br> Para la realizacion del mismo utilizamos hooks, reac-router-dom, Sass, Boostrap </p>
                    <p></p>
                </div>
                <div>
                <img src={agus}></img>
                </div>
            </div>


          

    )
}
;
export default Nosotros;