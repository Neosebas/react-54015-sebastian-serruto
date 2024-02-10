import "./ItemDetailConteiner.css"
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import  datesById  from "../ItemListConteiner/ItemListConteiner";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailConteiner = () => {

    const [item, setItem] = useState(null);
    const id = useParams().id;

    useEffect(() => {
        datesById(Number(id))
        .them ((res) =>{
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