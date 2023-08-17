"use client"
import { createContext, useState } from "react";

export const ViewContext = createContext();
export const ViewWrapper = ({children}) => {

    const [loginModal, setLoginModal] = useState(false);
    const [cartModal, setCartModal] = useState(false);
    const [sideModal, setSideModal] = useState(false);
    const [test, setTest] = useState('test1234');


    
    return (
        <ViewContext.Provider value={{
            loginModal, cartModal,sideModal, setCartModal, setLoginModal, setSideModal,test
        }}>
            {children}
        </ViewContext.Provider>
    )
}