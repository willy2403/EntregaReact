import './App.css'
import Home from './components/Home/home'
import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import CartContent from './components/CartContent/CartContent'
import ProductList from './components/ProductList'
import ItemListContainer from './components/Navbar/ItemListContainer'

function App() {
  const [Products, setProducts] = useState ([]);

  useEffect(() => {
    fetch("../data.json")
    .then(res => res.json())
    .then(data => setProducts(data));
  }, []);
  return (
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<CartContent/>} />
        <Route path='/product' element={<ProductList Products={Products}/>} />
      </Routes>
  );
}

export default App;
