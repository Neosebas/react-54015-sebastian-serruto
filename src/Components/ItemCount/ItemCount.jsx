import './ItemCount.css';

const ItemCount = ({cantidad, clickSubstract, clickAddition, clickAdd}) => {

    return (
        <div className='containerCount'>
            <div className="count">
                <button onClick={clickSubstract}>-</button>
                <p>{cantidad}</p>
            <button onClick={clickAddition}>+</button>
        </div>
        <button onClick={clickAdd}>Agregar al carrito</button>
    </div>
    );
};

export default ItemCount;
