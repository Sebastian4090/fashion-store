import './Navbar.css';
import logo from '../assets/logo.png';
import cart_icon from '../assets/cart_icon.png';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

const Navbar = () => {

    const [menu, setMenu] = useState('shop');
    const [hover, setHover] = useState('');
    const { getTotalCartItems } = useContext(StoreContext);

    return ( 
        <div className='navbar'>
            <div className='nav-logo'>
                <Link to='/'><img src={logo} alt="logo" onClick={()=>setMenu('shop')}/></Link>
            </div>
            <ul className='nav-menu'>
                <li onClick={()=>{setMenu('all')}}
                    onMouseEnter={()=>setHover('allH')}
                    onMouseLeave={()=>setHover('')}>
                    <Link style={{ textDecoration: 'none'}} to='/'>Main</Link>{menu==="all"||hover==='allH'?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu('men')}}
                    onMouseEnter={()=>setHover('menH')}
                    onMouseLeave={()=>setHover('')}>
                    <Link style={{ textDecoration: 'none'}}  to='/men'>For Men</Link>{menu==="men"||hover==='menH'?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu('women')}}
                    onMouseEnter={()=>setHover('womenH')}
                    onMouseLeave={()=>setHover('')}>
                    <Link style={{ textDecoration: 'none'}}  to='/women'>For Women</Link>{menu==="women"||hover==='womenH'?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu('kids')}}
                    onMouseEnter={()=>setHover('kidsH')}
                    onMouseLeave={()=>setHover('')}>
                    <Link style={{ textDecoration: 'none'}}  to='/kids'>For Kids</Link>{menu==="kids"||hover==='kidsH'?<hr/>:<></>}</li>
            </ul>
            <div className='nav-login-cart'>
                <Link to='/sign-up'><button onClick={()=>setMenu('shop')}>Sign Up</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="cart"/></Link>
                {getTotalCartItems() > 0 ? <div className="nav-cart-count">{getTotalCartItems()}</div> : ''}
            </div>
        </div>
     );
}
 
export default Navbar;