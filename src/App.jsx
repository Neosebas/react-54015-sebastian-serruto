import './App.css'
import NavBar from './Components/NavBar/NavBar'
import ItemListConteiner from './Components/ItemListConteiner/ItemListConteiner'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailConteiner from './Components/ItemDetailConteiner/ItemDetailConteiner'

function App() {

  return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={ <ItemListConteiner greeting="Bienvenido a tu tienda gamer on line" />} />
          <Route path='/categoria/:categoryId' element={ <ItemListConteiner />} />
          <Route path='/item/:id' element={ <ItemDetailConteiner />} /> 
        </Routes>
      </BrowserRouter>



  )
}

export default App
