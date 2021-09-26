import { NavLink } from "react-router-dom"
import './CategoryLink.scss'

const CategoryLink = () => {
    return (
    
        <ul className="category_list ">
            <li className="category_item-link">
                <NavLink to="/category/cactus">Cactus</NavLink>
            </li>
            <li className="category_item-link">
                <NavLink to="/category/crasas">Crasas</NavLink>
            </li>
            <li className="category_item-link">
                <NavLink to="/category/bonsai">Bonsai</NavLink>
            </li>
        </ul>
    )
}
export default CategoryLink;