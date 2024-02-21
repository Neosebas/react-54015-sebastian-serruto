

const ItemCount = ({cantidad, clickSubstract, clickAddition, clickAdd}) => {

    return (
        <div>
            <div>
                <button onClick={clickSubstract}>-</button>
                <p>{cantidad}</p>
            <button onClick={clickAddition}>+</button>
        </div>
        <button onClick={clickAdd}>Agregar al carrito</button>
    </div>
    );
};

export default ItemCount;
