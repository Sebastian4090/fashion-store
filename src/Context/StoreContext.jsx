import React, { createContext, useState } from 'react';
import all_products from "../Components/assets/allProducts/allProducts";

export const StoreContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i=0;i<all_products.length+1;i++) {
        cart[i] = 0;
    }
    return cart;
}

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId] : prev[itemId]+1}))
        console.log(cartItems);
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId] : prev[itemId]-1}))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item]>0) {
                let itemInfo = all_products.find((product)=>product.id===Number(item))
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item]>0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }

    const contextVal = { getTotalCartItems, getTotalCartAmount, all_products, cartItems, addToCart, removeFromCart };

    return (
        <StoreContext.Provider value={contextVal}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;