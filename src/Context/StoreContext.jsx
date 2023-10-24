import React, { createContext } from 'react';
import all_products from "../Components/assets/allProducts/allProducts";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const contextVal = {all_products};

    return (
        <StoreContext.Provider value={contextVal}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;