
import './App.scss';
import {Navbar} from './components/navbar/navbar'
import {Productos} from './components/products/products'


function App() {
  const Productos =[
    {
      titulo : "Drasena",
      precio: "$1200",

    },

    {
      titulo : "Drasena0",
      precio: "$1200",
      
    },

    {
      titulo : "Drasena1",
      precio: "$1200",
      
    }
    ,
    {
      titulo : "Drasena2",
      precio: "$1200",
      
    },

    {
      titulo : "Drasena3",
      precio: "$1200",
      
    },
    {
      titulo : "Drasena4",
      precio: "$1200",
      
    },
    {
      titulo : "Drasena5",
      precio: "$1200",
      
    },
    {
      titulo : "Drasena6",
      precio: "$1200",
      
    },
    {
      titulo : "Drasena7",
      precio: "$1200",
      
    },
    {
      titulo : "Drasena8",
      precio: "$1200",
      
    },
    {
      titulo : "Drasena9",
      precio: "$1200",
      
    },
    {
      titulo : "Drasena10",
      precio: "$1200",
      
    }
  ]
  return (

    <div className="App">
      <Navbar/>
      <Productos/>
    </div>
  );
}

export default App;
