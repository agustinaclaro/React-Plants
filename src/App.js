
import './App.scss';
import {Navbar} from './components/navbar/navbar'
import {Cards} from './components/products-card/products'
import {List} from './components/list-product/list'


function App() {
  const products =[
    {
      title : "Drasena",
      price: "$1200",
      imgUrl: '../img/plantas1-0.jpg',
      id:"palnta0"
    },

    {
      title : "Amapola",
      price: "$1200",
      imgUrl: '../img/plantas1-1.jpg',
      id:"palnta1",
    },

    {
      title : "Aleli",
      price: "$1200",
      imgUrl: '../img/plantas1-2.jpg',
      id:"palnta2",
    }
    ,
    {
      title : "Jazmin",
      price: "$1200",
      imgUrl: '../img/plantas1-3.jpg',
      id:"palnta3",
      
    },

    {
      title : "Cactus",
      price: "$1200",
      imgUrl: '../img/plantas1-4.jpg',
      id:"palnta4",
    },
    {
      title : "Potus",
      price: "$1200",
      imgUrl: '../img/plantas1-5.jpg',
      id:"palnta5",
      
    },
    {
      title : "Rosa",
      price: "$1200",
      imgUrl: '../img/plantas1-6.jpg',
      id:"palnta6"
      
    },
    {
      title: "Estrella Federal",
      price: "$1200",
      imgUrl: '../img/plantas1-7.jpg',
      id:"palnta7",
      
    },
    {
      title : "Croto",
      price: "$1200",
      imgUrl: '../img/plantas1-8.jpg',
      id:"palnta8",
      
    },
    {
      title : "Melisa",
      price: "$1200",
      imgUrl: '../img/plantas1-9.jpg',
      id:"palnta9",
      
    },
    {
      title : "Penca",
      price: "$1200",
      imgUrl: '../img/plantas1-10.jpg',
      id:"palnta10"
      
    },
    {
      title : "Look",
      price: "$1200",
      imgUrl: '../img/plantas1-11.jpg',
      id:"palnta11",
      
    }
  ]
  return (

    <div className="App">
      <Navbar/>
      <List products={Cards}/>
    </div>
      );
}

export default App;
