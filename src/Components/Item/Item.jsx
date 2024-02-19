import './Item.css'
import {Link} from 'react-router-dom';

export default function Item({producto}) {
return (
    <div className="itemConteiner">
        <img src={producto.img} />
        <h2>{producto.title}</h2>
        <p>Precio: $ {producto.price}</p>
        <button><Link to={`Item/${producto.id}`}>Ver mas</Link></button>
    </div>
)
}

