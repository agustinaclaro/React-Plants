
import './App.scss';
import {Navbar} from './components/navbar/navbar'
import {Products} from './components/products/products'


function App() {
  const products =[
    {
      title : "Drasena",
      price: "$1200",

    },

    {
      title : "Drasena0",
      price: "$1200",
      
    },

    {
      title : "Drasena1",
      price: "$1200",
      
    }
    ,
    {
      title : "Drasena2",
      price: "$1200",
      
    },

    {
      title : "Drasena3",
      price: "$1200",
      
    },
    {
      title : "Drasena4",
      price: "$1200",
      
    },
    {
      title : "Drasena5",
      price: "$1200",
      
    },
    {
      title: "Drasena6",
      price: "$1200",
      
    },
    {
      title : "Drasena7",
      price: "$1200",
      
    },
    {
      title : "Drasena8",
      price: "$1200",
      
    },
    {
      title : "Drasena9",
      price: "$1200",
      
    },
    {
      title : "Drasena10",
      price: "$1200",
      
    }
  ]
  return (

    <div className="App">
      <Navbar/>
      {Productos.map ((products)=>
      <Products
      title= {product.title}
      price= {product.price}
      />
      )}
    </div>
  );
}

export default App;
