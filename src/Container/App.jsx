import './App.css'
import Navbar from '../Components/navbar/Navbar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Store from '../Pages/Store';
import ShopCategory from '../Pages/StoreCategory';
import Product from '../Pages/Product';
import Cart from '../Pages/Cart';
import SignUp from '../Pages/SignUp';
import Login from '../Pages/Login';
import Footer from '../Components/footer/Footer';
import menBanner from '../Components/assets/banners/bannerMen_img.png';
import womenBanner from '../Components/assets/banners/bannerWomen_img.png';
import kidsBanner from '../Components/assets/banners/bannerKids_img.png';


function App() {

  const [route, setRoute] = useState('');
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignedIn, setIsSignedIn] = useState(false);

  const loadUser = (data) => {
    setId(data.id);
    setName(data.name);
    setEmail(data.email);
  }

  const onRouteChange = (route) => {
    if (route === 'signOut') {
      setRoute('');
      setId('');
      setName('');
      setEmail('');
      setPassword('');
      setIsSignedIn(false);

    } else if (route === 'signedIn') {
      setIsSignedIn(true);
    }
    setRoute(route);
  }

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' element={<Store/>}/>
            <Route path='/men' element={<ShopCategory banner={menBanner} text="For Men" category="men" test={name}/>}/>
            <Route path='/women' element={<ShopCategory banner={womenBanner} text="For Women"category="women"/>}/>
            <Route path='/kids' element={<ShopCategory banner={kidsBanner} text="For Kids" category="kids"/>}/>
            <Route path='/product' element={<Product/>}>
              <Route path=':productId' element={<Product/>}/>
            </Route>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/sign-up' element={<SignUp onRouteChange={onRouteChange} loadUser={loadUser}/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App;
