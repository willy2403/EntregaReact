import './App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/Navbar/ItemListContainer'


function App() {
  return (
    <div>
      
      <Navbar/>
      <ItemListContainer greeting="Hola, Bienvenido a mi Ecommers!"/>
    </div>
  )
}

export default App
