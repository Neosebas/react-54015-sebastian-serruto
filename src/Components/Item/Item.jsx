import './Item.css'
import {Link} from 'react-router-dom';

export default function Item({productos}) {
return (
    <div className="itemConteiner">
        <img src={productos.img} />
        <h2>{productos.title}</h2>
        <p>Precio: $ {productos.price}</p>
        <button><Link to={'/Item/:id'}>Ver mas</Link></button>
    </div>
)
}
