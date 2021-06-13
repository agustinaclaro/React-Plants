import { createContext,useState} from 'react'
import emailjs from 'emailjs-com'
import stages from '../service/stages.json'


export const OrderContext = createContext()

export const OrderProvider = ({children}) => {
    
    const [order,setOrder] = useState()
    const [finishOrder,setFinishOrder] = useState(false)


    const stageSelected = (routeNow)=>{
    const  stagesFind = stages.find(({route}) => route === routeNow)
    return stagesFind.idStage

    }

    const loading = (value) => setFinishOrder(value) 

    const addOrder = (order) => order !== undefined ? setOrder(order) : false 

    const sendEmail = (e) => {
        const newOrder= {name: e.buyer.name,
                        mail: e.buyer.mail,
                        total:e.total,
                        id:e.id,
                        }

        setFinishOrder(true)
        emailjs.send('fer.altavista5', 'template_obz1a5v',newOrder, 'user_476Ts68iF4lxbX30SrGtG')
            .then((result) => {
            setFinishOrder(false)
            }, (error) => {
            console.log('Error')
            });
        
    }


    return(
        <OrderContext.Provider value={{stageSelected,addOrder,order,sendEmail,finishOrder,loading}}>
            {children}
        </OrderContext.Provider>
    )
}