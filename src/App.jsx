import './App.css'
import NavBar from './Components/NavBar/NavBar'
import ItemListConteiner from './Components/ItemListConteiner/ItemListConteiner'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailConteiner from './Components/ItemDetailConteiner/ItemDetailConteiner'
import { CartProvider } from './Context/CartContext'
import Cart from './Components/Cart/Cart'
import Checkout from './Components/Checkout/Checkout'
import Footer from './Components/Footer/Footer'


function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={ <ItemListConteiner greeting="Bienvenido a tu tienda gamer online" />} />
          <Route path='/categoria/:category' element={ <ItemListConteiner />} />
          <Route path='/item/:id' element={ <ItemDetailConteiner />} /> 
          <Route path='/categoria/:category/Item/:id' element={ <ItemDetailConteiner />} />
          <Route path='/cart/' element={ <Cart />} />
          <Route path='/cart/checkout/' element={ <Checkout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
