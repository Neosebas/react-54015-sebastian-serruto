import "./ItemDetailConteiner.css"

const ItemDetailConteiner = ({img, title, description, price}) => {
    return (
        <div>
            <img className='img-card' src={img}/>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>$ {price}</p>
        </div>
    )

}

export default ItemDetailConteiner;