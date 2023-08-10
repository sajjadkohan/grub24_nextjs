"use client"
import { createContext, useState } from "react";

export const ViewContext = createContext();
export const ViewWrapper = ({children}) => {

    const [loginModal, setLoginModal] = useState(false);
    const [cartModal, setCartModal] = useState(false);

    
    return (
        <ViewContext.Provider value={{
            loginModal, cartModal, setCartModal, setLoginModal
        }}>
            {children}
        </ViewContext.Provider>
    )
}