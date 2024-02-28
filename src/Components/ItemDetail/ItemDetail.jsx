import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from "../../Context/CartContext";
import './ItemDetail.css'

const ItemDetail = ( {item} ) => {

    const {cart, clickAdd} = useContext(CartContext);
    
    const [cantidad, setCantidad] = useState (1);
        

    const clickSubstract = () => {
        cantidad > 1 && setCantidad (cantidad -1)
    }

    const clickAddition = () => {
        cantidad < item.stock && setCantidad (cantidad + 1)
    }

    return (
        <div className="container">
            <img src={item.img} alt={item.title} />
            <div className="containerInfo">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p>Categoria: {item.category}</p>
                <p>$ {item.price} </p>
                <ItemCount cantidad={cantidad} clickSubstract={clickSubstract} clickAddition={clickAddition} clickAdd={() => {clickAdd (item, cantidad)}}/>
            </div>

        </div>
    )
}

export default ItemDetail
