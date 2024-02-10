import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({productos}) => {
return (
    <div>
        <section> 
            {productos.map( productos => (
                <Item productos={productos}  key={productos.Id}/>
            ))}
        
        </section>
    </div>
)
}

export default ItemList
