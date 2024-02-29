import "./ItemDetailConteiner.css"
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc } from 'firebase/firestore';
import { db } from "../../Config/Config";

const ItemDetailConteiner = () => {

    const [item, setItem] = useState(null);
    const id = useParams().id;

    useEffect(() => {
        
        const docRef = doc(db, "productos", id);
        getDoc(docRef)
        .then ((resp) => {
            setItem(
                {...resp.data(), id: resp.id}
            );
        })
        

    },[id]);

    return (
        <>
            {item && <ItemDetail item={item}/>}
        </>
    )

}

export default ItemDetailConteiner;