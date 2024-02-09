import './Item.css'

export default function Item({productos}) {
return (
    <div key={productos.Id} className="itemConteiner">
        <img src={productos.img} />
        <h2>{productos.title}</h2>
        <p>Precio $ {productos.price}</p>
        <button>Ver mas</button>
    </div>
)
}
