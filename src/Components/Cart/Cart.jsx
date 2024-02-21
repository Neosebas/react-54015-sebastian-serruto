import { useContext } from "react"
import { CartContext } from "../../Context/CartContext";



const Cart = () => {

    const { cart, totalPrice, empty } = useContext(CartContext);
    
    const emptyCart = () => {
        empty();
    }


  return (
    <div>

      {
        cart.map ((prod) => (
            <div key={prod.id}>
            <h3>{prod.title}</h3>
            <p>Precio unitario: $ {prod.price}</p>
            <p>Cantidad: {prod.cantidad}</p>
            <p>Precio Total : $ {prod.price * prod.cantidad}</p>
            <br />
            </div>
        ))
      }

    { 
        cart.length > 0 ?
        
        <>
        <h2>Precio Total: $ {totalPrice()}</h2> 

        <button onClick={emptyCart}>Vaciar Carrito</button>
        </> :

        <h2>Su carrito esta vacio</h2>
    }

    </div>
  )
}

export default Cart
