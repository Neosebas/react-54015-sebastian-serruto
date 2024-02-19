import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({productos}) => {
return (
    <div>
        <section> 
            {productos.map( producto => (
                <Item producto={producto}  key={producto.id}/>
            ))}
        
        </section>
    </div>
)
}

export default ItemList
