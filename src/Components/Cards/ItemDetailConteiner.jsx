import productos.json from '../productos.json';
import "./Cards.css"

const Cards = ({img, title, description, price}) => {
    return (
        <div>
            <img className='img-card' src={img}/>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>$ {price}</p>
        </div>
    )

}

export default Cards;