
const ItemDetail = ({item}) => {
  return (
    <div>
        <img src={item.img} alt={item.title} />
        <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>Categoria: {item.category}</p>
            <p>$ {item.price} </p>
        </div>

    </div>
  )
}

export default ItemDetail
