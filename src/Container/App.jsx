import './App.css'
import Navbar from '../Components/navbar/Navbar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Store from '../Pages/Store';
import ShopCategory from '../Pages/ShopCategory';
import Product from '../Pages/Product';
import Cart from '../Pages/Cart';
import Login from '../Pages/Login';
import Footer from '../Components/footer/Footer';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' element={<Store/>}/>
            <Route path='/men' element={<ShopCategory category="men"/>}/>
            <Route path='/women' element={<ShopCategory category="women"/>}/>
            <Route path='/kids' element={<ShopCategory category="kids"/>}/>
            <Route path='/product' element={<Product/>}>
              <Route path=':productId' element={<Product/>}/>
            </Route>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App;
