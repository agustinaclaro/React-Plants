 const CategoryLink =() =>{
     return(
         <ul>
        <li className="category_item-link" ><NavLink  to="/category/cactus">Cactus</NavLink></li>
       <li className="category_item-link" ><NavLink  to="/category/crasas">Crasas</NavLink></li>
       <li className="category_item-link" ><NavLink  to="/category/bonsai">bonsai</NavLink></li>

         </ul>
    
     )
 }
 export default CategoryLink;