'use client';
import React, { createContext, useState } from 'react';

export const cartCtx = createContext();

const CartContext = ({children}) => {

    const [cartItemState,setCartItemState] = useState([]);

    const addItem = (item) => {
        setCartItemState(prevItems => {
            if (!prevItems.includes(item)) {
                return [...prevItems, item];
            } else {
                return prevItems;
            }
        });
        console.log(cartItemState);
    }

  return (
    <cartCtx.Provider value={{addItem , cartItemState}}>
      {children}
    </cartCtx.Provider>
  )
}

export default CartContext
