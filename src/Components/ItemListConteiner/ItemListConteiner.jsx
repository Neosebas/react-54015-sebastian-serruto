import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import productosJson from '../../productos.json';
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
        resolve (productsFilter)
      };
    }, 1000);
  });
};


const ItemListConteiner = ({greeting}) => {
  const {categoryId} = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    asyncMock(categoryId).then((res) => setProductos(res));
  },[categoryId]);

  return (
  
      <main>
          <h1 className='welcome'>{greeting}</h1>
          <section>
          
            {productos.map((item) => (
              <div key={item.id}>
              <img src={item.img} />
              <h2>{item.title}</h2>
              <p>Precio $ {item.price}</p>
              </div>
            ))};
        
          </section>
      </main>
  
  )
}

export default ItemListConteiner
