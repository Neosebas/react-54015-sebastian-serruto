import  { useContext, useState } from 'react'
import { CartContext } from '../../Context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../Config/Config';


const Checkout = () => {

  const [orderId, setOrderId] = useState("");

  const { cart, totalPrice, empty } = useContext(CartContext);

  const { register, handleSubmit} = useForm();

  const buy =(data) => {
    const order = {
      buyer: data,
      items: cart,
      total: totalPrice(),
    }
    console.log(order);

    const orderRef = collection (db, "order");
    
    addDoc(orderRef, order)
      .then((doc) => {
        setOrderId(doc.id);
        empty();
      })

  }

  if (orderId) {
    return (
      <div>
        <h2>Gracias por tu compra!</h2>
        <p>Tu numero de orden es: {orderId}</p>
      </div>
    )

  }

  return (
    <div>

      <h1>Finalizar Compra</h1>
      <form onSubmit={handleSubmit(buy)}>

        <input type="text" placeholder='Ingresa tu nombre' {...register("nombre")} />
        <input type="email" placeholder='Ingresa tu e-mail' {...register("email")} />
        <input type="phone" placeholder='Ingresa tu telefono' {...register("telefono")}/>

        <button type='submit'>Comprar</button>

      </form>
      
    </div>
  )
}

export default Checkout

