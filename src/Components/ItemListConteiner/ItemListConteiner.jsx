import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import './ItemListConteiner.css'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../Config/Config';


const ItemListConteiner = ({greeting}) => {
  const {category} = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const productRef = collection(db, 'productos');

    const q = category ? query(productRef, where('category', '==', category)) : productRef;

    getDocs(q)
    .then((resp) => {

      setProductos (
        resp.docs.map ((doc) => {
          return { ...doc.data(),id: doc.id }
        })
      )
    })

  },[category]);

  return (
  
      <main>
          <h1 className='welcome'>{greeting}</h1>
          <ItemList productos={productos} />
      </main>
  
  )
}

export default ItemListConteiner
