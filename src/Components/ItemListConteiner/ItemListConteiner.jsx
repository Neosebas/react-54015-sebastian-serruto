import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import productosJson from '../../productos.json';
import ItemList from '../ItemList/ItemList';
import './ItemListConteiner.css'

function asyncMock(categoryId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (categoryId === undefined) {
        resolve (productosJson);
      }else {
        const  productsFilter = productosJson.filter((item) => {
          return item.category === categoryId;
        })
        if(productsFilter.length === 0) {
          reject ("No products found");
        }

        resolve (productsFilter)
      }
    }, 1000);
  });
}


const ItemListConteiner = ({greeting}) => {
  const {categoryId} = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    asyncMock(categoryId)
    .then((res) => setProductos(res))
    .catch ((rej) => console.log (rej)); 
  },[categoryId]);

  return (
  
      <main>
          <h1 className='welcome'>{greeting}</h1>
          <ItemList productos={productos}/>
      </main>
  
  )
}

export default ItemListConteiner
