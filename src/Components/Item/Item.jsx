import './Item.css'
import {Link} from 'react-router-dom';

export default function Item({producto}) {
return (
    <div className="itemConteiner">
        <div className='imgProduct'><img src={producto.img} /></div>
        <div className='h2Product'><h2>{producto.title}</h2></div>
        <div>
            <p>Precio: $ {producto.price}</p>
        <   button><Link to={`Item/${producto.id}`}>Ver mas</Link></button>
        </div>
    </div>
)
}

