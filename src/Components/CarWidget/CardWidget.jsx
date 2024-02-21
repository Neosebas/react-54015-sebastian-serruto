import { useContext } from "react";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

const CardWidget = () => {

    const {quantityInCart} = useContext (CartContext)

    return (
    <div>
        <Link to="/cart" ><BsCart2 /><strong> {quantityInCart()}</strong></Link>      
    </div>
    )
}

export default CardWidget;

