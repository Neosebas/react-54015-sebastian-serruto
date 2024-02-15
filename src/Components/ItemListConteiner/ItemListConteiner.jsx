import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductosJson from '../../productos.json';
import ItemList from '../ItemList/ItemList';
import './ItemListConteiner.css'

function asyncMock(categoryId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (categoryId === undefined) {
        resolve (ProductosJson);
      }else {
        const  productsFilter = ProductosJson.filter((item) => {
          return item.category === categoryId;
        })
        if(productsFilter.length === 0) {
          reject ("No products found");
        }

        resolve (productsFilter)
      }
    }, 1000)
  });
}

export const datesById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout (() => {
      
      const productsId = ProductosJson.find((id) = id.id === id)

      if (productsId) {
        resolve (productsId);
      }else {
        reject ({
          error : "Product not found",
        })
        }
      }, 500)
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
