import { useContext } from 'react';
import './CartItems.css';
import { StoreContext } from '../../Context/StoreContext';
import remove_icon from '../assets/remove_icon.svg'

const CartItems = () => {
    const { getTotalCartAmount, all_products, cartItems, removeFromCart } = useContext(StoreContext);
    return ( 
    <div className="cartItems">
        <div className="cartItems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr/>
        <div>
            <hr/>
            {all_products.map((e)=>{
                if(cartItems[e.id]>0) {
                    return (
                        <div>
                            <div className="cartItems-format cartItems-format-main">
                                <img src={e.image} alt="product" className='cartIcon-product-icon' />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='cartItems-quantity'>{cartItems[e.id]}</button>
                                <p>${e.new_price*cartItems[e.id]}</p>
                                <img src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="remove" className='cartIcon-remove-icon' />
                            </div>
                            <hr/>
                        </div>
                    )
                }
                return null;
            })}
            <div className="cartItems-down">
                <div className="cartItems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartItems-totalItem">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr/>
                        <div className="cartItems-totalItem">
                            <p>Shipping fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartItems-totalItem">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartItems-promocode">
                    <p>If you have a Promo Code, enter it here:</p>
                    <div className="cartItems-promobox">
                        <input type="text" placeholder='Promo Code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div> );
}
 
export default CartItems;