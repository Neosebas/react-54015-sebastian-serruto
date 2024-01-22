const Cards = ({img, title, description, price}) => {
    return (
        <div>
            <img src={img}/>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>$ {price}</p>
        </div>
    )

}

export default Cards;