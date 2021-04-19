
import './App.scss';
import {Navbar} from './components/navbar/navbar'
import {Product} from './components/products/products'


function App() {
  const products =[
    {
      title : "Drasena",
      price: "$1200",
    
    },

    {
      title : "Amapola",
      price: "$1200",
      
    },

    {
      title : "Aleli",
      price: "$1200",
      
    }
    ,
    {
      title : "Jazmin",
      price: "$1200",
      
    },

    {
      title : "Cactus",
      price: "$1200",
      
    },
    {
      title : "Potus",
      price: "$1200",
      
    },
    {
      title : "Rosa",
      price: "$1200",
      
    },
    {
      title: "Estrella Federal",
      price: "$1200",
      
    },
    {
      title : "Croto",
      price: "$1200",
      
    },
    {
      title : "Melisa",
      price: "$1200",
      
    },
    {
      title : "Penca",
      price: "$1200",
      
    },
    {
      title : "Look",
      price: "$1200",
      
    }
  ]
  return (

    <div className="App">
      <Navbar/>
      {products.map ((product )=> (
      <Product
      title= {product.title}
      price= {product.price}
      />
      ))}
    </div>
  );
}

export default App;
