   
import {Message} from '../Message/message'

export const Error = () =>{
    return(
        <Message text="Error 404. La ruta no corresponde a esta pagina"
                type="error">
        </Message>
    )
}