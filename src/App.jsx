import './App.css'
import NavBar from './Components/NavBar/NavBar'
import ItemListConteiner from './Components/ItemListConteiner/ItemListConteiner'
import Card from './Components/Cards/Cards'

function App() {

  return (
    <div>
      <NavBar />
      <ItemListConteiner 
      greeting="Bienvenidos"
      />
      <Card
        img ='https://www.nintendo.com/sg/hardware/detail/switch-oled/img/01-bgdark/main_pic.png' alt = 'Nintendo Switch'
        title ='Nintendo Switch Oled'
        description = 'Consola Nintendo Switch modelo Oled color blanca'
        price = {600000}
      />
    </div>
  )
}

export default App
