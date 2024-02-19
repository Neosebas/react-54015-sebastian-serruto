import "./ItemDetailConteiner.css"
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { datesById } from "../Data/DatesById";

const ItemDetailConteiner = () => {

    const [item, setItem] = useState(null);
    const id = useParams().id;

    useEffect(() => {
        datesById(Number(id))
        .then ((res) =>{
            setItem(res);
        })

    },[id]);

    return (
        <div>
            {item && <ItemDetail item={item}/>}
        </div>
    )

}

export default ItemDetailConteiner;