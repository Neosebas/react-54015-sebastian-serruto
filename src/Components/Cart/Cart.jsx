import { useContext } from "react"
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import './Cart.css'



const Cart = () => {

    const { cart, totalPrice, empty } = useContext(CartContext);
    
    const emptyCart = () => {
        empty();
    }


  return (
    <div className="containerCart">

      {
        cart.map ((prod) => (
            <div key={prod.id} className="product">
            <h3>{prod.title}</h3>
            <p>Precio unitario: $ {prod.price}</p>
            <p>Cantidad: {prod.cantidad}</p>
            <p>Precio Total : $ {prod.price * prod.cantidad}</p>
            </div>
        ))
      }

    { 
        cart.length > 0 ?
        
        <>
        <h2>Precio Total: $ {totalPrice()}</h2> 

        <div className="buttons">
          <button onClick={emptyCart}>Vaciar Carrito</button>

          <Link to="/cart/checkout">Finaliza tu compra</Link>
        </div>
      

        </> :

        <h2>Su carrito esta vacio</h2>
    }

    </div>
  )
}

export default Cart
